"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Define a type for a single testimonial
interface Testimonial {
  name: string;
  rating: string;
  title: string;
  content: string;
}

// Define the props interface
interface TestimonialPost {
  edges: {
    node: {
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
}

interface RotatingTestimonialProps {
  testimonialPosts: {
    edges: {
      node: {
        ourClientTestimonials: {
          testimonials: {
            authorName: string;
            designation: string;
            rating: string;
            testimonial: string;
          }[];
        };
      };
    }[];
  };
}

const ANIMATION_DURATION = 400; // ms

const RotatingTestimonial = ({ testimonialPosts }: RotatingTestimonialProps) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Flatten all testimonials from all edges
  const testimonials = testimonialPosts?.edges?.flatMap(edge =>
    edge.node.ourClientTestimonials?.testimonials?.map(testimonial => ({
      name: testimonial.authorName,
      rating: testimonial.rating,
      title: testimonial.designation,
      content: testimonial.testimonial,
    })) || []
  ) || [];

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setPrevIndex(displayedIndex);
      setAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setDisplayedIndex((prev) => (prev + 1) % testimonials.length);
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setAnimating(false);
        setPrevIndex(null);
      }, ANIMATION_DURATION);
    }, 3000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [testimonials, testimonials.length, displayedIndex]);

  const currentTestimonial = testimonials[displayedIndex];
  const previousTestimonial = prevIndex !== null ? testimonials[prevIndex] : null;
  if (!currentTestimonial) return null;

  return (
    <Card className="bg-white border-0 border-t shadow-none rounded-none p-6 mt-8">
      <CardContent className="p-0">
        <div className="flex gap-5 md:gap-10 items-start relative min-h-[140px]">
          <Quote className="text-slate-300 mb-4 flex-shrink-0 w-[23px] md:w-auto" size={84} />
          <div className="relative w-full">
            {/* Previous testimonial (slides out to the left) */}
            {previousTestimonial && animating && (
              <div
                className={`absolute top-0 left-0 w-full transition-all duration-400 ease-in-out opacity-100 z-10 translate-x-0 ${animating ? '-translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}
                style={{
                  transitionProperty: 'opacity, transform',
                  willChange: 'opacity, transform',
                }}
              >
                <div className="text-slate-600 mb-6">
                  {previousTestimonial.content}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-slate-900">{previousTestimonial.rating}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="border-l border-slate pl-4">
                    <div className="font-semibold text-slate-900">{previousTestimonial.name}</div>
                    <div className="text-sm text-slate-500">{previousTestimonial.title}</div>
                  </div>
                </div>
              </div>
            )}
            {/* Current testimonial (slides in from the right) */}
            <div
              className={`absolute top-0 left-0 w-full transition-all duration-400 ease-in-out z-20 ${animating ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}
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
        </div>
      </CardContent>
    </Card>
  );
};

export default RotatingTestimonial; 