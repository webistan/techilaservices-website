import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/header"
import AboutHeroSection from "@/components/HomePageSections/AboutHero"
import Footer from "@/components/Footer/footer"

export default function AboutPage() {
  return (
    <>
    {/* Header Section */}
    <Header/>
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AboutHeroSection/>

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

              <div className="flex items-center mb-8">
                <div className="bg-black text-white text-sm font-bold p-4 rounded-tr-full rounded-br-full h-[190px] w-[100px] -mr-10 z-2 relative">
                  <div className="absolute bottom-[110px] -right-[15px] -rotate-90 w-[150px] uppercase">Who We Are</div>
                </div>
                <div className="bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Business meeting"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
              Techila Global Services is an award-winning Salesforce implementation and consulting partner with a global footprint covering the US, Europe, and the Asia-Pacific Region. Recently recognized as a Salesforce.com Summit Partner, it is a team of dedicated professionals who are genuinely passionate about new-age tech.

              </p>


              <p className="text-sm text-gray-600 mb-6">
              We offer the world’s only AI-first Salesforce implementation and consulting services. Leveraging the competence of AI, we help organizations across the globe reap the benefits of Salesforce and all its offerings. With Techila Global Services, you can receive personalized consultation, implement Salesforce solutions, build Salesforce apps, and integrate them with little to no technical knowledge. Leave all the heavy lifting to us!


              </p>

              <p className="text-sm text-gray-600 mb-8">
              Our aim has always been to make high-end tech accessible to everyone. Whether you run a multi-national company, a humble startup, a healthcare institution, or a public sector enterprise, we help you implement a personalized CRM solution for your organization.


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

      <Footer/>
    </main>
    </>
  )
}
