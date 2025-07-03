import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CustomerSatisfactionProps {
  data?: {
    sectionTitle: string;
      successStats: {
        successRating: string;
        successText: string;
      }[];
  };
}

const CustomerSatisfactionSection = ({ data }: CustomerSatisfactionProps) => {
  console.log("CustomerSatisfactionProps",data)
  return (
    <section className="px-6 py-16 bg-white">
      <div className="px-20 mx-10 mx-auto">
        <div className="bg-slate-100 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="text-orange-500 text-sm font-medium mb-4">04 - SUCCESS</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8 max-w-80">
                {data?.sectionTitle}
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
                      <div className="text-2xl font-bold text-slate-900">{data?.successStats?.[0]?.successRating}</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 space-y-1 text-sm">
                  {data?.successStats?.slice(1).map((stat, idx) => (
                    <div key={idx}>{stat.successRating}</div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                {data?.successStats?.map((stat, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    {/* You can customize the color/indicator as needed */}
                    <div className="w-4 h-4 bg-slate-900 rounded"></div>
                    <span className="text-sm text-slate-600">{stat.successRating} {stat.successText}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default CustomerSatisfactionSection; 