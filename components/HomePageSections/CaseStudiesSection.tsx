"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import ArrowRightAnimated from "../ui/ArrowRightAnimated";
import MoreAboutButton from "../Buttons/moreAboutButton";

export interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-orange-500 text-sm font-medium mb-4">// 03 - CASE STUDIES</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Success Stories<br />
            <span className="text-blue-600">That Drive Results</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable outcomes through innovative technology solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.slice(0, 3).map((study) => (
            <div 
              key={study.id} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {study.excerpt}
                </p>
                {/* Read More Button */}
                <div className="flex flex-col items-center space-y-4">
                  <Link href={`/case-studies/${study.slug}`} passHref legacyBehavior>
                    <Button className="bg-[#0a1a3c] hover:bg-[#1a2a4c] text-white text-sm rounded-full px-6 py-3 flex items-center gap-2">
                      Read Full Case Study <ArrowRightAnimated />
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-3xl" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <MoreAboutButton
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-8 text-lg"
                buttonText="View All Case Studies"
               href="/case-studies"
              />   
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection; 