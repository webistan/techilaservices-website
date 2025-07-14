import React from "react";
import Image from "next/image";
import { fetchWordPressQuery } from "../lib/fetch-wordpress-query";
import { GET_OURTEAM_SLUG } from "../lib/wp-queries";

interface OurTeamSectionProps {
  slug?: string;
}

export default async function OurTeamSection({ slug = "our-team" }: OurTeamSectionProps) {
  const { data, error } = await fetchWordPressQuery<any>(GET_OURTEAM_SLUG, { slug });
  const team = data?.webNewCustomFieldBy?.meetOurTeam?.meetOurTeam || [];

  if (error) {
    return <div className="text-red-500">Failed to load team data.</div>;
  }
  if (!team.length) {
    return <div className="text-neutral-500">No team members found.</div>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Meet the talented team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member: any, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[5/6] relative mb-0 overflow-hidden">
                <Image
                  src={member.teamMemberImage?.node?.sourceUrl || "/placeholder-user.jpg"}
                  alt={member.teamMemberName || "Team member"}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={index < 4}
                />
              </div>
              <h3 className="font-bold text-2xl text-center mt-6 mb-1">{member.teamMemberName}</h3>
              <p className="text-base text-gray-600 text-center mb-0">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 