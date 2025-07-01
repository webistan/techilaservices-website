"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  rating: string;
  title: string;
  content: string;
}

const ANIMATION_DURATION = 400; // ms

const RotatingTestimonial = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setDisplayedIndex((prev) => (prev + 1) % testimonials.length);
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setAnimating(false);
      }, ANIMATION_DURATION);
    }, 3000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [testimonials, testimonials.length]);

  const currentTestimonial = testimonials[displayedIndex];
  if (!currentTestimonial) return null;

  return (
    <Card className="bg-white border-0 border-t shadow-none rounded-none p-6 mt-8">
      <CardContent className="p-0">
        <div className="flex gap-10 items-start">
          <Quote className="text-slate-300 mb-4 flex-shrink-0" size={84} />
          <div
            className={`transition-all duration-400 ease-in-out ${
              animating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}
            style={{
              transitionProperty: 'opacity, transform',
              willChange: 'opacity, transform',
            }}
          >
            <div className="text-slate-600 mb-6">
              {currentTestimonial.content}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-slate-900">{currentTestimonial.rating}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="border-l border-slate pl-4">
                <div className="font-semibold text-slate-900">{currentTestimonial.name}</div>
                <div className="text-sm text-slate-500">{currentTestimonial.title}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RotatingTestimonial; 