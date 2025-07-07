"use client";
import React, { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  value: number | string;
  duration?: number;
  start?: boolean;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000, start = true }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    let startNum = 0;
    const end = typeof value === 'number' ? value : parseInt(value as string, 10);
    if (startNum === end) return;
    const incrementTime = Math.max(Math.floor(duration / end), 16);
    let current = startNum;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, duration, start]);

  return <span>{count}+</span>;
};

export default AnimatedCounter; 