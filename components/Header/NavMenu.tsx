"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Video, Sparkles, BadgeCheck, Star } from "lucide-react";
import React, { useState } from "react";

interface MenuItem {
  id: string;
  label: string;
  url?: string;
  childItems?: {
    edges: { node: MenuItem }[];
  };
}

interface NavMenuProps {
  menuItems: MenuItem[];
  openMenu: string | null;
  setOpenMenu: (id: string | null) => void;
  hoveredLevel2: string | null;
  setHoveredLevel2: (id: string | null) => void;
}

const mockFeatureLinks = [
  { label: "Making a lasting impression", icon: <Sparkles className="w-4 h-4" /> },
  { label: "Types of product knowledge", icon: <BadgeCheck className="w-4 h-4" /> },
  { label: "Offer practical experience", icon: <Star className="w-4 h-4" /> },
];

const NavMenu: React.FC<NavMenuProps> = ({ menuItems, openMenu, setOpenMenu, hoveredLevel2, setHoveredLevel2 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const [mobileHoveredLevel2, setMobileHoveredLevel2] = useState<string | null>(null);
 
  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-foreground border-foreground/30 focus:outline-none"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about-us" className="text-foreground/80 hover:text-[#F97316] transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-foreground/80 hover:text-[#F97316] transition-colors">
                Products
              </Link>
        {menuItems && menuItems.length > 0 ? (
          menuItems.map((node: any) => {
            const hasChildren = node.childItems && node.childItems.edges.length > 0;
            return hasChildren ? (
              <div
                key={node.id}
                className="relative group"
                onMouseEnter={() => setOpenMenu(node.id)}
                onMouseLeave={() => { setOpenMenu(null); setHoveredLevel2(null); }}
              >
                <span className="text-foreground/90 hover:text-[#F97316] transition-colors cursor-pointer flex items-center font-medium text-base gap-1">
                  {node.label}
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Mega Menu Panel */}
                {openMenu === node.id && (
                  <div
                    className="fixed mt-3 left-1/2 -translate-x-1/2 top-10 w-full max-w-[1366px] z-50 transition-all duration-200 animate-fadeIn pt-6"
                  >
                    <div className="flex bg-white shadow-2xl rounded-2xl border border-muted/20 flex-row gap-10">
                    {/* Left Sidebar (Level 2) */}
                    <div className="flex flex-col min-w-[260px] gap-2 bg-[#dadada] text-white rounded-xl py-8">
                      <span className="uppercase text-xs font-semibold text-muted-foreground mb-2 tracking-widest pl-10">{node.label}</span>
                      {node.childItems.edges.map(({ node: level2 }: { node: MenuItem }) => (
                        <Link
                          key={level2.id}
                          href={level2.url || '#'}
                          className={cn(
                            "flex items-start gap-3 p-4  cursor-pointer transition-all border border-transparent pl-10 hover:text-[#F97316]",
                            hoveredLevel2 === level2.id
                              ? "bg-background shadow-md border-muted/20 text-[#F97316]"
                              : "hover:bg-muted/10 hover:text-[#F97316]"
                          )}
                          onMouseEnter={() => setHoveredLevel2(level2.id)}
                        >
                          {/* Optionally add an icon here if available */}
                          <div>
                            <div className="font-semibold text-sm text-foreground hover:text-[#F97316]">
                              {level2.label}
                            </div>
                            {/* If you have a description field, show it here */}
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* Main Panel (Level 3) */}
                    <div className="flex-1 flex flex-col gap-6 min-w-[420px] py-8 ">
                      <span className="uppercase text-xs font-semibold text-muted-foreground tracking-widest mb-2">
                        {(() => {
                          const activeLevel2 = node.childItems.edges.find(({ node: l2 }: { node: MenuItem }) => l2.id === hoveredLevel2) || node.childItems.edges[0];
                          return activeLevel2 ? `${activeLevel2.node.label}` : "Solutions";
                        })()}
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        {(() => {
                          const activeLevel2 = node.childItems.edges.find(({ node: l2 }: { node: MenuItem }) => l2.id === hoveredLevel2) || node.childItems.edges[0];
                          return activeLevel2 && activeLevel2.node.childItems && activeLevel2.node.childItems.edges.length > 0 ? (
                            activeLevel2.node.childItems.edges.map(({ node: level3 }: { node: MenuItem }) => (
                              <Link 
                                key={level3.id} 
                                href={level3.url || '#'}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/10 hover:text-[#F97316] transition-colors cursor-pointer"
                              >
                                {/* Optionally add an icon here if available */}
                                <div className="font-medium text-foreground text-sm flex items-center gap-2 hover:text-[#F97316]">
                                  {level3.label}
                                </div>
                              </Link>
                            ))
                          ) : (
                            <div className="text-muted-foreground col-span-2">No solutions available</div>
                          );
                        })()}
                      </div>
                      <div className="flex items-center justify-between bg-muted/10 rounded-xl p-4 mt-4  border border-black/10">
                        <div>
                          <div className="font-semibold text-base text-foreground mb-1">Need different solutions?</div>
                          <div className="text-sm text-muted-foreground max-w-xs">For teams of 300+ with advanced security, control, and support</div>
                        </div>
                        <Button variant="outline" className="rounded-full px-6">Talk to sales</Button>
                      </div>
                    </div>
                    {/* Right Panel (Video & Features) */}
                    <div className="flex flex-col min-w-[260px] gap-4  py-8 pr-10">
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
                            <li key={item.label} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-[#F97316] cursor-pointer">
                              {item.icon}
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
              // <Link key={node.id} href="#" className="text-foreground/80 hover:text-[#F97316] transition-colors">
              //   {node.label}
              // </Link>
            );
            
          })
        ) : (
          <span className="text-foreground/60">No menu items</span>
        )}
        <Link href="/case-studies" className="text-foreground/80 hover:text-[#F97316] transition-colors">
                Case Studies
              </Link>
        <Link href="/blogs" className="text-foreground/80 hover:text-[#F97316] transition-colors">
                Blogs
      </Link>
      <Link href="/career" className="text-foreground/80 hover:text-[#F97316] transition-colors">
                Career
      </Link>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 h-[100vh] md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-0 left-0 w-4/5 max-w-xs h-[100vh] bg-white shadow-2xl z-70 p-6 flex flex-col gap-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {menuItems && menuItems.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {menuItems.map((node: any) => {
                  const hasChildren = node.childItems && node.childItems.edges.length > 0;
                  return (
                    <li key={node.id}>
                      {hasChildren ? (
                        <>
                          <button
                            className="w-full flex justify-between items-center py-2 px-2 text-left font-medium text-base text-foreground/90 hover:text-[#F97316]"
                            onClick={() => setMobileOpenMenu(mobileOpenMenu === node.id ? null : node.id)}
                          >
                            {node.label}
                            <svg className={`w-4 h-4 ml-1 transition-transform ${mobileOpenMenu === node.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {mobileOpenMenu === node.id && (
                            <ul className="pl-4 border-l border-muted/20 flex flex-col gap-1 mt-1">
                              {node.childItems.edges.map(({ node: level2 }: { node: MenuItem }) => (
                                <li key={level2.id}>
                                  <button
                                    className="w-full text-left py-2 px-2 text-foreground/80 hover:text-[#F97316] font-medium"
                                    onClick={() => setMobileHoveredLevel2(mobileHoveredLevel2 === level2.id ? null : level2.id)}
                                  >
                                    {level2.label}
                                    {level2.childItems && level2.childItems.edges.length > 0 && (
                                      <svg className={`w-3 h-3 ml-1 inline transition-transform ${mobileHoveredLevel2 === level2.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    )}
                                  </button>
                                  {mobileHoveredLevel2 === level2.id && level2.childItems && level2.childItems.edges.length > 0 && (
                                    <ul className="pl-4 border-l border-muted/10 flex flex-col gap-1 mt-1">
                                      {level2.childItems.edges.map(({ node: level3 }: { node: MenuItem }) => (
                                        <li key={level3.id}>
                                          <Link 
                                            href={level3.url || '#'}
                                            className="block py-1 px-2 text-foreground/70 hover:text-[#F97316] text-sm"
                                          >
                                            {level3.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link href="#" className="block py-2 px-2 text-foreground/80 hover:text-[#F97316]">
                          {node.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <span className="text-foreground/60">No menu items</span>
            )}
            <div className="mt-8 border-t pt-4">
              <div className="font-semibold text-base mb-2">Learn more about our features</div>
              <ul className="space-y-2">
                {mockFeatureLinks.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-[#F97316] cursor-pointer">
                    {item.icon}
                    {item.label}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-full px-6 mt-4 w-full">Talk to sales</Button>
              <Link href="/blogs" className="block mt-4 text-foreground/80 hover:text-[#F97316] transition-colors">Blogs</Link>
              <Link href="/career" className="block mt-2 text-foreground/80 hover:text-[#F97316] transition-colors">Career</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavMenu; 