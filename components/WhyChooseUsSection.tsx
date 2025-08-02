import Image from "next/image"
import { Check } from "lucide-react"

interface Point {
  title: string
  content: string
}

interface WhyChooseUsData {
  subHeading?: string
  title: string
  points: Point[]
  chooseusImage?: {
    node: {
      mediaItemUrl: string
    }
  }
}

interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData
}

// Default data as fallback
const defaultData: WhyChooseUsData = {
  subHeading: "WHY CHOOSE US",
  title: "Our Professional Salesforce Services",
  points: [
    {
      title: "Designed By Experts",
      content: "Our new-age Salesforce consultation services are designed by experienced Salesforce consultants. They have left no stone unturned to make the process as seamless as possible."
    },
    {
      title: "AI-fueled Support",
      content: "Built with the powers of AI from scratch, our services make the most of modern technologies. We have tried to push the envelope by building the world's only AI-first Salesforce consultation platform."
    },
    {
      title: "Seamless User Experience",
      content: "With us, a few simple clicks are all it takes to receive personalized consultation support. We have kept the user interface simple, straightforward, and accessible for everyone."
    },
    {
      title: "Focus On Personalization",
      content: "The use of AI does not make our Salesforce consultation services generic. We ask for specific details that are unique to your business and offer tailor-made solutions and recommendations."
    },
    {
      title: "Time And Efficiency",
      content: "You no longer need to wait for hours to chat with a qualified Salesforce consultant. We bring intelligent and AI-driven consultants wherever you are!"
    }
  ]
}

export default function WhyChooseUsSection({ data }: WhyChooseUsSectionProps) {
  // Use dynamic data if available, otherwise fallback to default
  const sectionData = data || defaultData;
  
  return (
    <section className="py-16 bg-[#f7f8fa]" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                WHY CHOOSE US
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-red-500"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                  {sectionData.title}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
              {sectionData.subHeading || "WHY CHOOSE US"}     </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {(sectionData.points || []).map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={sectionData.chooseusImage?.node?.mediaItemUrl || "/images/Cloud-solutions.jpg"}
                alt="Salesforce consultant at work"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Box */}
              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">
                      We're Best Salesforce
                    </p>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">
                      Consultation Company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 