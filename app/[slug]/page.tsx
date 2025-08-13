import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, Plus, Minus, PlayCircle, Instagram, Twitter, Facebook } from "lucide-react"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"
import { fetchWordPressQuery } from "@/lib/fetch-wordpress-query"
import { GET_BLOG_PAGE_BY_SLUG } from "@/lib/wp-queries"
import { notFound } from "next/navigation"
import CTA from "@/components/CTA"
import ServiceTopBanner from "@/components/ServiceTopBanner";
import ModernHeroBanner from "@/components/ModernHeroBanner";
import StickyNavigationBar from "@/components/StickyNavigationBar";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";



const faqData: { question: string; answer: string }[] = [
  {
    question: "What services does your consultancy company provide?",
    answer:
      "You can reach us through our contact page on the website where you'll find our phone number, email address and a convenient contact form. We are also available on social media platforms such as list relevant platform.",
  },
  {
    question: "How can I contact your consultancy firm?",
    answer:
      "Our firm specializes in a variety of industries including technology, healthcare, finance, and retail. We tailor our services to meet the specific needs of each sector.",
  },
  {
    question: "What industries does your consultancy company specialize in?",
    answer:
      "We work with businesses of all sizes, from startups to large corporations. Our scalable solutions are designed to fit your specific business requirements.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "The consultation process typically involves an initial assessment, strategy development, implementation, and ongoing support. We work closely with you at each stage.",
  },
  {
    question: "What sets your consultancy services apart from others?",
    answer:
      "Our commitment to client success, data-driven insights, and experienced consultants set us apart. We focus on delivering measurable results.",
  },
  {
    question: "How much do your consultancy services cost?",
    answer:
      "Service costs vary depending on the scope and complexity of the project. We offer transparent pricing and can provide a custom quote after an initial consultation.",
  },
  {
    question: "Can you provide references or case studies?",
    answer:
      "Yes, we can provide references and case studies upon request. These demonstrate our track record of success with previous clients.",
  },
  {
    question: "Is my business size suitable for your consultancy services?",
    answer:
      "Absolutely. We cater to businesses of all sizes, from startups and SMEs to large enterprises. Our solutions are scalable and tailored to your specific needs.",
  },
];

const processSteps: { step: string; title: string; description: string }[] = [
  {
    step: "Step-01",
    title: "Find business needs",
    description: "Trade stocks of the biggest names in the international stock market",
  },
  {
    step: "Step-02",
    title: "Solutions tailored to your needs",
    description: "Trade stocks of the biggest names in the international stock market",
  },
  {
    step: "Step-03",
    title: "Align tactic with objective",
    description: "Trade stocks of the biggest names in the international stock market",
  },
  {
    step: "Step-04",
    title: "Results deliver measurable",
    description: "Trade stocks of the biggest names in the international stock market",
  },
];

export default async function BlogPageBySlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data, error } = await fetchWordPressQuery<any>(GET_BLOG_PAGE_BY_SLUG, { slug });
  const post = data?.page;
  if (!post || error) {
    notFound();
  }
   
console.log('Post data:', post);
console.log('Our Process data:', post.newServiceSection?.ourProcess);
  return (
    <>
   <Header/>
    <ModernHeroBanner 
      breadcrumbs={["Home", "Services", "Digital Transformation"]}
      category="Salesforce Consultation"
      post={post}
      topButtonText="Get Free Consultation"
      bottomButtonText="Start Your Transformation"
    />
    <StickyNavigationBar />
    <div className="bg-white text-neutral-800">
      {/* Hero Section */}
      <section className="relative bg-neutral-50 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">SERVICES DETAILS</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
            </div>
            <div className="md:text-right">
              <p className="text-neutral-600 mb-4 max-w-md ml-auto">
                {post.newServiceSection?.serviceExpert || "Our team of experts is ready to help you achieve your business goals."}
              </p>
              <a href="#" className="inline-flex items-center font-semibold text-neutral-800 hover:text-neutral-600">
                See the plan <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-16 ">
            <Image
              src={post.newServiceSection?.topBanner?.node?.sourceUrl || "/images/Salesforce-Consulting-Services-and-its-Benefits-optimized.jpg"}
              alt="Featured Image of the Post"
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center space-y-4 p-4 mr-2">
          <span className="text-xs uppercase tracking-widest transform -rotate-90 whitespace-nowrap">Follow Us</span>
          <div className="w-px h-8 bg-neutral-300 my-2"></div>
          <a href="#" aria-label="Twitter" className="text-neutral-500 hover:text-neutral-800">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-neutral-500 hover:text-neutral-800">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="text-neutral-500 hover:text-neutral-800">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTA
        heading="Request A Free Consultation / Need Any Help For Business & Consulting"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Offerings Section */}
      <section className="py-16 md:py-24" id="overview">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Overview</p><div className="flex items-center justify-center gap-3 mb-4"><div className="w-1 h-8 bg-red-500"></div><h2 className="text-3xl md:text-4xl font-bold text-red-500">{post.title}</h2></div><div className="w-20 h-1 bg-red-500 mx-auto"></div></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div dangerouslySetInnerHTML={{ __html: post.newServiceSection?.leftContent || "" }} />
                  
              <Button size="lg" className="bg-neutral-800 text-white hover:bg-neutral-700">
                Contact Us <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div>
            

<Image
          src={post.newServiceSection?.rightSectionImage?.node?.mediaItemUrl || "/images/Cloud-solutions.jpg"}
          alt="Two consultants collaborating"
          width={600}
          height={700}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />





            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection ourProcess={post.newServiceSection?.ourProcess} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={post.newServiceSection?.whyChooseUs} />

      {/* Consultant Section */}
      <section className="relative py-16 md:py-24">
        <Image
          src={post.newServiceSection?.bottomBanner?.node?.sourceUrl || "/images/experience.png"}
          alt="Two consultants collaborating"
          layout="fill"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
          
          <div className="bg-neutral-800 text-white p-8 md:p-10 text-center max-w-sm ml-auto md:absolute md:bottom-10 md:right-10 rounded-lg">
            <p className="text-5xl md:text-6xl font-bold mb-2">30+</p>
            <p className="text-lg">{post.newServiceSection?.bottomBannerStats || "Projects Completed"}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently asked question</h2>
            </div>
            <div className="md:col-span-2">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {(post.newServiceSection?.servicesPageFaq || faqData).map((item: any, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-neutral-200">
                    <AccordionTrigger className="py-6 text-left hover:no-underline group">
                      <span className="text-lg font-medium group-hover:text-neutral-600 flex-1 pr-4">
                        {item.faqQuestion || item.question}
                      </span>
                      {/* Custom icons for open/closed state */}
                      <Plus className="w-6 h-6 text-neutral-500 group-data-[state=open]:hidden transition-transform" />
                      <Minus className="w-6 h-6 text-neutral-500 group-data-[state=closed]:hidden transition-transform" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-0 pb-6 text-neutral-600">
                      {item.faqAnswer || item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
   
    <Footer/>
    </>
  )
} 