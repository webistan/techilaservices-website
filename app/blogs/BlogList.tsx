"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useWordPressQuery } from "../../hooks/use-wordpress-query"
import { GET_BLOG_POSTS } from "../../lib/wp-queries"

function BlogCardSkeleton() {
  return (
    <div className="group block animate-pulse">
      <div className="overflow-hidden rounded-lg shadow-md mb-4 bg-neutral-200 h-44 w-full" />
      <div className="flex items-center text-sm mb-2">
        <span className="bg-neutral-200 h-6 w-20 rounded-md mr-3" />
        <span className="bg-neutral-200 h-6 w-16 rounded-md" />
      </div>
      <div className="bg-neutral-200 h-6 w-3/4 rounded mb-2" />
      <div className="bg-neutral-200 h-4 w-full rounded mb-1" />
      <div className="bg-neutral-200 h-4 w-5/6 rounded" />
    </div>
  );
}

const PAGE_SIZE = 6;

export default function BlogList() {
  const [after, setAfter] = useState<string | null>(null);
  const { data, error, loading } = useWordPressQuery<any>(GET_BLOG_POSTS, { first: PAGE_SIZE, after });

  const posts = data?.posts?.edges || [];
  const pageInfo = data?.posts?.pageInfo;

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {Array.from({ length: PAGE_SIZE }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (error) {
    return <div className="text-center py-10 text-red-500">Failed to load blogs.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((edge: any, index: number) => {
          const post = edge.node;
          return (
            <Link href={`/blogs/${post.slug}`} key={post.id || index} className="group block">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-4">
                <Image
                  src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center text-xs text-neutral-500 mb-2">
                <span className="font-medium text-neutral-800 bg-neutral-100 px-2 py-1 rounded-md mr-3">
                  {post.categories?.nodes?.[0]?.name || "Uncategorized"}
                </span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-neutral-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </Link>
          );
        })}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          className="px-4 py-2 rounded bg-neutral-100 text-neutral-800 font-medium disabled:opacity-50"
          onClick={() => setAfter(null)}
          disabled={!pageInfo?.hasPreviousPage || !after}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 rounded bg-neutral-100 text-neutral-800 font-medium disabled:opacity-50"
          onClick={() => setAfter(pageInfo?.endCursor)}
          disabled={!pageInfo?.hasNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
} 