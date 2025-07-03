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
import { fetchWordPressQuery } from "@/lib/fetch-wordpress-query"
import { GET_HOME_PAGE_DATA } from "@/lib/wp-queries"
import { HomePageData } from "@/lib/types/home-page"
import VideoPlayer from "@/components/ui/VideoPlayer"

export default async function Home() {
  // Fetch home page data server-side
  const { data: homePageData, error } = await fetchWordPressQuery<HomePageData>(GET_HOME_PAGE_DATA);

  if (error) {
    console.error('Error fetching home page data:', error);
  }

  const pageData = homePageData?.post;
  const heroSectionData = pageData?.homePageHeroSection;
  const clientsData = pageData?.ourClientHomePage?.homePageClients?.nodes[0]?.homePageOurClients;
  const aboutUsSectionData = pageData?.homePageAboutUs;
  const reachSectionData = pageData?.homePageOurReachSection;
  const successSectionData = pageData?.homePageSuccessSection;
  const servicesSectionData = pageData?.servicesShowOnHomePage;

  console.log("pageDatapageData", clientsData)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero data={heroSectionData} />
        
        <div className="px-6 py-6">
          <PartnersSection data={clientsData} />
        </div>
        
        <Section>
          <AboutSection data={aboutUsSectionData} />
        </Section>

        <Section className="px-4">
          <ServicesSection data={servicesSectionData} />
        </Section>

        <Section>
          <StatisticsSection data={reachSectionData} />
        </Section>

        <Section>
          <CustomerSatisfactionSection data={successSectionData} />
        </Section>
        
        <Section>
          {/* Video Section */}
          <VideoPlayer videoSrc="https://www.youtube.com/watch?v=zggbwYu1tdw" title="main video" />
        </Section>

        <Section>
          <WorkProcessSection />
        </Section>
      </main>

      <Footer />
    </div>
  )
}
