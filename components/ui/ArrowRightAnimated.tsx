"use client";
import React from "react";

const ArrowRightAnimated: React.FC = () => (
  <span className="arrow-animate inline-block transition-transform duration-300 ease-in-out" style={{ transform: 'rotate(30deg)' }}>
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

export default ArrowRightAnimated; 