import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const WorkProcessSection = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="text-orange-500 text-sm font-medium mb-4">06 - WORK PROCESS</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
              See the value in our it consulting solutions
            </h2>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3">
              Work with us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Content - Process Steps */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="border border-slate-200 rounded-2xl p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-slate-900 mb-4">01</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Discover the Project</h3>
                <p className="text-slate-600">
                  Our IT consultants meet with your team to thoroughly understand your unique need.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 rounded-2xl p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-slate-900 mb-4">02</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy Development</h3>
                <p className="text-slate-600">
                  Our IT consultants meet with your team to thoroughly understand your unique need.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 rounded-2xl p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-slate-900 mb-4">03</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Implementation the solution</h3>
                <p className="text-slate-600">
                  Our IT consultants meet with your team to thoroughly understand your unique need.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 rounded-2xl p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-slate-900 mb-4">04</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Monitoring Progress</h3>
                <p className="text-slate-600">
                  Our IT consultants meet with your team to thoroughly understand your unique need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection; 