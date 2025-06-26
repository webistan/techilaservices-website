import React from 'react';
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
  return (
    <section className="px-16 py-6 bg-[#001F3F08] rounded-xl">
      <div className="mx-auto flex flex-row gap-20">
        <div className="text-sm text-slate-600 w-40">
          {data?.sectionTitle || "Worked with world famous brands and partners"}
        </div>
        <div className="flex items-center justify-between opacity-40 w-full">
          {data?.clientLogo?.map((client, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={client.clientLogoImage.node.mediaItemUrl}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          )) || (
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
    </section>
  );
};

export default PartnersSection;