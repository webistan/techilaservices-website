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
import FAQSection from "@/components/HomePageSections/FAQSection"
import BlogSection from "@/components/HomePageSections/BlogSection"
import RotatingTestimonial from "@/components/HomePageSections/RotatingTestimonial"
import CaseStudiesSection from "@/components/HomePageSections/CaseStudiesSection"
import { GET_CASE_STUDIES_WIDGET } from "@/lib/wp-queries";
import { CaseStudy } from "@/components/HomePageSections/CaseStudiesSection";
import IpInfoLogger from "@/components/IpInfoLogger";

// Helper to convert slug to camel case
function slugToCamelCase(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function Home() {
  // Fetch home page data server-side
  const { data: homePageData, error } = await fetchWordPressQuery<HomePageData>(GET_HOME_PAGE_DATA);
  const { data: caseStudiesWidgetData } = await fetchWordPressQuery<any>(GET_CASE_STUDIES_WIDGET);

  if (error) {
    console.error('Error fetching home page data:', error);
  }

  const pageData = homePageData?.post;
  const heroSectionData = pageData?.homePageHeroSection;
  const clientsData = pageData?.ourClientHomePage?.homePageClients?.nodes[0]?.homePageOurClients;
  const aboutUsSectionData = pageData?.homePageAboutUs;
  const successSectionData = pageData?.homePageSuccessSection;
  const servicesSectionData = pageData?.servicesShowOnHomePage;

  const processSectionData = pageData?.homePageWorkProcess;
  const faqSectionData = pageData?.homePageFaq;

  // Map case studies widget data
  console.log("RAW DATA:", JSON.stringify(caseStudiesWidgetData, null, 2));
  const caseStudies: CaseStudy[] = (caseStudiesWidgetData?.post?.caseStudiesWidget?.caseStudies?.edges || [])
    .map((edge: any) => {
      const node = edge.node;
      let title = node.title;
      if (!title && node.slug) {
        title = slugToCamelCase(node.slug);
      }
      return {
        id: node.id,
        title,
        excerpt: node.caseStudiesFields?.caseStudyExcerpt || node.excerpt,
        image: node.featuredImage?.node?.sourceUrl || "/placeholder.svg",
        slug: node.slug,
      };
    })
    .filter((c: CaseStudy) => c.title && c.image && c.slug && c.excerpt);
  console.log("MAPPED CASE STUDIES:", caseStudies);
  return (
    <div className="min-h-screen bg-background">
      <IpInfoLogger />
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
          <StatisticsSection />
        </Section>

        <Section>
          <CustomerSatisfactionSection data={successSectionData} />
        </Section>
        
        <Section>
          {/* Video Section */}
          <VideoPlayer videoSrc="https://www.youtube.com/watch?v=zggbwYu1tdw" title="main video" />
        </Section>

        <Section>
          <WorkProcessSection data={processSectionData} />
        </Section>
        <Section>
          {caseStudies.length === 0 ? (
            <div className="text-center text-red-500 py-12">No case studies found. Please check your WordPress data.</div>
          ) : (
            <CaseStudiesSection caseStudies={caseStudies} />
          )}
        </Section>
        <Section>
          <BlogSection />
        </Section>
        <Section>
          <FAQSection data={faqSectionData} />
        </Section>
      </main>

      <Footer />
    </div>
  )
}
