import Header from "@/components/Header/header"
import PartnersSection from "@/components/HomePageSections/PartnersSection"
import AboutSection from "@/components/HomePageSections/AboutSection"
import ServicesSection from "@/components/HomePageSections/ServicesSection"
import StatisticsSection from "@/components/HomePageSections/StatisticsSection"
import CustomerSatisfactionSection from "@/components/HomePageSections/CustomerSatisfactionSection"
import WorkProcessSection from "@/components/HomePageSections/WorkProcessSection"
import Footer from "@/components/Footer/footer"
import { Section } from "@/components/shared/Section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Hero from "@/components/HomePageSections/Hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <div className="px-6 py-6">
          <PartnersSection />
          </div>
        <Section>
            <AboutSection />
        </Section>

        <Section className="px-4">
            <ServicesSection />
        </Section>

        <Section>
            <StatisticsSection />
        </Section>

        <Section>
            <CustomerSatisfactionSection />
        </Section>
        <Section>
          <>
          {/* Video Section */}
        <div className="px-6 rounded-[2.5rem] overflow-hidden relative">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Team consultation video"
            width={1200}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            >
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Button>
          </div>
        </div>
          </>
        </Section>

        <Section>
            <WorkProcessSection />
        </Section>
      </main>

      <Footer />
    </div>
  )
}
