"use client";
// Add this at the top to fix TS errors for window.hbspt
declare global {
  interface Window {
    hbspt?: any;
  }
}

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const ServiceTopBanner = () => {
  useEffect(() => {
    // Check if script already exists
    if (!document.getElementById("hs-script-loader")) {
      const script = document.createElement("script");
      script.id = "hs-script-loader";
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "47632479",
            formId: "7e0cb321-4f99-41fa-809c-c4d79ab49fc1",
            target: "#hubspot-form",
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "47632479",
        formId: "7e0cb321-4f99-41fa-809c-c4d79ab49fc1",
        target: "#hubspot-form",
      });
    }
  }, []);

  return (
    <section
      className="relative bg-[#f7fbff] py-8 md:py-12 border-b border-neutral-200 overflow-hidden"
      style={{
        backgroundImage: "url('/images/content-bottom-bg.jpg')",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* White gradient overlay for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10">
        {/* Left Side */}
        <div className="w-full md:w-2/5 max-w-lg flex flex-col justify-center items-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">Get In Touch</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Need Any Help For Business & Consulting
          </h1>
          <p className="text-lg md:text-2xl text-blue-900">
            Just send us your questions or concerns by starting a new case and we will give you the help you need.
          </p>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-6 relative mt-4 md:mt-0 min-h-[400px]">
          {/* Summer Sale Badge */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 flex items-center gap-2 z-10">
            <div className="bg-blue-200 text-blue-900 font-bold px-3 py-1 rounded-full text-xs flex items-center shadow">
              <span role="img" aria-label="palm">🌴</span> SUMMER SALE
            </div>
            <div className="bg-yellow-200 text-yellow-900 font-semibold px-2 py-1 rounded-full text-xs shadow">
              Upto 35% OFF
            </div>
          </div>
          <h2 className="text-xl font-bold text-neutral-800 mb-4 text-center mt-4">Register Your Trademark !</h2>
          {/* HubSpot Form Container */}
          <div id="hubspot-form"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTopBanner; 