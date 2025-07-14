"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Job } from "@/lib/types/job.model";
import CareerJobList from "./CareerJobList";
import React from "react";

interface CareerSearchProps {
  jobs: Job[];
  nextCursor: string | null;
  query: string;
}

export default function CareerSearch({ jobs, nextCursor, query }: CareerSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = React.useState(query || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/career?query=${encodeURIComponent(search)}`);
  };

  const handleNext = () => {
    if (nextCursor) {
      router.push(`/career?cursor=${nextCursor}&query=${encodeURIComponent(search)}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search jobs..."
          className="px-4 py-2 border rounded w-full max-w-md"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded font-semibold">Search</button>
      </form>
      <CareerJobList jobs={jobs} />
      <div className="flex justify-end mt-8">
        <button
          onClick={handleNext}
          disabled={!nextCursor}
          className={`px-4 py-2 rounded bg-blue-600 text-white font-semibold ${!nextCursor ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
    </>
  );
} 