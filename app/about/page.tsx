import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/header"

export default function About() {
  return (
    <>
    {/* Header Section */}
    <Header/>
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-24">
        <div className="absolute -left-10 top-0 text-[20rem] font-bold text-gray-100 opacity-50">A</div>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl m-auto">
            <div className="z-10 pt-10">
              <p className="text-xs uppercase tracking-wider mb-4">SINCE ABOUT US</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-center">
                We&apos;re a consultant agency we working globally with-biggest company
              </h1>
              <div className="flex justify-center lg:justify-start">
                <div className="h-12 border-l border-gray-300"></div>
              </div>
              <div className="flex justify-center lg:justify-start mt-4">
                <button className="rounded-full bg-white p-3 shadow-md">
                  <Play className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full flex flex-col justify-between items-center py-10 px-4">
          <div className="text-xs font-medium tracking-widest transform rotate-90 origin-bottom-left translate-x-6">
            FOLLOW
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Business consultant"
                width={450}
                height={600}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We&apos;ve spent 30+ year&apos;s of experience. we helping business own become better employers.
              </h2>

              <div className="flex items-center gap-6 mb-8">
                <div className="bg-black text-white text-6xl font-bold p-4 rounded-tl-[2rem] rounded-bl-[2rem]">D</div>
                <div className="bg-gray-200 rounded-tr-[2rem] rounded-br-[2rem] overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Business meeting"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                We are passionate about guiding businesses through their financial journey with expertise, integrity and
                a personalized approach. we're highly dedicated to financial journey business we operate in a like an
                intricate field down with money.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                Working with <span className="underline font-medium">lower cost</span> gives you a peace of mind in
                real-time, and that your taxes are filed and paid on schedule.
              </p>

              <Button variant="default" className="bg-black text-white rounded-none px-6">
                Contact US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="relative">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Team collaboration"
          width={1200}
          height={500}
          className="w-full object-cover h-[400px]"
        />
        <div className="absolute bottom-10 right-10 bg-gray-100 bg-opacity-90 p-8">
          <div className="text-5xl font-bold">
            30<sup>+</sup>
          </div>
          <div className="text-xl">
            Year&apos;s of
            <br />
            experience
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-wider mb-4">PARTNERS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We&apos;re happy that, have the famous partners</h2>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                We believe that the human essential to start any successful project and that this is where splendid
                emotion between the client and company is born.
              </p>
              <div className="flex flex-wrap gap-8 mt-8 items-center">
                <Image src="/placeholder.svg?height=40&width=100" alt="Partner logo" width={100} height={40} />
                <Image src="/placeholder.svg?height=40&width=100" alt="Walmar logo" width={100} height={40} />
                <Image src="/placeholder.svg?height=40&width=100" alt="Next logo" width={100} height={40} />
                <Image src="/placeholder.svg?height=40&width=100" alt="Pik logo" width={100} height={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-wider mb-2">OUR TEAM</p>
            <h2 className="text-3xl md:text-4xl font-bold">Meet the talented team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Aman Joey", position: "Co-Ordinator" },
              { name: "Kamal Abraham", position: "Senior Executive" },
              { name: "Daniyel Joe", position: "Marketing Leader" },
              { name: "Halvam Alvida", position: "Merchandiser" },
            ].map((member, index) => (
              <div key={index} className="mb-8">
                <div className="mb-4 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=250&text=Team${index + 1}`}
                    alt={member.name}
                    width={250}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
