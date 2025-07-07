"use client"
import AnimatedCounter from '../ui/AnimatedCounter'
import { ArrowDown, Twitter, Dribbble, Instagram } from "lucide-react"
import Link from "next/link"

export default function AboutHeroSection() {
  return (
    <div className="bg-brand-grey">
    <section className="container m-auto relative flex min-h-[70vh] font-sans md:ml-[12%]">
      {/* Backgrounds */}
      <div className="w-full md:w-2/5 bg-brand-grey relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        >
          <span className="font-serif text-[30rem] md:text-[40rem] lg:text-[50rem] text-[#e6eaea] leading-none -translate-x-1/4 ml-[25%]">
            A
          </span>
        </div>
      </div>
      <div className="hidden md:block w-3/5 bg-white relative mt-20">
        <div className="absolute bottom-12 left-1/4">
          <ArrowDown className="w-10 h-10 text-black opacity-40" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="md:max-w-4xl text-left">
          <p className="text-sm font-bold tracking-[0.3em] uppercase mb-6">BINOX ABOUT US</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            We&apos;re a consultant agency we working globally with-biggest company
          </h1>
        </div>
      </div>

      {/* Vertical "FOLLOW US" Sidebar */}
      <aside className="absolute top-0 right-0 h-full flex items-center z-20">
        <div className="py-8 px-4 flex flex-col items-center space-y-8">
          <span
            className="transform rotate-180 text-xs font-medium tracking-widest text-black"
            style={{ writingMode: "vertical-rl" }}
          >
            FOLLOW US
          </span>
          <div className="w-px h-20 bg-black opacity-20"></div>
          <Link href="#" aria-label="Twitter" className="text-black hover:opacity-70 transition-opacity">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="Dribbble" className="text-black hover:opacity-70 transition-opacity">
            <Dribbble className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-black hover:opacity-70 transition-opacity">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </aside>
    </section>
    </div>
  )
}
