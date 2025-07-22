"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useWordPressQuery } from "../../hooks/use-wordpress-query";
import { GET_BLOG_POSTS } from "../../lib/wp-queries";
import { Button } from "../ui/button";
import ArrowRightAnimated from "../ui/ArrowRightAnimated";

interface BlogSectionProps {}

function BlogSection({}: BlogSectionProps) {
  const { data, error, loading } = useWordPressQuery<any>(GET_BLOG_POSTS, { first: 2 });
  const posts = data?.posts?.edges || [];

  return (
    <section className="py-12 sm:py-12 lg:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-start justify-center h-full">
          <div className="text-orange-500 text-sm font-medium mb-2">// 08 - Techila BLOG</div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Journal insight<br />the Techila
          </h2>
          <Link href="/blogs" passHref legacyBehavior>
            <Button className="bg-[#0a1a3c] hover:bg-[#1a2a4c] text-white text-lg rounded-full px-8 py-6 flex items-center gap-3">
              All Blog <ArrowRightAnimated />
            </Button>
          </Link>
        </div>
        {/* Right Side - Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {loading && (
            <>
              <div className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
              <div className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
            </>
          )}
          {error && <div className="col-span-2 text-red-500">Failed to load blogs.</div>}
          {posts.map((edge: any, idx: number) => {
            const post = edge.node;
            return (
              <Link href={`/blogs/${post.slug}`} key={post.id || idx} className="block group">
                <div className="overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-slate-200">
                  <Image
                    src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center text-sm mb-2">
                  <span className="font-semibold text-[#0a1a3c] bg-slate-100 px-2 py-1 rounded-md mr-3">
                    {post.categories?.nodes?.[0]?.name || "Uncategorized"}
                  </span>
                  <span className="text-slate-500">{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1a3c] group-hover:text-[#1a2a4c] leading-snug">
                  {post.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
