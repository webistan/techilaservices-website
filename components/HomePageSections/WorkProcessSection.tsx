import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import MoreAboutButton from "../Buttons/moreAboutButton"
interface ProcessDetail {
  data?: {
  sectionHeading: string;
  processLink: string;
    processDetails: {
            fieldGroupName: string;
            proccessTitle: string;
            processExcerpt: string;
          }[]
} 
}




const WorkProcessSection = ({data}:ProcessDetail) => {
  return (
    <section className="bg-[#f7f8fa] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="text-orange-500 text-sm font-medium mb-4">06 - WORK PROCESS</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
            {  data?.sectionHeading || "Our Work Processssss" }
            </h2>
            
             <Link href={data?.processLink || "#"} className="inline-flex items-center" target="_blank"> 
           

            <MoreAboutButton
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-8"
                buttonText="Work With Us"
               href="/contact"
              />      



            </Link>
          </div>

          {/* Right Content - Process Steps */}
            <div className="grid grid-cols-2 gap-6">
            {data?.processDetails?.map?.((process, idx) => (
              <Card key={idx} className="border border-slate-200 rounded-2xl p-6">
              <CardContent className="p-0"> Step
                <div className="text-3xl font-bold text-slate-900 mb-4">
              {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                {process.proccessTitle}
                </h3>
                <p className="text-slate-600">
                {process.processExcerpt}
                </p>
              </CardContent>
              </Card>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection; 