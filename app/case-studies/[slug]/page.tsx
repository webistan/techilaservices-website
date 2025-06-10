import Image from "next/image"
import { Target, Store, Zap, MapPinned, Plus } from "lucide-react"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"

// Placeholder data - replace with actual data for each case study
const caseStudyData = {
  slug: "walmark-retail-hr-management",
  preTitle: "BINOX PROJECT DETAILS",
  title: "Walmark retail HR management",
  heroImageUrl: "/placeholder.svg?width=1200&height=600",
  meta: {
    industry: "Retail",
    client: "Marius Bützler",
    startDate: "16 Jan, 2024",
  },
  problem: {
    title: "WALMARK PROBLEM",
    heading: "Media market a turn wanted to assess the impact turning display",
    description1:
      "Myriam was first trained as a sculptor in Montreal and then in Helsinki, Finland. She is now based in Quebec but works for clients all around the globe. From textile design to murals, editorial illustrations and book covers, her style is recognized by her simple and perfectly arranged shapes as well as her rich and vibrant color palette. Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engaged attention to detail elegant with neutral colors scheme quartz leather strap fasten with a pin a buckle clasp.",
    description2:
      "However, the same reason also makes it messy. If someone is having a bad day, we might see it as a sign of tension or lack of investment in the project. For outsiders, lacking an understanding of the complex dynamics of a team can lead to the wrong conclusions.",
    imageUrl: "/placeholder.svg?width=1000&height=400",
  },
  impacts: [
    {
      icon: Target,
      title: "Impact on sales",
      description: "Trade stocks of the biggest names in the international stock market",
    },
    {
      icon: Store,
      title: "Store types",
      description: "Trade stocks of the biggest names in the international stock market",
    },
    {
      icon: Zap,
      title: "Energy savings",
      description: "Trade stocks of the biggest names in the international stock market",
    },
    {
      icon: MapPinned,
      title: "Across the country",
      description: "Trade stocks of the biggest names in the international stock market",
    },
  ],
  approach: {
    title: "WALMARK APPROACH",
    heading: "Binox evaluated the impact of switching",
    description:
      "However, the same reason also makes it messy. If someone is having a bad day, we might see it as a sign of tension or lack of investment in the project. For outsiders, lacking an understanding of the complex dynamics of a team can lead to the wrong conclusions.",
    points: [
      "Create the table lines here",
      "Organize everything early thoroughly",
      "Development",
      "Shopify Development",
    ],
  },
  result: {
    title: "WALMARK RESULT",
    heading: "Make more data driven decision",
    description1:
      "Myriam was first trained as a sculptor in Montreal and then in Helsinki, Finland. She is now based in Quebec but works for clients all around the globe. From textile design to murals, editorial illustrations and book covers, her style is recognized by her simple and perfectly arranged shapes as well as her rich and vibrant color palette. Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colors scheme quartz leather strap fasten with a pin a buckle clasp.",
    description2:
      "However, the same reason also makes it messy. If someone is having a bad day, we might see it as a sign of tension or lack of investment in the project. For outsiders, lacking an understanding of the complex dynamics of a team can lead to the wrong conclusions.",
  },
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch caseStudyData based on params.slug
  const study = caseStudyData

  return (
   <>
   <Header/>
   <div className="bg-white text-neutral-800">
      {/* Header Section */}
      <header className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">{study.preTitle}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">{study.title}</h1>
          <div className="aspect-w-16 aspect-h-7 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={study.heroImageUrl || "/placeholder.svg"}
              alt={`${study.title} hero image`}
              width={1200}
              height={600} // Adjusted for a 2:1 aspect ratio, can be fine-tuned
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar / Meta Info */}
            <aside className="md:col-span-1 space-y-6 text-sm">
              <div>
                <h3 className="font-semibold text-neutral-600 mb-1">Industry</h3>
                <p>{study.meta.industry}</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-600 mb-1">Client</h3>
                <p>{study.meta.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-600 mb-1">Start Date</h3>
                <p>{study.meta.startDate}</p>
              </div>
            </aside>

            {/* Content Area */}
            <div className="md:col-span-3 space-y-12">
              {/* Problem Section */}
              <section>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">{study.problem.title}</p>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{study.problem.heading}</h2>
                <p className="text-neutral-600 mb-4">{study.problem.description1}</p>
                <p className="text-neutral-600 mb-8">{study.problem.description2}</p>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={study.problem.imageUrl || "/placeholder.svg"}
                    alt="Problem illustration"
                    width={1000}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </section>

              {/* Impacts Section */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-b border-neutral-200">
                {study.impacts.map((impact, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <impact.icon className="w-8 h-8 text-neutral-700 mb-3 mx-auto sm:mx-0" strokeWidth={1.5} />
                    <h3 className="font-semibold mb-1">{impact.title}</h3>
                    <p className="text-sm text-neutral-600">{impact.description}</p>
                  </div>
                ))}
              </section>

              {/* Approach Section */}
              <section>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">{study.approach.title}</p>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{study.approach.heading}</h2>
                <p className="text-neutral-600 mb-6">{study.approach.description}</p>
                <ul className="space-y-2">
                  {study.approach.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <Plus className="w-4 h-4 text-neutral-600 mr-2 mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Result Section */}
              <section>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">{study.result.title}</p>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{study.result.heading}</h2>
                <p className="text-neutral-600 mb-4">{study.result.description1}</p>
                <p className="text-neutral-600">{study.result.description2}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
   <Footer/>
   </>
  )
}
