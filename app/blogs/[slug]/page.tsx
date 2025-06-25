import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  CalendarDays,
  MessageSquare,
  Eye,
  Share2,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
  Plus,
} from "lucide-react"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"
import { fetchWordPressQuery } from "../../../lib/fetch-wordpress-query"
import { GET_BLOG_POST_BY_SLUG } from "../../../lib/wp-queries"
import { notFound } from "next/navigation"

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { data, error } = await fetchWordPressQuery<any>(GET_BLOG_POST_BY_SLUG, { slug: params.slug });
  const post = data?.post;
  console.log("postpostpost",post)

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Social Share / Stats Sidebar */}
            <aside className="lg:w-20 flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-6 py-4 lg:sticky lg:top-24 self-start">
              <div className="text-center">
                <Eye className="w-6 h-6 mx-auto text-neutral-500 mb-1" />
                <span className="text-xs text-neutral-500">Views</span>
              </div>
              <div className="text-center">
                <Share2 className="w-6 h-6 mx-auto text-neutral-500 mb-1" />
                <span className="text-xs text-neutral-500">Shares</span>
              </div>
              <a href="#" aria-label="Share on Twitter" className="text-neutral-500 hover:text-neutral-700">
                <Twitter className="w-6 h-6 mx-auto" />
              </a>
              <a href="#" aria-label="Share on Instagram" className="text-neutral-500 hover:text-neutral-700">
                <Instagram className="w-6 h-6 mx-auto" />
              </a>
              <a href="#" aria-label="Share on LinkedIn" className="text-neutral-500 hover:text-neutral-700">
                <Linkedin className="w-6 h-6 mx-auto" />
              </a>
            </aside>

            {/* Article Content */}
            <article className="flex-1 prose max-w-none prose-neutral">
              {/* Render HTML content from WordPress */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Tags (categories) */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-sm font-semibold uppercase text-neutral-600 mb-3">Categories:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.categories?.nodes?.map((cat: any, index: number) => (
                    <span key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                      {cat.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comment Form */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h2 className="text-2xl font-semibold mb-1">Leave a Reply</h2>
                <p className="text-sm text-neutral-600 mb-6">
                  Your email address will not be published. Required fields are marked *
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Name*
                      </label>
                      <Input type="text" id="name" name="name" placeholder="Enter Name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email*
                      </label>
                      <Input type="email" id="email" name="email" placeholder="Enter Email" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-neutral-700 mb-1">
                      Comment*
                    </label>
                    <Textarea id="comment" name="comment" rows={5} placeholder="Write your comments...." required />
                  </div>
                  <div>
                    <Button type="submit" className="bg-neutral-800 hover:bg-neutral-700 text-white">
                      Submit Now <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </form>
              </section>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
