import Header from "@/components/Header/header"
import Hero from "@/components/HomePageSections/hero"
import PartnersSection from "@/components/HomePageSections/PartnersSection"
import AboutSection from "@/components/HomePageSections/AboutSection"
import ServicesSection from "@/components/HomePageSections/ServicesSection"
import StatisticsSection from "@/components/HomePageSections/StatisticsSection"
import CustomerSatisfactionSection from "@/components/HomePageSections/CustomerSatisfactionSection"
import WorkProcessSection from "@/components/HomePageSections/WorkProcessSection"
import Footer from "@/components/Footer/footer"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* Partners Section */}
      <PartnersSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Services Section */}
      <ServicesSection/>

      {/* Statistics Section */}
      <StatisticsSection/>

      {/* Customer Satisfaction Section */}
      <CustomerSatisfactionSection/>

      {/* Work Process Section */}
      <WorkProcessSection/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
