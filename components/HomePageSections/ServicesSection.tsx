import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MoreAboutButton from "../Buttons/moreAboutButton";

const ServicesSection = () => {
  return (
    <section className="px-6 py-6 bg-[#d7ddcb] mx-4 rounded-[2.5rem]">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center ml-20">
          {/* Left Content */}
          <div className="rounded-3xl p-12">
            <div className="text-orange-500 text-sm font-medium mb-4">02 - SERVICES</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Risk Management</h2>
            <p className="text-slate-600 mb-8 max-w-80">
              Our IT consultants meet with your team to thoroughly understand your unique need.
            </p>
            <MoreAboutButton
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-8"
              buttonText="More details"
            />
          </div>

          {/* Right Content - Image */}
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Risk management consultation"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 