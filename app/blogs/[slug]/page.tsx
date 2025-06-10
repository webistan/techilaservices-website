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

// Placeholder data - replace with actual data for each blog post
const blogPostData = {
  slug: "how-to-create-your-purpose-filled-career-comfortable",
  title: "How to create your purpose-filled career comfortable",
  author: "WealCoder",
  postDate: "April 18, 2024",
  commentsCount: "No Comments", // or a number
  heroImageUrl: "/placeholder.svg?width=1200&height=600",
  views: 1709,
  content: [
    {
      type: "paragraph",
      text: "Myriam was first trained as a sculptor in Montreal and then in Helsinki, Finland. She is now based in Quebec but works for clients all around the globe. From textile design to murals, editorial illustrations and book covers, her style is recognized by her simple and perfectly arranged shapes as well as her rich and vibrant color palette. Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket.",
    },
    {
      type: "paragraph",
      text: "Engraved attention to detail elegant with neutral colors scheme quartz leather strap fastens with a pin a buckle clasp. However, the same reason also makes it messy. If someone is having a bad day. Every food has a point value.",
    },
    {
      type: "blockquote",
      text: "Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek harmony.",
      attribution: "Adamson Janny",
    },
    {
      type: "paragraph",
      text: "Beckoning a diverse audience of food lovers who may have never considered trying dumplings before. The unique blend of bold quirkiness and personality sets this brand apart, marking its own distinct place in the crowded world of bold font family. We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary.",
    },
    {
      type: "image_with_text",
      imageUrl: "/placeholder.svg?width=600&height=400&query=men+discussion",
      alt: "Men in discussion",
      text_before: null,
      text_after: [
        "Beckoning a diverse audience of food lovers who may have never considered trying dumplings before. The unique blend of bold quirkiness and personality sets this brand apart, marking its own distinct place in the crowded world of bold font family. We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary.",
        "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette.",
      ],
    },
    { type: "heading", level: 2, text: "Health Awareness" },
    {
      type: "paragraph",
      text: "We had observers go into the workplace and we timed people's activities to the second. We've been to various workplaces, all high-tech companies. We wanted to look at information workers. We had observers shadow each person for three and a half days.",
    },
    {
      type: "list",
      items: ["Create the table lines here", "Organise everything early thoroughly", "Create the table lines here"],
    },
    {
      type: "paragraph",
      text: "Achieving deep work should be our goal in any team, but doing it in an office setting can because of so many distractions. Asynchronous communication in a remote setting is perfect for it. I'm not a fan of long reads with too many unnecessary details, so I'll \"jump\" into the subject right away. My guide consists of several parts; thus, you can stop reading at any point when you understand that what you have learned.",
    },
    {
      type: "paragraph",
      text: "If they pick up a phone call, that's the start time. When they put the phone down, that's the stop time. When they turn to the Word application we get the start time and stop time. We found people switched these activities on average of every three minutes and five seconds.",
    },
  ],
  tags: ["Business", "Design", "Develop", "Software"],
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch blogPostData based on params.slug
  const post = blogPostData

  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-6 text-neutral-700 leading-relaxed">
            {item.text}
          </p>
        )
      case "blockquote":
        return (
          <blockquote key={index} className="my-8 p-6 border-l-4 border-neutral-300 bg-neutral-50">
            <p className="text-xl italic text-neutral-800 mb-2">"{item.text}"</p>
            {item.attribution && <footer className="text-neutral-600">- {item.attribution}</footer>}
          </blockquote>
        )
      case "image_with_text":
        return (
          <div key={index} className="my-8">
            {item.text_before && <p className="mb-6 text-neutral-700 leading-relaxed">{item.text_before}</p>}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="md:order-1">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:order-2 space-y-4">
                {item.text_after?.map((pText: string, pIdx: number) => (
                  <p key={pIdx} className="text-neutral-700 leading-relaxed">
                    {pText}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )
      case "heading":
        if (item.level === 2)
          return (
            <h2 key={index} className="text-3xl font-semibold mt-10 mb-4">
              {item.text}
            </h2>
          )
        // Add more heading levels if needed
        return (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-3">
            {item.text}
          </h3>
        )
      case "list":
        return (
          <ul key={index} className="list-none space-y-2 my-6 pl-0">
            {item.items.map((li: string, liIdx: number) => (
              <li key={liIdx} className="flex items-start">
                <Plus className="w-4 h-4 text-neutral-500 mr-3 mt-1 shrink-0" />
                <span className="text-neutral-700 leading-relaxed">{li}</span>
              </li>
            ))}
          </ul>
        )
      default:
        return null
    }
  }

  return (
    <>
    <Header/>
    <div className="bg-white text-neutral-800">
      {/* Post Header */}
      <header className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">{post.title}</h1>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-sm text-neutral-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-neutral-500" />
              <span>
                Written By <span className="font-medium text-neutral-800">{post.author}</span>
              </span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-2 text-neutral-500" />
              <span>
                Post Date <span className="font-medium text-neutral-800">{post.postDate}</span>
              </span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-neutral-500" />
              <span>
                Comments <span className="font-medium text-neutral-800">{post.commentsCount}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <Image
          src={post.heroImageUrl || "/placeholder.svg"}
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
              <span className="text-xs text-neutral-500">{post.views} Views</span>
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
            {post.content.map(renderContent)}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-sm font-semibold uppercase text-neutral-600 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                    {tag}
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
    <Footer/>
    </>
  )
}
