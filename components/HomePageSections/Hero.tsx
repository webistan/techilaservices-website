import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import MoreAboutButton from "../Buttons/moreAboutButton"

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
                {/* Stats cards */}
                <Card className="bg-slate-100 border-0 rounded-3xl w-full">
                  <CardContent className="px-14 py-16">
                    <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
                    <div className="text-sm text-slate-600 mb-4">
                      Award winning
                      <br />
                      company
                    </div>
                    <div className="w-12 h-8 bg-slate-200 rounded"></div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-100 border-0 rounded-3xl w-full">
                  <CardContent className="px-14 py-16">
                    <div className="text-4xl font-bold text-slate-900 mb-2">2.5m</div>
                    <div className="text-sm text-slate-600 mb-4">
                      We consultant customer
                      <br />
                      word-wide
                    </div>
                    <div className="flex -space-x-2">
                      <Avatar className="w-12 h-12 border-2 border-white">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-12 h-12 border-2 border-white">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>U2</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-12 h-12 border-2 border-white">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>U3</AvatarFallback>
                      </Avatar>
                      <div className="w-12 h-12 bg-slate-900 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium relative z-2 border-2 border-white">
                        +
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="w-[100%] relative">
                  {/* Floating profile card */}
            <div className="absolute bg-white -bottom-5 right-0 w-[100%] h-[420px] border-[20px] border-white rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=160&width=128"
                alt="Professional portrait"
                width={128}
                height={160}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-slate-900"></div>
                </div>
              </div>
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