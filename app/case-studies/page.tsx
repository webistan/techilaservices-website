import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"

const caseStudies = [
  {
    title: "Graphic Design",
    category: "Case Study",
    tag: "e936",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "#",
  },
  {
    title: "Market Research",
    category: "Creativity",
    tag: "e936",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "#",
  },
  {
    title: "Market Strategy",
    category: "Case Study",
    tag: "e936",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "#",
  },
  {
    title: "Employment",
    category: "Case Study",
    tag: "e936",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "#",
  },
  {
    title: "Leadership",
    category: "Case Study",
    tag: "e936",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "#",
  },
  {
    title: "Strategy",
    category: "Creativity",
    tag: "e936",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "#",
  },
]

export default function CaseStudiesPage() {
  return (
   <>
   <Header/>
   <div className="bg-white text-neutral-800 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
              <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">BINOX PROJECT</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                We're share our <br />
                projects
              </h1>
            </div>
            <p className="text-neutral-600 max-w-md text-sm md:text-base">
              Every decision make need answer the million dollar question how will this benefit our partner goal best we
              work to develop solution:
            </p>
          </div>
        </header>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {caseStudies.map((study, index) => (
            <Link href={study.link} key={index} className="group block">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={study.imageUrl || "/placeholder.svg"}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold mr-2">{study.title}</h2>
                  <span className="text-xs text-neutral-500 transform -rotate-90 origin-bottom-left whitespace-nowrap relative -top-1 left-1">
                    {study.tag}
                  </span>
                </div>
                <p className="text-sm text-neutral-500">{study.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-16 flex justify-start items-center space-x-4">
          <span className="text-sm font-medium px-3 py-1 rounded-md bg-neutral-100 text-neutral-800">1</span>
          <Link href="#" className="text-sm font-medium px-3 py-1 rounded-md hover:bg-neutral-100">
            2
          </Link>
          <Link href="#" className="text-sm font-medium p-2 rounded-md hover:bg-neutral-100">
            <ChevronRight className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </div>
   <Footer/>
   </>
  )
}
