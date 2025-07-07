"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What services does your consultancy company provide?",
    answer:
      "Our services are designed to help businesses leverage technology to streamline operation's, improve efficiency, enhance security, reduce costs and ultimately achieve their business goals.",
  },
  {
    question: "How can your IT consultancy services benefit my business?",
    answer: "We help you optimize your IT infrastructure, reduce costs, and improve security.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in a wide range of industries including finance, healthcare, retail, and more.",
  },
  {
    question: "How do you ensure the security of my data and systems?",
    answer: "We use industry best practices and the latest security technologies to protect your data.",
  },
  {
    question: "Can you help with software implementation and integration?",
    answer: "Yes, we provide end-to-end software implementation and integration services.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f7f8fa] py-16 px-4 md:px-0 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ fontFamily: 'inherit' }}>
        Frequently Asked<br />Questions
      </h2>
      <div className="w-full max-w-6xl flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm transition-all"
          >
            <button
              className="flex w-full justify-between items-center text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-2xl font-bold text-center mb-8 text-slate-600">
                {faq.question}
              </span>
              <span className="ml-4 text-3xl text-slate-400">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="mt-4 text-base text-slate-600 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 