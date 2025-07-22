import Image from "next/image"
import {
  User,
  CalendarDays,
} from "lucide-react"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"
import { fetchWordPressQuery } from "../../../lib/fetch-wordpress-query"
import { GET_BLOG_POST_BY_SLUG } from "../../../lib/wp-queries"
import { notFound } from "next/navigation"
import CommentFormSection from "@/components/Comment-Form"
import TagsSection from "@/components/Tags"
import SocialShareSideSection from "@/components/Social-Share-Side"

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { data, error } = await fetchWordPressQuery<any>(GET_BLOG_POST_BY_SLUG, { slug: params.slug });
  const post = data?.post;

  if (!post || error) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="bg-white text-neutral-800">
        
        {/* Post Header */}
        <header className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">{post.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-sm text-neutral-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-neutral-500" />
                <span>
                  {/* Author not available in query, so omit or use a placeholder */}
                  Written By <span className="font-medium text-neutral-800">Unknown</span>
                </span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2 text-neutral-500" />
                <span>
                  Post Date <span className="font-medium text-neutral-800">{new Date(post.date).toLocaleDateString()}</span>
                </span>
              </div>
              {/* Comments count not available, so omit */}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
          <Image
            src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
            alt={`${post.title} hero image`}
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            priority
          />
        </div>

        {/* Main Content with Sidebar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Social Share / Stats Sidebar */}
            <SocialShareSideSection />

            {/* Article Content */}
            <article className="flex-1 prose max-w-none prose-neutral">
              {/* Render HTML content from WordPress */}
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Tags (categories) */}
              <TagsSection post={post} />

              {/* Comment Form */}
              <CommentFormSection />
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
