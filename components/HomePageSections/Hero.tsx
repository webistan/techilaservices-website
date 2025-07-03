import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import MoreAboutButton from "../Buttons/moreAboutButton"
import React from "react"
import ProfileCard from "./ProfileCard"

interface HeroProps {
  data?: {
    heroPostTitle: string;
    heroPostShortDesc: string;
    heroPostLink: string;
    heroStats: {
      statsNumber: string;
      statsText: string;
      icon: {
        node: {
          mediaItemUrl: string;
        };
      };
    }[];
  };
}

const Hero = ({ data }: HeroProps) => {

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 px-6 py-2">
          {/* Left Content */}
          <div className="bg-slate-900 rounded-[2.5rem] p-[120px] text-white relative">
            <div className="mt-16">
              <div className="mb-2">
                <div className="flex items-center space-x-2 text-orange-500">
                  <div className="flex space-x-1">
                    <div className="w-1 h-6 bg-orange-500 rounded"></div>
                    <div className="w-1 h-4 bg-orange-500 rounded mt-1"></div>
                    <div className="w-1 h-3 bg-orange-500 rounded mt-1.5"></div>
                  </div>
                  <span className="text-sm font-medium">IT CONSULTANT</span>
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                {data?.heroPostTitle || "Your Title Here"}
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-md">
                {data?.heroPostShortDesc || "Description within 12 words"}
              </p>
              <MoreAboutButton
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-8 text-lg"
                buttonText="More about"
                href={data?.heroPostLink}
              />
            </div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Main image */}
              <div className="col-span-2 rounded-3xl overflow-hidden">
                <Image
                  src="https://crowdytheme.com/wp/binox/it-consultancy/wp-content/uploads/sites/3/2024/04/banner-right.webp"
                  alt="Team collaboration"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover h-[380px]"
                />
              </div>

              <div className="flex flex-row w-full col-span-2 w-full gap-4">
                {/* Stats cards dynamically rendered from heroStats */}
                {data?.heroStats?.map((stat, idx) => (
                  <Card key={idx} className="bg-slate-100 border-0 rounded-3xl w-full">
                    <CardContent className="px-14 py-16 flex flex-col items-center">
                      <div className="text-4xl font-bold text-slate-900 mb-2">{stat.statsNumber}</div>
                      <div className="text-sm text-slate-600 mb-4 text-center whitespace-pre-line">
                        {stat.statsText}
                      </div>
                      {stat.icon?.node?.mediaItemUrl ? (
                        <div className="w-12 h-8 flex items-center justify-center">
                          <Image
                            src={stat.icon.node.mediaItemUrl}
                            alt="Stat Icon"
                            width={48}
                            height={32}
                            className="object-contain w-12 h-8"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-8 bg-slate-200 rounded"></div>
                      )}
                    </CardContent>
                  </Card>
                ))}
                <div className="w-[100%] relative">
                  {/* Floating profile card */}
                  <div
        className="absolute bg-white -bottom-5 right-0 w-[100%] h-[420px] border-[20px] border-white rounded-3xl overflow-hidden cursor-pointer shadow-lg z-10"
        
      >
                  <ProfileCard videoSrc="https://www.youtube.com/watch?v=zggbwYu1tdw" title="Professional Introduction" />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Hero