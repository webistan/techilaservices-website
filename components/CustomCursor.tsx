"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const requestRef = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = () => {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };
    if (typeof window === 'undefined') return;
    if (isTouchDevice()) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Smooth follow effect
  useEffect(() => {
    if (!visible) return;
    const animate = () => {
      setPosition((prev) => {
        const dx = mouse.current.x - prev.x;
        const dy = mouse.current.y - prev.y;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });
      if (typeof window !== 'undefined') {
        requestRef.current = window.requestAnimationFrame(animate);
      }
    };
    if (typeof window !== 'undefined') {
      requestRef.current = window.requestAnimationFrame(animate);
    }
    return () => {
      if (typeof window !== 'undefined' && requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
          transition: 'background 0.2s',
        }}
      >
        {/* Outer Circle */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '2px solid #222',
            background: 'rgba(255,255,255,0.01)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'border-color 0.2s',
          }}
        >
          {/* Inner Dot */}
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#222',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
