import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    category: "Business",
    date: "April 18, 2024",
    title: "How to create your purpose-filled career comfortable",
    excerpt:
      "How to create your purpose-filled career comfortable clothes Written by WealCoder Post Date comments No Comments Views shares Facebook Twitter Pinterest Myriam was first trained as a sculptor in Montreal",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/blog/post-1",
  },
  {
    category: "Business",
    date: "April 18, 2024",
    title: "How to create your purpose-filled career comfortable clothes",
    excerpt:
      "How to create your purpose-filled career comfortable clothes Written by WealCoder Post Date comments No Comments Views shares Facebook Twitter Pinterest Myriam was first trained as a sculptor in",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/blog/post-2",
  },
  {
    category: "Business",
    date: "April 18, 2024",
    title: "Sitting with your basic goodness top signs that time.",
    excerpt:
      "Sitting with your basic goodness top signs that time. Written by WealCoder Post Date comments No Comments Views shares Facebook Twitter Pinterest Myriam was first trained as a sculptor",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/blog/post-3",
  },
  {
    category: "Business",
    date: "April 18, 2024",
    title: "Understanding behavioral biases and making rational way",
    excerpt:
      "Understanding behavioral biases and making rational way Written by WealCoder Post Date comments No Comments Views shares Facebook Twitter Pinterest Myriam was first trained as a sculptor in Montreal",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/blog/post-4",
  },
  {
    category: "Business",
    date: "April 18, 2024",
    title: "Sitting with your basic goodness top signs that time.",
    excerpt:
      "Sitting with your basic goodness top signs that time. Written by WealCoder Post Date comments No Comments Views shares Facebook Twitter Pinterest Myriam was first trained as a sculptor",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/blog/post-5",
  },
  {
    category: "Business",
    date: "April 18, 2024",
    title: "How to create your purpose-filled career comfortable clothes",
    excerpt:
      "How to create your purpose-filled career comfortable clothes Written by WealCoder Post Date comments No Comments Views shares Facebook Twitter Pinterest Myriam was first trained as a sculptor in Montreal",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/blog/post-6",
  },
]

export default function BlogListPage() {
  return (
    <>
    <Header/>
    <div className="bg-white text-neutral-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">BINOX BLOG</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Journal insight <br />
            the binox
          </h1>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index} className="group block">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-4">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center text-sm text-neutral-500 mb-2">
                <span className="font-medium text-neutral-800 bg-neutral-100 px-2 py-1 rounded-md mr-3">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-neutral-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-600 line-clamp-3">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-16 flex justify-start items-center space-x-2 text-sm">
          <span className="font-medium px-3 py-1 rounded-md bg-neutral-100 text-neutral-800">1</span>
          <Link href="#" className="font-medium px-3 py-1 rounded-md hover:bg-neutral-100">
            2
          </Link>
          <Link href="#" className="font-medium px-3 py-1 rounded-md hover:bg-neutral-100">
            Next
          </Link>
        </nav>
      </div>
    </div>
    <Footer/>
    </>
  )
}
