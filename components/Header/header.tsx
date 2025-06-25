"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled 
                    ? "bg-background/80 backdrop-blur-md shadow-sm" 
                    : "bg-background"
            )}
        >
            <div className="mx-auto flex items-center justify-between px-6 py-6">
                <Link href="/" className="text-2xl font-bold text-foreground">
                    Techila
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
                        About
                    </Link>
                    <Link href="/team" className="text-foreground/80 hover:text-foreground transition-colors">
                        Team
                    </Link>
                    <div className="flex items-center space-x-1 group relative">
                        <span className="text-foreground/80 hover:text-foreground transition-colors">Services</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <div className="absolute top-full left-0 hidden group-hover:block bg-background shadow-lg py-2 min-w-[200px] rounded-lg border">
                            <Link href="/services" className="block px-4 py-2 hover:bg-muted transition-colors">All Services</Link>
                            <Link href="/services/web-development" className="block px-4 py-2 hover:bg-muted transition-colors">Web Development</Link>
                            <Link href="/services/mobile-development" className="block px-4 py-2 hover:bg-muted transition-colors">Mobile Development</Link>
                            <Link href="/services/ui-ux-design" className="block px-4 py-2 hover:bg-muted transition-colors">UI/UX Design</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 group relative">
                        <span className="text-foreground/80 hover:text-foreground transition-colors">Case Studies</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <div className="absolute top-full left-0 hidden group-hover:block bg-background shadow-lg py-2 min-w-[200px] rounded-lg border">
                            <Link href="/case-studies" className="block px-4 py-2 hover:bg-muted transition-colors">All Case Studies</Link>
                            <Link href="/case-studies/web-development" className="block px-4 py-2 hover:bg-muted transition-colors">Web Development</Link>
                            <Link href="/case-studies/mobile-apps" className="block px-4 py-2 hover:bg-muted transition-colors">Mobile Apps</Link>
                            <Link href="/case-studies/ui-ux-design" className="block px-4 py-2 hover:bg-muted transition-colors">UI/UX Design</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 group relative">
                        <span className="text-foreground/80 hover:text-foreground transition-colors">Blog</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <div className="absolute top-full left-0 hidden group-hover:block bg-background shadow-lg py-2 min-w-[200px] rounded-lg border">
                            <Link href="/blogs" className="block px-4 py-2 hover:bg-muted transition-colors">All Posts</Link>
                            <Link href="/blog/technology" className="block px-4 py-2 hover:bg-muted transition-colors">Technology</Link>
                            <Link href="/blog/design" className="block px-4 py-2 hover:bg-muted transition-colors">Design</Link>
                            <Link href="/blog/development" className="block px-4 py-2 hover:bg-muted transition-colors">Development</Link>
                        </div>
                    </div>
                    <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Search className="w-4 h-4" />
                    </Button>
                    <Link href="/contact">
                        <Button className="rounded-full px-6">Let's Talk</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;