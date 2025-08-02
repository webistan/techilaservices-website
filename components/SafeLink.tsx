"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface SafeLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const SafeLink = ({ href, children, className, target, onClick }: SafeLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    try {
      // Prevent navigation for placeholder links
      if (href === '#' || href === '') {
        e.preventDefault();
        return;
      }
      
      // Call the original onClick if provided
      if (onClick) {
        onClick(e);
      }
    } catch (error) {
      console.error('Error in SafeLink click handler:', error);
      e.preventDefault();
    }
  };

  return (
    <Link 
      href={href} 
      className={className}
      target={target}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default SafeLink; 