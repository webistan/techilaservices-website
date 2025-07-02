"use client";
import { Search, BadgeCheck, Star, Video, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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



const mockFeatureLinks = [
  { label: "Making a lasting impression", icon: <Sparkles className="w-4 h-4" /> },
  { label: "Types of product knowledge", icon: <BadgeCheck className="w-4 h-4" /> },
  { label: "Offer practical experience", icon: <Star className="w-4 h-4" /> },
];

const HeaderClient = ({ menuItems }: HeaderClientProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLevel2, setHoveredLevel2] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
          <Image
            src={"/images/logo.webp"}
            width={120}
            height={120}
            alt="TechillaSolutions"
          />
          
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems && menuItems.length > 0 ? (
            menuItems.map((node: any) => {
              const hasChildren = node.childItems && node.childItems.edges.length > 0;
              return hasChildren ? (
                <div key={node.id} className="relative group"
                  onMouseEnter={() => setOpenMenu(node.id)}
                  onMouseLeave={() => { setOpenMenu(null); setHoveredLevel2(null); }}
                >
                  <span className="text-foreground/90 hover:text-primary transition-colors cursor-pointer flex items-center font-medium text-base gap-1">
                    {node.label}
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  {/* Mega Menu Panel */}
                  {openMenu === node.id && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 flex bg-white shadow-2xl py-8 px-10 min-w-[1366px] rounded-2xl border border-muted/20 z-50 transition-all duration-200 flex-row gap-10 animate-fadeIn"
                      onMouseLeave={() => { setOpenMenu(null); setHoveredLevel2(null); }}
                    >
                      {/* Left Sidebar (Level 2) */}
                      <div className="flex flex-col min-w-[260px] pr-8 gap-2">
                        <span className="uppercase text-xs font-semibold text-muted-foreground mb-2 tracking-widest">Directions</span>
                        {node.childItems.edges.map(({ node: level2 }: { node: MenuItem }) => (
                          <div
                            key={level2.id}
                            className={cn(
                              "flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all border border-transparent",
                              hoveredLevel2 === level2.id ? "bg-background shadow-md border-muted/20" : "hover:bg-muted/10"
                            )}
                            onMouseEnter={() => setHoveredLevel2(level2.id)}
                          >
                            {/* Optionally add an icon here if available */}
                            <div>
                              <div className="font-semibold text-base text-foreground">{level2.label}</div>
                              {/* If you have a description field, show it here */}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Main Panel (Level 3) */}
                      <div className="flex-1 flex flex-col gap-6 min-w-[420px]">
                        <span className="uppercase text-xs font-semibold text-muted-foreground tracking-widest mb-2">
                          {(() => {
                            const activeLevel2 = node.childItems.edges.find(({ node: l2 }: { node: MenuItem }) => l2.id === hoveredLevel2) || node.childItems.edges[0];
                            return activeLevel2 ? `Solutions for ${activeLevel2.node.label}` : "Solutions";
                          })()}
                        </span>
                        <div className="grid grid-cols-2 gap-4">
                          {(() => {
                            const activeLevel2 = node.childItems.edges.find(({ node: l2 }: { node: MenuItem }) => l2.id === hoveredLevel2) || node.childItems.edges[0];
                            return activeLevel2 && activeLevel2.node.childItems && activeLevel2.node.childItems.edges.length > 0 ? (
                              activeLevel2.node.childItems.edges.map(({ node: level3 }: { node: MenuItem }) => (
                                <div key={level3.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/10 transition-colors cursor-pointer">
                                  {/* Optionally add an icon here if available */}
                                  <div className="font-medium text-foreground text-base flex items-center gap-2">
                                    {level3.label}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="text-muted-foreground col-span-2">No solutions available</div>
                            );
                          })()}
                        </div>
                        <div className="flex items-center justify-between bg-muted/10 rounded-xl p-4 mt-4">
                          <div>
                            <div className="font-semibold text-base text-foreground mb-1">Need different solutions?</div>
                            <div className="text-sm text-muted-foreground max-w-xs">For teams of 300+ with advanced security, control, and support</div>
                          </div>
                          <Button variant="outline" className="rounded-full px-6">Talk to sales</Button>
                        </div>
                      </div>
                      {/* Right Panel (Video & Features) */}
                      <div className="flex flex-col min-w-[260px] gap-4">
                        <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video mb-2">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center">
                            <Video className="w-10 h-10 text-white/80" />
                          </div>
                          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">4:27</span>
                          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Video thumbnail" className="w-full h-full object-cover opacity-60" />
                        </div>
                        <div>
                          <div className="font-semibold text-base mb-2">Learn more about our features</div>
                          <ul className="space-y-2">
                            {mockFeatureLinks.map((item) => (
                              <li key={item.label} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary cursor-pointer">
                                {item.icon}
                                {item.label}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
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