"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image"

interface PartnersSectionProps {
  data?: {
    sectionTitle: string;
    clientLogo: {
      clientLogoImage: {
        node: {
          mediaItemUrl: string;
        };
      };
    }[];
  };
}

const PartnersSection = ({ data }: PartnersSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const speed = 0.5; // px per frame

  // Duplicate logos for seamless loop
  const logos = data?.clientLogo || [];
  const allLogos = [...logos, ...logos];

  useEffect(() => {
    let frameId: number;
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const containerWidth = scrollRef.current?.offsetWidth || 0;
    const maxScroll = scrollWidth / 2;

    const animate = () => {
      setScroll(prev => {
        let next = prev + speed;
        if (next >= maxScroll) {
          next = 0;
        }
        return next;
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [logos.length]);

  return (
    <section className="px-16 py-6 bg-[#001F3F08] rounded-xl">
      <div className="mx-auto flex flex-row gap-20">
        {data?.sectionTitle &&
          <div className="text-sm text-slate-600 w-40 flex items-center">
            {data?.sectionTitle || "Worked with world famous brands and partners"}
          </div>
        }
        <div className="relative w-full overflow-x-hidden">
          <div
            ref={scrollRef}
            className="flex items-center gap-10"
            style={{
              transform: `translateX(-${scroll}px)`,
              transition: 'transform 0s linear',
              width: logos.length > 0 ? 'max-content' : '100%',
              opacity: 0.4,
            }}
          >
            {logos.length > 0 ? (
              allLogos.map((client, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={client.clientLogoImage.node.mediaItemUrl}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))
            ) : (
              // Fallback content
              <>
                <div className="text-2xl font-bold text-slate-400">Aloha</div>
                <div className="text-2xl font-bold text-slate-400">Aloha</div>
                <div className="text-2xl font-bold text-slate-400">next</div>
                <div className="text-2xl font-bold text-slate-400">Beka</div>
                <div className="text-2xl font-bold text-slate-400">ATHLETE</div>
                <div className="text-2xl font-bold text-slate-400">Aloha</div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;