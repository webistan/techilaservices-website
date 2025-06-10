import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white">
        <Link href="/" className="text-2xl font-bold text-slate-900">BINOX</Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-1">
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-1">
            <span>About</span>
          </Link>
          <Link href="/team" className="flex items-center space-x-1">
            <span>Team</span>
          </Link>
          <div className="flex items-center space-x-1 group relative">
            <span>Services</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg py-2 min-w-[200px]">
              <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">All Services</Link>
              <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link>
              <Link href="/services/mobile-development" className="block px-4 py-2 hover:bg-gray-100">Mobile Development</Link>
              <Link href="/services/ui-ux-design" className="block px-4 py-2 hover:bg-gray-100">UI/UX Design</Link>
            </div>
          </div>
          <div className="flex items-center space-x-1 group relative">
            <span>Case Studies</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg py-2 min-w-[200px]">
              <Link href="/case-studies" className="block px-4 py-2 hover:bg-gray-100">All Case Studies</Link>
              <Link href="/case-studies/web-development" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link>
              <Link href="/case-studies/mobile-apps" className="block px-4 py-2 hover:bg-gray-100">Mobile Apps</Link>
              <Link href="/case-studies/ui-ux-design" className="block px-4 py-2 hover:bg-gray-100">UI/UX Design</Link>
            </div>
          </div>
          <div className="flex items-center space-x-1 group relative">
            <span>Blog</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg py-2 min-w-[200px]">
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">All Posts</Link>
              <Link href="/blog/technology" className="block px-4 py-2 hover:bg-gray-100">Technology</Link>
              <Link href="/blog/design" className="block px-4 py-2 hover:bg-gray-100">Design</Link>
              <Link href="/blog/development" className="block px-4 py-2 hover:bg-gray-100">Development</Link>
            </div>
          </div>
          <Link href="/contact" className="flex items-center space-x-1">
            <span>Contact</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
            <Search className="w-4 h-4" />
          </Button>
          <Link href="/contact">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6">{"Let's Talk"}</Button>
          </Link>
        </div>
      </header>
    )
}

export default Header;