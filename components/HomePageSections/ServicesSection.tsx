"use client"
import Image from "next/image";
import MoreAboutButton from "../Buttons/moreAboutButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { useEffect, useRef, useState } from "react";

interface ServicesProps {
  data?: {
    selectServices: {
      edges: {
        node: {
          slug: string;
          id?: string;
          title?: string;
        };
      }[];
    };
  };
}

const AUTO_SLIDE_INTERVAL = 3000;

const ServicesSection = ({ data }: ServicesProps) => {
  const services = data?.selectServices?.edges || [];
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const numSlides = services.length;

  // Auto-advance logic
  useEffect(() => {
    if (numSlides <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % numSlides);
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [numSlides]);

  // Manual navigation resets timer
  const handleManualNav = (idx: number) => {
    setCurrent(idx);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % numSlides);
      }, AUTO_SLIDE_INTERVAL);
    }
  };

  if (!services.length) return null;

  return (
    <section className="px-6 py-6 bg-[#d7ddcb] mx-4 rounded-[2.5rem]">
      <div className="mx-auto">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {services.map((service, idx) => (
              <CarouselItem key={service.node.id || service.node.slug}>
                <div className="grid lg:grid-cols-2 gap-12 items-center ml-20">
                  {/* Left Content */}
                  <div className="rounded-3xl p-12 flex flex-col justify-between h-full pt-40 pb-40">
                    <div className="text-orange-500 text-sm font-medium mb-4">{(idx + 1).toString().padStart(2, '0')} - SERVICES</div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-6 inline-block border-b border-orange-500 pb-2">
                        {idx + 1}
                        <span className="text-xl relative bottom-3 left-1">/{numSlides}</span>
                      </h2>
                      <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        {service.node.title || "Untitled Service"}
                      </h2>
                      <p className="text-slate-600 mb-8 max-w-80">
                        {/* No description in data, so placeholder */}
                        Learn more about our {service.node.title?.toLowerCase() || "service"}.
                      </p>
                      <MoreAboutButton
                        className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-8"
                        buttonText="More details"
                      />
                    </div>
                  </div>
                  {/* Right Content - Image */}
                  <div className="rounded-3xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt={service.node.title || "Service image"}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Dots navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-orange-500" : "bg-slate-400"}`}
              onClick={() => handleManualNav(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 