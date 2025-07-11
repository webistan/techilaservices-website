"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { useWordPressQuery } from "../../hooks/use-wordpress-query"
import { GET_CASE_STUDIES_NEW } from "../../lib/wp-queries"

function CaseStudyCardSkeleton() {
  return (
    <div className="group block animate-pulse">
      <div className="overflow-hidden rounded-lg shadow-md mb-4 bg-neutral-200 h-64 w-full" />
      <div className="mt-4">
        <div className="flex items-center">
          <div className="bg-neutral-200 h-6 w-32 rounded-md mr-2" />
          <div className="bg-neutral-200 h-4 w-8 rounded-md" />
        </div>
        <div className="bg-neutral-200 h-4 w-24 rounded-md mt-2" />
      </div>
    </div>
  );
}

const PAGE_SIZE = 6;

export default function CaseStudiesList() {
  const [after, setAfter] = useState<string | null>(null);
  const { data, error, loading } = useWordPressQuery<any>(GET_CASE_STUDIES_NEW, { first: PAGE_SIZE, after });

  const caseStudies = data?.nProjects?.edges || [];
  const pageInfo = data?.nProjects?.pageInfo;

  if (loading) {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <CaseStudyCardSkeleton key={i} />
          ))}
        </div>
        {/* Pagination Skeleton */}
        <nav className="mt-16 flex justify-start items-center space-x-4">
          <div className="bg-neutral-200 h-8 w-8 rounded-md" />
          <div className="bg-neutral-200 h-8 w-8 rounded-md" />
          <div className="bg-neutral-200 h-8 w-8 rounded-md" />
        </nav>
      </>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Failed to load case studies.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {caseStudies.map((edge: any, index: number) => {
          const caseStudy = edge.node;
          const firstCategory = caseStudy.nProjectCategories?.edges?.[0]?.node?.name || "Case Study";
          
          return (
            <Link href={`/case-studies/${caseStudy.slug}`} key={caseStudy.id || index} className="group block">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={caseStudy.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold mr-2">{caseStudy.title}</h2>
                  {/* <span className="text-xs text-neutral-500 transform -rotate-90 origin-bottom-left whitespace-nowrap relative -top-1 left-1">
                    {firstCategory.substring(0, 4).toUpperCase()}
                  </span> */}
                </div>
                <p className="text-sm text-neutral-500">{firstCategory}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <nav className="mt-16 flex justify-start items-center space-x-4">
        <button
          className="text-sm font-medium px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setAfter(null)}
          disabled={!pageInfo?.hasPreviousPage || !after}
        >
          Previous
        </button>
        <button
          className="text-sm font-medium px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setAfter(pageInfo?.endCursor)}
          disabled={!pageInfo?.hasNextPage}
        >
          Next
        </button>
        <Link href="#" className="text-sm font-medium p-2 rounded-md hover:bg-neutral-100">
          <ChevronRight className="w-5 h-5" />
        </Link>
      </nav>
    </>
  );
} 