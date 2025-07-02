"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MenuItem {
  id: string;
  label: string;
  childItems?: {
    edges: { node: MenuItem }[];
  };
}

interface HeaderClientProps {
  menuItems: MenuItem[];
}

const HeaderClient = ({ menuItems }: HeaderClientProps) => {
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
          {menuItems && menuItems.length > 0 ? (
            menuItems.map((node: any) => {
              const hasChildren = node.childItems && node.childItems.edges.length > 0;
              return hasChildren ? (
                <div key={node.id} className="flex items-center space-x-1 group relative">
                  <span className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer">{node.label}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute top-full left-0 hidden group-hover:block bg-background shadow-lg py-2 min-w-[200px] rounded-lg border z-50">
                    {node.childItems.edges.map(({ node: child }: any) => (
                      <Link key={child.id} href="#" className="block px-4 py-2 hover:bg-muted transition-colors">{child.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={node.id} href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                  {node.label}
                </Link>
              );
            })
          ) : (
            <span className="text-foreground/60">No menu items</span>
          )}
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

export default HeaderClient; 