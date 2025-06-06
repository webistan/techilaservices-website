import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowRight, Star, Quote } from "lucide-react"
import Hero from "@/components/HomePageSections/hero"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="text-2xl font-bold text-slate-900">BINOX</div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <span>Home</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-1">
            <span>Pages</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-1">
            <span>Services</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-1">
            <span>Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-1">
            <span>Blogs</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-1">
            <span>Shop</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
            <Search className="w-4 h-4" />
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6">{"Let's Talk"}</Button>
        </div>
      </header>

      {/* Hero Section */}
      <Hero/>

      {/* Partners Section */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-row gap-4">
          <div className="text-sm text-slate-600 w-40">
            Worked with world
            <br />
            famous brands and
            <br />
            partners
          </div>
          <div className="flex items-center justify-between opacity-40 w-full">
            <div className="text-2xl font-bold text-slate-400">Aloha</div>
            <div className="text-2xl font-bold text-slate-400">Aloha</div>
            <div className="text-2xl font-bold text-slate-400">next</div>
            <div className="text-2xl font-bold text-slate-400">Beka</div>
            <div className="text-2xl font-bold text-slate-400">ATHLETE</div>
            <div className="text-2xl font-bold text-slate-400">Aloha</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="text-orange-500 text-sm font-medium mb-4">01 - ABOUT US</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {"We're binox IT consulting agency"}
              </h2>
            </div>

            {/* Center Content */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
                30<sup className="text-3xl">+</sup>
              </div>
              <p className="text-slate-600 mb-8">
                Working with <span className="underline">binox-it consulting</span> gives you peace minds in knowing
                that your books are accurate updated in real-time taxes are filed and paid on schedule.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3">
                More About
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
               {/* Testimonial */}
               <Card className="bg-white border border-slate-200 rounded-2xl p-6 mt-8">
                <CardContent className="p-0">
                  <Quote className="w-8 h-8 text-slate-300 mb-4" />
                  <p className="text-slate-600 mb-6">
                    {
                      "We loves sharing my shortcuts have been techniques with binox consultancy teams emmense satisfaction..."
                    }
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Julian Bray</div>
                      <div className="text-sm text-slate-500">CEO, Elant Gavita</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="font-bold text-slate-900">4.5</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Professional working"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 bg-[#d7ddcb] mx-4 rounded-[60px]">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 ml-20">
            {/* Left Content */}
            <div className="rounded-3xl p-12">
              <div className="text-orange-500 text-sm font-medium mb-4">02 - SERVICES</div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Risk Management</h2>
              <p className="text-slate-600 mb-8">
                Our IT consultants meet with your team to thoroughly understand your unique need.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3">
                More details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right Content - Image */}
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Risk management consultation"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="px-6 py-16 mx-4">
        <div className="max-w-7xl mx-auto">
          {/* Statistics Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
              We consulted more then 1.2m+ popular companies world-wide
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                30<sup className="text-2xl">+</sup>
              </div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                YEAR
                <br />
                EXPERIENCES
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                1.2<sup className="text-2xl">m</sup>
              </div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                CLIENTS AROUND
                <br />
                THE WORLD
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                10<sup className="text-2xl">+</sup>
              </div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                AWARD
                <br />
                WINNING
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                3.8<sup className="text-2xl">x</sup>
              </div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                ECONOMICAL
                <br />
                GROWTH
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                70<sup className="text-2xl">+</sup>
              </div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                TEAM
                <br />
                MEMBERS
              </div>
            </div>
          </div>
        </div>
      </section>

     
      

      {/* Customer Satisfaction Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-100 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="text-orange-500 text-sm font-medium mb-4">04 - SUCCESS</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                  Customer satisfaction data
                </h2>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3">
                  Work with us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Right Content - Chart */}
              <div className="grid grid-cols-2 gap-8">
                {/* Pie Chart Representation */}
                <div className="relative">
                  <div className="w-48 h-48 mx-auto relative">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="20" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="20"
                        strokeDasharray="210 251"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">84%</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 space-y-1 text-sm">
                    <div>10%</div>
                    <div>4%</div>
                    <div>1%</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-slate-900 rounded"></div>
                    <span className="text-sm text-slate-600">84% Client Very satisfied</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-slate-400 rounded"></div>
                    <span className="text-sm text-slate-600">10% Client Satisfied</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                    <span className="text-sm text-slate-600">4% Neutral</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-slate-200 rounded"></div>
                    <span className="text-sm text-slate-600">1% Somewhat dissatisfied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-16 rounded-3xl overflow-hidden relative">
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
        </div>
      </section>

       {/* Work Process Section */}
       <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <div className="text-orange-500 text-sm font-medium mb-4">06 - WORK PROCESS</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                See the value in our it consulting solutions
              </h2>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3">
                Work with us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right Content - Process Steps */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="border border-slate-200 rounded-2xl p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-slate-900 mb-4">01</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Discover the Project</h3>
                  <p className="text-slate-600">
                    Our IT consultants meet with your team to thoroughly understand your unique need.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 rounded-2xl p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-slate-900 mb-4">02</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy Development</h3>
                  <p className="text-slate-600">
                    Our IT consultants meet with your team to thoroughly understand your unique need.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 rounded-2xl p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-slate-900 mb-4">03</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Implementation the solution</h3>
                  <p className="text-slate-600">
                    Our IT consultants meet with your team to thoroughly understand your unique need.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 rounded-2xl p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-slate-900 mb-4">04</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Monitoring Progress</h3>
                  <p className="text-slate-600">
                    Our IT consultants meet with your team to thoroughly understand your unique need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-900 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Need an appointment</h3>
              <p className="text-slate-300 mb-6">Dealing with my anxiety and pressure to please other people.</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2">
                Contact Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Center - Vertical BINOX */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="text-6xl font-bold tracking-wider transform rotate-90 origin-center">BINOX</div>
            </div>

            {/* Right Content - Links */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>UI Design</li>
                  <li>Web Design</li>
                  <li>Branding</li>
                  <li>Marketing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Career</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Location</h4>
                <p className="text-slate-300 text-sm">
                  1715 Bertha Monmouth Ave
                  <br />
                  Junction, Florida 68832
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Inquiry</h4>
                  <p className="text-slate-300 text-sm">info@yourwebsite.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">We build really better idea</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Subscribe for newsletter & get company news, service updates
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 rounded-r-full px-4">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-6">
                  <div className="text-2xl font-bold">BINOX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </Button>
            </div>
            <div className="text-slate-400 text-sm">© 2024 OmegaFlow Agency</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
