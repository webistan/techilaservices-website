"use client";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Job } from "@/lib/types/job.model";

export default function CareerJobList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) {
    return <div className="text-center text-gray-500">No job openings found.</div>;
  }
  return (
    <div className="space-y-6">
      {jobs.map(job => (
        <Card key={job.jobID}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-lg">{job.jobTitle}</CardTitle>
              <CardDescription>{job.location} &bull; {job.jobType === "FT" ? "Full Time" : "Contract"}</CardDescription>
            </div>
            <Link href={`/career/${job.jobID}`} className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors">Apply Now</Link>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
} 