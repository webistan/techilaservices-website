import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ModernHeroBannerProps {
  breadcrumbs?: string[]
  category?: string
  post?: any
  topButtonText?: string
  bottomButtonText?: string
}

export default function ModernHeroBanner({
   
  category = "Contact center professional services",
  post,
  topButtonText = "Get Free Consultation",
  bottomButtonText = "Start Your Transformation"
}: ModernHeroBannerProps) {
  // Extract data from post
  const title = post?.title || "The thinktank behind world-class customer experiences"
  const description = post?.newServiceSection?.serviceExpert || "No matter your goal, we bring relevant expertise, tools, and know-how to help you achieve consistent, impactful business results."
  const imageSrc = post?.featuredImage?.node?.sourceUrl || "/images/placeholder-user.jpg"
  return (
    <section className="relative min-h-screen flex items-center" data-hero-section>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-200">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-blue-50/50 to-purple-100/50"></div>
        {/* Abstract shapes for depth */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-200/20 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Category */}
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-2">{category}</h2>
              <div className="w-16 h-0.5 bg-gray-900"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Content */}
          <div className="relative -mt-12">
            {/* Image */}
            <div className="relative">
              <div className="w-full h-[500px] rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={imageSrc}
                  alt="Professional consultant"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="absolute bottom-0 right-0 space-y-4">
              {/* Top Button */}
              <Button 
                size="lg" 
                className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg"
              >
                <span>{topButtonText}</span>
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">😊</span>
                </div>
              </Button>

              {/* Bottom Button */}
              <Button 
                variant="outline"
                size="lg" 
                className="bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:border-purple-700 px-6 py-3 rounded-lg shadow-lg"
              >
                {bottomButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 