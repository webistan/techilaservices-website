import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CustomerSatisfactionSection = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-100 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="text-orange-500 text-sm font-medium mb-4">04 - SUCCESS</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                Customer satisfaction data
              </h2>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3">
                Work with us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right Content - Chart */}
            <div className="grid grid-cols-2 gap-8">
              {/* Pie Chart Representation */}
              <div className="relative">
                <div className="w-48 h-48 mx-auto relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="20" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="20"
                      strokeDasharray="210 251"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">84%</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 space-y-1 text-sm">
                  <div>10%</div>
                  <div>4%</div>
                  <div>1%</div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-slate-900 rounded"></div>
                  <span className="text-sm text-slate-600">84% Client Very satisfied</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-slate-400 rounded"></div>
                  <span className="text-sm text-slate-600">10% Client Satisfied</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-slate-300 rounded"></div>
                  <span className="text-sm text-slate-600">4% Neutral</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-slate-200 rounded"></div>
                  <span className="text-sm text-slate-600">1% Somewhat dissatisfied</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 rounded-3xl overflow-hidden relative">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Team consultation video"
            width={1200}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            >
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfactionSection; 