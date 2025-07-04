import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/header"
import AboutHeroSection from "@/components/HomePageSections/AboutHero"
import Footer from "@/components/Footer/footer"
export default function TermsAndServicesPage() {
  return (
    
<>    <Header/>
      <main className="min-h-screen bg-gray-50">
      
      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
               Term of Services
              </h2>
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

      
      
     

      <Footer/>
    </main>
   </>
  );
}
