"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import CareerJobList from "./CareerJobList";

export default function CareerSearch({ jobs }: { jobs: any[] }) {
  const [search, setSearch] = useState("");
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase()) ||
    job.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-8">
        <Input
          placeholder="Search jobs by title, location, or type..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-white"
        />
      </div>
      <CareerJobList jobs={filteredJobs} />
    </>
  );
} 