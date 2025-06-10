"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, ArrowUp, Send, Facebook, Twitter, Youtube, Rss } from "lucide-react" // Using Rss for WordPress icon placeholder

export default function Footer() {
  return (
    <footer className="relative font-san mx-5">
      <div className="flex flex-col lg:flex-row">
        {/* Left Purple Section */}
        <div className="w-full lg:w-1/3 bg-brand-blueshade1 text-white p-8 sm:p-12 md:p-16 rounded-tl-lg rounded-bl-lg lg:rounded-tr-none lg:rounded-bl-lg relative border-r-[1px] border-[rgba(255,255,255,0.2)]">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Need an <br />
            appointment
          </h2>
          <p className="text-brand-blueshade1-light mb-10 text-lg leading-relaxed">
            We&apos;re all going through binox really helped me deal with my anxiety and pressure to please other people
          </p>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-brand-blueshade1-dark border-white hover:bg-brand-blueshade1 text-white rounded-full px-8 py-6 text-lg font-semibold hover:border-white"
            >
              Contact Now
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-brand-blueshade1-dark border-white hover:bg-brand-blueshade1 text-white rounded-full w-16 h-16 hover:border-white"
            >
              <ArrowUpRight className="w-6 h-6" />
              <span className="sr-only">Explore</span>
            </Button>
          </div>


        {/* "GO UP" Button - Positioned to bridge sections */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 z-10 bg-brand-blue text-white px-2 py-8 rounded-full flex flex-col items-center space-y-2 hidden lg:flex border-r-[1px] border-[rgba(255,255,255,0.2)]"
          aria-label="Go Up"
        >
          <span className="transform -rotate-90 whitespace-nowrap text-sm tracking-wider">GO UP</span>
          <ArrowUp className="w-5 h-5" />
        </button>
        {/* Mobile "GO UP" Button - shown at the bottom of purple section on mobile */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="lg:hidden w-full bg-brand-blue text-white py-4 flex items-center justify-center space-x-2"
          aria-label="Go Up"
        >
          <ArrowUp className="w-5 h-5" />
          <span>GO UP</span>
        </button>


        </div>

        

        {/* Right Dark Blue Section */}
        <div className="w-full lg:w-2/3 bg-brand-blue text-white p-8 sm:p-12 md:p-16 rounded-tr-lg rounded-br-lg lg:rounded-tl-none lg:rounded-br-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Company & Explore Links */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      UI Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      WebFlow
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4">Explore</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-brand-gray-link hover:text-white transition-colors">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location & Inquiry */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4">Location</h3>
                <address className="not-italic text-brand-gray-link space-y-1">
                  <p>1712 Down Street</p>
                  <p>Monmouth Alex</p>
                  <p>Junction, Florida</p>
                  <p>08852</p>
                </address>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4">Inquiry</h3>
                <p className="text-brand-gray-link">Contact for appointment</p>
                <Link href="mailto:info@yourwebsite.com" className="font-semibold text-white hover:underline">
                  info@yourwebsite.com
                </Link>
              </div>
            </div>

            {/* Newsletter & Logo */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2">
                  We build <br /> really better idea
                </h3>
                <p className="text-brand-gray-link text-sm mb-4">
                  Subscribe for newsletter & get day news, service updates
                </p>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-brand-blue-light border-brand-blue-light text-white placeholder-brand-gray-link rounded-l-lg rounded-r-none focus:ring-brand-orange focus:border-brand-orange flex-grow py-3 px-4 h-12"
                  />
                  <Button
                    type="submit"
                    className="bg-brand-blue-light hover:bg-opacity-80 text-white p-3 rounded-r-lg rounded-l-none h-12"
                  >
                    <Send className="w-5 h-5" />
                    <span className="sr-only">Subscribe</span>
                  </Button>
                </div>
              </div>
              <div>
                <span className="font-serif text-5xl font-extrabold tracking-wider">BINOX</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" aria-label="Facebook" className="text-brand-gray-link hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-brand-gray-link hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-brand-gray-link hover:text-white">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="WordPress" className="text-brand-gray-link hover:text-white">
                <Rss className="w-5 h-5" />
              </Link>{" "}
              {/* Placeholder for WordPress */}
            </div>
            <p className="text-brand-gray-link">&copy; {new Date().getFullYear()} Crowdyflow Agency</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button (bottom right) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-brand-orange hover:bg-brand-blue-light transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}
