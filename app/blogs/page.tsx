import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Image from "next/image"
import Link from "next/link"
import { useWordPressQuery } from "../../hooks/use-wordpress-query"
import { GET_BLOG_POSTS } from "../../lib/wp-queries"
import BlogList from "./BlogList"

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

        {/* Blog Posts Grid (Client Component) */}
        <BlogList />

        {/* Pagination */}
        {/* <nav className="mt-16 flex justify-start items-center space-x-2 text-sm">
          <span className="font-medium px-3 py-1 rounded-md bg-neutral-100 text-neutral-800">1</span>
          <a href="#" className="font-medium px-3 py-1 rounded-md hover:bg-neutral-100">
            2
          </a>
          <a href="#" className="font-medium px-3 py-1 rounded-md hover:bg-neutral-100">
            Next
          </a>
        </nav> */}
      </div>
    </div>
    <Footer/>
    </>
  )
}
