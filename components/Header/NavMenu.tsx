"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Video, Sparkles, BadgeCheck, Star } from "lucide-react";
import React from "react";

interface MenuItem {
  id: string;
  label: string;
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
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {menuItems && menuItems.length > 0 ? (
        menuItems.map((node: any) => {
          const hasChildren = node.childItems && node.childItems.edges.length > 0;
          return hasChildren ? (
            <div key={node.id} className="relative group"
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
                  onMouseLeave={() => { setOpenMenu(null); setHoveredLevel2(null); }}
                >
                  <div className="flex bg-white shadow-2xl rounded-2xl border border-muted/20 flex-row gap-10">
                  {/* Left Sidebar (Level 2) */}
                  <div className="flex flex-col min-w-[260px] gap-2 bg-[#dadada] text-white rounded-xl py-8">
                    <span className="uppercase text-xs font-semibold text-muted-foreground mb-2 tracking-widest pl-10">{node.label}</span>
                    {node.childItems.edges.map(({ node: level2 }: { node: MenuItem }) => (
                      <div
                        key={level2.id}
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
                      </div>
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
                            <div key={level3.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/10 hover:text-[#F97316] transition-colors cursor-pointer">
                              {/* Optionally add an icon here if available */}
                              <div className="font-medium text-foreground text-sm flex items-center gap-2 hover:text-[#F97316]">
                                {level3.label}
                              </div>
                            </div>
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
            <Link key={node.id} href="#" className="text-foreground/80 hover:text-[#F97316] transition-colors">
              {node.label}
            </Link>
          );
        })
      ) : (
        <span className="text-foreground/60">No menu items</span>
      )}
    </nav>
  );
};

export default NavMenu; 