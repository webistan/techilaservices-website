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
          Techila
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
                  <span className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center">
                    {node.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  {/* Mega Menu Panel */}
                  {openMenu === node.id && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 flex bg-background shadow-2xl py-6 px-8 min-w-[1200px] rounded-lg border z-50 transition-all duration-200 flex-row gap-8"
                      onMouseLeave={() => { setOpenMenu(null); setHoveredLevel2(null); }}
                    >
                      {/* Level 2 List (Left Column) */}
                      <div className="flex flex-col min-w-[200px] border-r border-muted/30 pr-6">
                        {node.childItems.edges.map(({ node: child }: any) => (
                          <div
                            key={child.id}
                            className={cn(
                              "py-2 px-3 cursor-pointer rounded hover:bg-muted/20 font-semibold text-foreground/90 transition-colors",
                              hoveredLevel2 === child.id && "bg-muted/30"
                            )}
                            onMouseEnter={() => setHoveredLevel2(child.id)}
                          >
                            <Link href="#" className="block w-full h-full">
                              {child.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                      {/* Level 3 List (Right Column) */}
                      <div className="min-w-[400px] pl-6">
                        {node.childItems.edges.map(({ node: child }: any) => {
                          const hasGrandChildren = child.childItems && child.childItems.edges.length > 0;
                          if (hoveredLevel2 === child.id && hasGrandChildren) {
                            return (
                              <div key={child.id} className="grid grid-cols-3 gap-2">
                                {child.childItems.edges.map(({ node: grandchild }: any) => (
                                  <Link
                                    key={grandchild.id}
                                    href="#"
                                    className="block text-foreground/70 hover:text-foreground text-sm py-2 px-3 rounded transition-colors hover:bg-muted/20"
                                  >
                                    {grandchild.label}
                                  </Link>
                                ))}
                              </div>
                            );
                          }
                          return null;
                        })}
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