import Image from "next/image"
import { Play, ArrowRight, Award, Target, Eye, Lightbulb, Users, Shield, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/header"
import AboutHeroSection from "@/components/HomePageSections/AboutHero"
import Footer from "@/components/Footer/footer"
import OurTeamSection from "@/components/OurTeamSection"
import StatisticsSection from "@/components/HomePageSections/StatisticsSection"
import CTA from "@/components/CTA"

export default function AboutPage() {
  return (
    <>
    {/* Header Section * */}
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
                src="/images/01.png?height=600&width=450"
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
                    src="/images/aboutleft.jpg?height=100&width=100"
                    alt="Business meeting"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
              <b className="text-sm font-bold tracking-[0.3em] mb-6"> Techila Global Services </b>is an award-winning Salesforce implementation and consulting partner with a global footprint covering the US, Europe, and the Asia-Pacific Region. Recently recognized as a Salesforce.com Summit Partner, it is a team of dedicated professionals who are genuinely passionate about new-age tech.   </p>

              <p className="text-sm text-gray-600 mb-8">
              We offer the world’s only AI-first Salesforce implementation and consulting services. Leveraging the competence of AI, we help organizations across the globe reap the benefits of Salesforce and all its offerings. With Techila Global Services, you can receive personalized consultation, implement Salesforce solutions, build Salesforce apps, and integrate them with little to no technical knowledge. Leave all the heavy lifting to us!
              </p>

              <p className="text-sm text-gray-600 mb-8">
              Our aim has always been to make high-end tech accessible to everyone. Whether you run a multi-national company, a humble startup, a healthcare institution, or a public sector enterprise, we help you implement a personalized CRM solution for your organization.</p>

              <Button variant="default" className="bg-black text-white rounded-none px-6">
                Contact US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5" >
        <StatisticsSection />
      </section>


 {/* Awards and Recognitions Section */}
 <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-orange-500 text-sm font-medium mb-4 uppercase tracking-widest">Awards & Recognitions</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Award Card 1 */}
            <div className="bg-slate-50 rounded-3xl shadow p-8 flex flex-col items-center text-center">
             
              <Image
                            src="/images/SFDC-summit-partner.jpeg"
                            alt="Stat Icon"
                            width={48}
                            height={32}
                            className="mb-4 w-full h-full object-cove rounded-lg"
                          />


              <div className="text-xl font-semibold text-slate-900 mb-2">Salesforce Summit Partner</div>
              <div className="text-slate-600 text-sm">Recognized for outstanding Salesforce implementation and consulting services worldwide.</div>
            </div>
            {/* Award Card 2 */}
            <div className="bg-slate-50 rounded-3xl shadow p-8 flex flex-col items-center text-center">
            <Image
                            src="/images/top-consulting.jpg"
                            alt="Stat Icon"
                            width={48}
                            height={32}
                            className="mb-4 w-full h-full object-cove rounded-lg"
                          />
              <div className="text-xl font-semibold text-slate-900 mb-2">Top IT Consulting Firm 2025</div>
              <div className="text-slate-600 text-sm">Awarded by Clutch for excellence in IT consulting and client satisfaction.</div>
            </div>
            {/* Award Card 3 */}
            <div className="bg-slate-50 rounded-3xl shadow p-8 flex flex-col items-center text-center">
            <Image
                            src="/images/Cloud-solutions.jpg"
                            alt="Stat Icon"
                            width={48}
                            height={32}
                            className="mb-4 w-full h-full object-cove rounded-lg"
                          />
              <div className="text-xl font-semibold text-slate-900 mb-2">Innovation in Cloud Solutions</div>
              <div className="text-slate-600 text-sm">Honored for pioneering AI-first Salesforce solutions and digital transformation.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="relative">
        <Image
          src="/images/sss.jpg?height=500&width=1200"
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
                <Image src="/images/partner1.png?height=40&width=100" alt="Partner logo" width={100} height={40} />
                <Image src="/images/partner2.png?height=40&width=100" alt="Walmar logo" width={100} height={40} />
                <Image src="/images/partner3.png?height=40&width=100" alt="Next logo" width={100} height={40} />
                <Image src="/images/partner4.png?height=40&width=100" alt="Pik logo" width={100} height={40} />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTA
        heading="Request A Free Consultation / Need Any Help For Business & Consulting"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      {/* Our Story, Mission, Vision, and Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-2">Who We Are</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 text-center">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-orange-500 rounded-full mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2">
            {/* Mission Card */}
            <div className="grid grid-rows-2 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(122,24,27,0.35)]">
              <div className="bg-[#7a181b] p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold text-white mb-4">OUR MISSION</h3>
                <p className="text-sm text-white">Our mission is to make Salesforce and its products accessible to all technical and non-technical professionals. We aim to make the most of agentic AI solutions for quicker and more efficient Salesforce implementation. With this new-age approach, all an organization needs is its basic requirements and a few clicks to implement a tailor-made Salesforce solution.</p>
              </div>
               <div className="bg-white">
                  <Image 
                    src="/images/our-mission.webp" 
                    alt="Our Mission" 
                    width={500} 
                    height={300} 
                   className="w-full h-full object-cover"
                  />
                </div>
              </div>
            {/* Vision Card */}
            <div className="grid grid-rows-2 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(255,124,28,0.35)]">
             <div className="bg-white">
                  <Image 
                    src="/images/our-vision.jpg"
                    alt="Our Vision" 
                    width={500} 
                    height={300} 
                   className="w-full h-full object-cover"
                  />
                </div>
               <div className="bg-[#ff7c1c] p-10 flex flex-col justify-center">
                 <h3 className="text-3xl font-extrabold text-white mb-4">OUR VISION</h3>
                 <p className="text-sm text-white">We aspire to continue our ongoing momentum to utilize the latest AI trends to make Salesforce implementation and consultation easier than ever. As the world has already embraced the no-code approach, we aim to take it up a notch with AI-first implementation. We envision a world where a humble startup and a large-scale enterprise have access to cutting-edge technology, irrespective of technical knowledge.</p>
               </div>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col items-center mb-12">
             <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-2">Our Core Values</span>
             <div className="w-20 h-1 bg-orange-500 rounded-full mb-6"></div>
           </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Lightbulb className="w-10 h-10 text-orange-500 mb-3" />
              <div className="text-lg font-semibold text-slate-900 mb-1 text-center">Innovation And Adaptability</div>
              <div className="text-slate-600 text-sm text-center">Our team always keeps an eye on the latest advancements in the fields of AI, ML, cloud computing, and more. We help our clients adapt to the latest trends to drive digitization.</div>
            </div>
            {/* Value 2 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Users className="w-10 h-10 text-orange-500 mb-3" />
              <div className="text-lg font-semibold text-slate-900 mb-1 text-center">Customer-centric Approach</div>
              <div className="text-slate-600 text-sm text-center">All our services are designed according to the needs and preferences of our clients. We offer personalized and industry-specific services to ensure fruitful Salesforce implementation across the board.</div>
            </div>
            {/* Value 3 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 text-orange-500 mb-3" />
              <div className="text-lg font-semibold text-slate-900 mb-1 text-center">Transparency</div>
              <div className="text-slate-600 text-sm text-center">We ensure 100% transparency at all stages of our Salesforce implementation and consulting services. Our clients are always in the loop, with a special focus on their valuable feedback.</div>
            </div>
            {/* Value 4 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Layers className="w-10 h-10 text-orange-500 mb-3" />
              <div className="text-lg font-semibold text-slate-900 mb-1 text-center">Technical Brilliance</div>
              <div className="text-slate-600 text-sm text-center">Cutting-edge technical expertise is non-negotiable for our team. We continuously strive to enhance our services, improve customer experience, and implement the latest technologies.</div>
            </div>
            {/* Value 5 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Users className="w-10 h-10 text-orange-500 mb-3" />
              <div className="text-lg font-semibold text-slate-900 mb-1 text-center">Seamless Collaboration</div>
              <div className="text-slate-600 text-sm text-center">Our team of professionals works in perfect sync to help every client attain their core objectives. Effective communication and common goals empower our teams to give their best.</div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Contact CTA Section */}
      <CTA
        heading="Request A Free Consultation / Need Any Help For Business & Consulting"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      {/* Team Section */}
     <OurTeamSection />

      <Footer/>
    </main>
    </>
  )
}
