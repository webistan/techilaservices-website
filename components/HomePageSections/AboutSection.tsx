import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Quote } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="text-orange-500 text-sm font-medium mb-4">01 - ABOUT US</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              {"We're binox IT consulting agency"}
            </h2>
          </div>

          {/* Center Content */}
          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
              30<sup className="text-3xl">+</sup>
            </div>
            <p className="text-slate-600 mb-8">
              Working with <span className="underline">binox-it consulting</span> gives you peace minds in knowing
              that your books are accurate updated in real-time taxes are filed and paid on schedule.
            </p>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3">
              More About
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {/* Testimonial */}
            <Card className="bg-white border border-slate-200 rounded-2xl p-6 mt-8">
              <CardContent className="p-0">
                <Quote className="w-8 h-8 text-slate-300 mb-4" />
                <p className="text-slate-600 mb-6">
                  {
                    "We loves sharing my shortcuts have been techniques with binox consultancy teams emmense satisfaction..."
                  }
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">Julian Bray</div>
                    <div className="text-sm text-slate-500">CEO, Elant Gavita</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-slate-900">4.5</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Professional working"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 