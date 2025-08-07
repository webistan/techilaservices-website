"use client";
import { Search, BadgeCheck, Star, Video, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NavMenu from "./NavMenu";


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
    <>
      {/* News Alert Section */}
      <div className="w-full bg-yellow-100 text-yellow-900 text-center py-2 px-4 text-sm font-medium">
        🚨 News Alert: Techila Global Services is now Salesforce.com Summit Partner
      </div>
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
          <NavMenu
            menuItems={menuItems}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            hoveredLevel2={hoveredLevel2}
            setHoveredLevel2={setHoveredLevel2}
          />
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
    </>
  );
};

export default HeaderClient;