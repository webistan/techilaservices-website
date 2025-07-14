import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Job } from "@/lib/types/job.model";

async function getJobById(id: string): Promise<Job | null> {
  const docRef = doc(db, "Jobs", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  const data = docSnap.data();
  console.log("datadatadatadata",data)
  return {
    ...data,
    id: docSnap.id,
  } as Job;
}

async function submitApplication(formData: FormData) {
  "use server";
  const id = formData.get("jobId");
  redirect(`/career/${id}?success=1`);
}

export default async function JobDetailPage({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string } }) {
  const job = await getJobById(params.id);
  const submitted = searchParams?.success === "1";

  if (!job) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center text-gray-500">Job not found.</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 w-full py-10">
        {/* Job Header */}
        <section className="w-full bg-gradient-to-r from-primary to-blue-700 py-14 px-4 text-white shadow-md">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight leading-tight">{job.jobTitle}</h1>
              <div className="flex flex-wrap gap-3 text-lg opacity-90 mb-2">
                <span className="bg-white/10 px-3 py-1 rounded-full">{job.location}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">{job.jobType === "FT" ? "Full Time" : "Contract"}</span>
              </div>
              {job.generateJD && (
                <div className="max-w-2xl text-base opacity-90 mt-2 prose prose-invert prose-p:my-2 prose-li:my-1" dangerouslySetInnerHTML={{ __html: job.generateJD }} />
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mt-10 px-4">
          {/* Job Details */}
          <section className="flex-1 bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-primary tracking-tight">About the Role</h2>
            <div className="mb-8 text-gray-700 whitespace-pre-line leading-relaxed text-lg">
              {job.jobDescription}
            </div>
            {/* Optionally, split jobDescription into sections if structured */}
          </section>

          {/* Application Form */}
          <aside className="w-full md:w-[420px] bg-white rounded-2xl shadow-xl p-10 border border-gray-100 flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-primary tracking-tight">Apply Now</h2>
            {submitted ? (
              <div className="text-green-600 text-lg font-medium text-center py-8">Thank you for applying! We will get back to you soon.</div>
            ) : (
              <form className="space-y-6" action={submitApplication} method="POST" encType="multipart/form-data">
                <input type="hidden" name="jobId" value={job.id} />
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="firstName">First Name<span className="text-red-500">*</span></label>
                  <Input name="firstName" id="firstName" placeholder="First Name" required className="focus:ring-2 focus:ring-primary/40" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="lastName">Last Name<span className="text-red-500">*</span></label>
                  <Input name="lastName" id="lastName" placeholder="Last Name" required className="focus:ring-2 focus:ring-primary/40" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="email">Email<span className="text-red-500">*</span></label>
                  <Input name="email" id="email" type="email" placeholder="Email" required className="focus:ring-2 focus:ring-primary/40" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="contact">Contact Number<span className="text-red-500">*</span></label>
                  <Input name="contact" id="contact" placeholder="Contact Number" required className="focus:ring-2 focus:ring-primary/40" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="coverLetter">Cover Letter</label>
                  <Textarea name="coverLetter" id="coverLetter" placeholder="Cover Letter" rows={4} className="w-full focus:ring-2 focus:ring-primary/40" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="file">Upload CV/Resume<span className="text-red-500">*</span></label>
                  <Input name="file" id="file" type="file" accept=".pdf,.doc,.docx" className="w-full focus:ring-2 focus:ring-primary/40" required />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="agree" id="agree" required className="w-4 h-4 accent-primary" />
                  <label htmlFor="agree" className="text-sm">By using this form you agree with the storage and handling of your data by this website. <span className="text-red-500">*</span></label>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-colors text-lg py-2 rounded-lg shadow">Submit Application</Button>
              </form>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
} 