"use client"
import Image from "next/image";
import MoreAboutButton from "../Buttons/moreAboutButton";
import RotatingTestimonial from "./RotatingTestimonial";
import AnimatedCounter from '../ui/AnimatedCounter'
import React, { useRef, useEffect, useState } from "react";

interface AboutUsSectionData {
  data?: {
    aboutUsLink: string;
    aboutUsTitle: string;
    sectionExcerpt: string;
    selectTestimonialPost: {
      edges: {
        node: {
          id: string;
          ourClientTestimonials: {
            testimonials: {
              authorName: string;
              designation: string;
              rating: string;
              testimonial: string;
            }
          }
        }
      }
    }[];
  }
};

const AboutSection = ({ data }: AboutUsSectionData) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 md:py-16">
      <div className="md:px-20 mx-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          {/* <div>
            <div className="text-orange-500 text-sm font-medium mb-4">01 - ABOUT US</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              {data?.aboutUsTitle}
            </h2>
          </div> */}

          {/* Center Content */}
          <div className="text-left">
            <div className="mb-4">
              <div className="text-orange-500 text-sm font-medium mb-4">01 - ABOUT US</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {data?.aboutUsTitle}
              </h2>
            </div>
            <div ref={ref}>
              <div className="text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
                <AnimatedCounter value={30} start={inView} />
                <sup className="text-3xl"></sup>
              </div>
            </div>
            <p className="text-slate-600 mb-8">
              {data?.sectionExcerpt}
            </p>
            <MoreAboutButton
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-8"
              buttonText="More About"
            />
            {/* Testimonial */}
            <RotatingTestimonial testimonialPosts={data?.selectTestimonialPost ?? []} />
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden mb-8">
              <Image
                src="https://cdn-ilbnnjf.nitrocdn.com/rAUNdQIoztYuMIpzgzyHqZcuqcpgxgVi/assets/images/optimized/rev-1eaf327/techilaservices.com/wp-content/uploads/2018/05/283-pai4685-jj-id-392158-jpeg1-1000x852.jpg"
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