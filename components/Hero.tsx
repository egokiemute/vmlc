"use client";
import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-24 mx-auto px-4 md:px-10 min-h-screen md:h-screen main-hero-banner w-full">
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] px-2">
        <div className="mx-auto w-full flex flex-col justify-center items-center text-center max-w-6xl">
          {/* Main Heading */}
          <div className="text-white flex flex-col items-center gap-2 md:gap-4 mb-4 md:mb-4 text-[36px] leading-[40px] sm:text-[44px] sm:leading-[48px] md:text-8xl md:leading-[82px] font-bold font-helveticaNowDisplayBold w-full">
            <h1>Behold, the</h1>
            <h1>Bridegroom Cometh</h1>
          </div>
          
          {/* Description */}
          <div className="flex flex-col items-center text-center max-w-3xl mb-8 md:mb-8">
            <p className="text-white font-normal text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 font-helveticaNowDisplayRegular w-full px-2">
              Making Ready the Bride for the Coming of the Lord. 
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/">
                <Button
                  text="Watch Live"
                  className="w-[230px] h-14 md:h-16 rounded-full font-helveticaNowDisplayRegular whitespace-nowrap font-normal text-base md:text-lg"
                  variant="outline"
                />
              </Link>
              <Link href="/">
                <Button
                  text="Latest Sermons"
                  className="w-[230px] h-14 md:h-16 rounded-full font-helveticaNowDisplayRegular whitespace-nowrap font-normal text-base md:text-lg"
                  variant="primary"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;