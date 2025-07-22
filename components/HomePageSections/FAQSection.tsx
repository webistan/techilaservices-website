"use client";
import React, { useState } from "react";

interface FAQSectionProps {
  data?: {
    fieldGroupName: string;
    faqPost: {
      edges: {
        node: {
          slug: string;
          faq: {
            faq: {
              faqAnswer: string;
              faqQuestion: string;
              fieldGroupName: string;
            };
            fieldGroupName: string;
          };
        };
      }[];
    };
  };
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  

  // Extract FAQ data from WordPress response with better error handling
  const faqs = data?.faqPost?.edges?.map(edge => {
    
    // Handle different possible data structures
    const faqData = edge.node?.faq?.faq || edge.node?.faq || edge.node;
    
    return faqData;
  }) || [];

  // Handle nested array structure - flatten if needed
  const flattenedFaqs = Array.isArray(faqs[0]) ? faqs[0] : faqs;
 

  return (
    <section className="bg-[#f7f8fa] py-16 px-4 md:px-0 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ fontFamily: 'inherit' }}>
        Frequently Asked<br />Questions
      </h2>
      <div className="w-full max-w-6xl flex flex-col gap-6">
        {flattenedFaqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm transition-all"
          >
            <button
              className="flex w-full justify-between items-center text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-2xl font-bold text-center mb-8 text-slate-600">
                {faq.faqQuestion}
              </span>
              <span className="ml-4 text-3xl text-slate-400">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="mt-4 text-base text-slate-600 animate-fade-in">
                {faq.faqAnswer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 