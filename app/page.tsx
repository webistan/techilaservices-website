import Header from "@/components/Header/header"
import Hero from "@/components/HomePageSections/hero"
import PartnersSection from "@/components/HomePageSections/PartnersSection"
import AboutSection from "@/components/HomePageSections/AboutSection"
import ServicesSection from "@/components/HomePageSections/ServicesSection"
import StatisticsSection from "@/components/HomePageSections/StatisticsSection"
import CustomerSatisfactionSection from "@/components/HomePageSections/CustomerSatisfactionSection"
import WorkProcessSection from "@/components/HomePageSections/WorkProcessSection"
import Footer from "@/components/Footer/footer"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <Section>
          <Container>
            <PartnersSection />
          </Container>
        </Section>

        <Section className="bg-muted/50">
          <Container>
            <AboutSection />
          </Container>
        </Section>

        <Section>
          <Container>
            <ServicesSection />
          </Container>
        </Section>

        <Section className="bg-muted/50">
          <Container>
            <StatisticsSection />
          </Container>
        </Section>

        <Section>
          <Container>
            <CustomerSatisfactionSection />
          </Container>
        </Section>

        <Section className="bg-muted/50">
          <Container>
            <WorkProcessSection />
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
