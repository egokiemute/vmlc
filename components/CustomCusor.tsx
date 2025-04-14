'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      gsap.set(cursorRef.current, {
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(followerRef.current, {
        xPercent: -20,
        yPercent: -20,
      });

      // Add the event listener on mount
      window.addEventListener('mousemove', moveCursor);

      // Remove the event listener on unmount to prevent memory leaks
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []);

  return (
    <div>
      <div ref={cursorRef} className='w-4 h-4 rounded-full fixed bg-black'></div>
      <div ref={followerRef} className='w-6 h-6 bg-transparent border-[1px] border-black z-[9999] rounded-full fixed'></div>
    </div>
  );
};

export default CustomCursor;
