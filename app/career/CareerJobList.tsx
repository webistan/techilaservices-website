"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CareerJobList({ jobs }: { jobs: any[] }) {
  if (!jobs.length) {
    return <div className="text-center text-gray-500">No job openings found.</div>;
  }
  return (
    <div className="space-y-6">
      {jobs.map(job => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.location} &bull; {job.type}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{job.description}</p>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto" variant="default">Apply Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 