import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"
import CaseStudiesList from "./CaseStudiesList"

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
              <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">Techila Case Studies</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                We're share our <br />
                Case Studies
              </h1>
            </div>
            <p className="text-neutral-600 max-w-md text-sm md:text-base">
            We presents the following case studies that exemplify the type of solutions and services we are providing across our customer base.


            </p>
          </div>
        </header>

        {/* Case Studies Grid */}
        <CaseStudiesList />
      </div>
    </div>
   <Footer/>
   </>
  )
}
