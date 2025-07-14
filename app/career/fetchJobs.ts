import { db } from "@/lib/firebase";
import { collection, getDocs, limit, orderBy, query as firestoreQuery, startAfter, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Job } from "@/lib/types/job.model";

export async function fetchJobs(pageSize = 10, cursor?: string, searchQuery: string = "") {
  const jobsRef = collection(db, "Jobs");
  let q;
  if (cursor) {
    // Fetch the document for the cursor
    const cursorSnap = await getDocs(firestoreQuery(jobsRef, orderBy("createdAt", "desc")));
    const cursorDoc = cursorSnap.docs.find((doc) => doc.id === cursor);
    if (cursorDoc) {
      q = firestoreQuery(jobsRef, orderBy("createdAt", "desc"), startAfter(cursorDoc), limit(pageSize));
    } else {
      q = firestoreQuery(jobsRef, orderBy("createdAt", "desc"), limit(pageSize));
    }
  } else {
    q = firestoreQuery(jobsRef, orderBy("createdAt", "desc"), limit(pageSize));
  }
  const snapshot = await getDocs(q);
  let jobs: Job[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    jobs.push({
      ...data,
      jobID: doc.id,
      createdAt: data.createdAt?.toDate().toISOString() ?? null,
      updatedAt: data.updatedAt?.toDate().toISOString() ?? null,
      expiredAt: data.expiredAt?.toDate().toISOString() ?? null,
    } as Job);
  });
  // Filter by searchQuery if provided
  if (searchQuery) {
    jobs = jobs.filter(job => job.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase()) || job.location?.toLowerCase().includes(searchQuery.toLowerCase()));
  }
  const lastVisible = snapshot.docs[snapshot.docs.length - 1];
  const firstVisible = snapshot.docs[0];
  return { jobs, lastVisible: lastVisible ? lastVisible.id : null, firstVisible: firstVisible ? firstVisible.id : null };
} 