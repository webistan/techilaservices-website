import Image from "next/image"
import { Linkedin, ArrowRight } from "lucide-react"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"

const teamMembers = [
  {
    name: "Amanulla Joey",
    role: "Founder & CEO",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Rodella May",
    role: "Sr. Executive",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "William Ray",
    role: "Co-Ordinator",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Albert Hyekin",
    role: "Co-Ordinator",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Samantha",
    role: "Officer",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Steven Dirkse",
    role: "Founder & CEO",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Robin Holds",
    role: "Sr. Executive",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Marius Bützler",
    role: "Co-Ordinator",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Franz Nelissen",
    role: "Co-Ordinator",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
  {
    name: "Samantha2",
    role: "Officer",
    imageUrl: "/placeholder.svg?width=400&height=500",
    linkedinUrl: "#",
  },
]

export default function TeamPage() {
  return (
    <>
    <Header/>
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="lg:w-2/5">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">BINOR TEAM</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6 lg:mb-0 lg:w-1/2">
              We're share our quality team
            </h1>
            <div className="lg:w-2/5">
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Every decision make need answer the million dollar question how will this benefit our partner goal best
                we work to develop solution:
              </p>
              <a href="#" className="font-semibold text-gray-900 inline-flex items-center group">
                Join our team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <div className="mb-4">
                <Image
                  src={member.imageUrl || "/placeholder.svg"}
                  alt={`Portrait of ${member.name}`}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn profile`}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
