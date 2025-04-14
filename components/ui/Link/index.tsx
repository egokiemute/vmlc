import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  text: string;
  animate?: boolean; // A prop to toggle animation on or off
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text, animate = true, className = "" }) => {
  return (
    <Link className={`relative inline-block ${className} ${animate ? 'group' : ''} overflow-hidden`} href={href}>
        <span className={`${className} relative inline-block transition-transform duration-500 ease-in-out ${animate ? 'group-hover:translate-y-full' : ''}`}>
          {text}
        </span>
        {animate && (
          <span className={`${className} absolute top-0 left-0 w-full h-full -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}>
            {text}
          </span>
        )}
    </Link>
  );
};

export default CustomLink;
