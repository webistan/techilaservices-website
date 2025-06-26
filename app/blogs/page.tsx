import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import BlogList from "./BlogList"

export default function BlogListPage() {
  return (
    <>
      <Header />
      <div className="bg-white text-neutral-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">IT BLOG</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Exploring The World Of <br />
              IT Management
            </h1>
          </header>
          {/* Blog Posts Grid (Client Component) */}
          <BlogList />
        </div>
      </div>
      <Footer />
    </>
  )
}
