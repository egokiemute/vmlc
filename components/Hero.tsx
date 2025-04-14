"use client";
import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="pt-16 mt-16 mb-16 max-w-8xl h-[60vh] px-2">
      <div className="relative mx-auto w-full flex flex-col justify-center items-center">
        <span className="text-xs uppercase bg-gray-300/20 p-3 rounded-full">🌍 Our Vision</span>
        <div className="flex flex-col items-center gap-1 md:gap-4 mb-2 sm:mb-8 mt-4 sm:justify-center text-[44px] leading-10 md:leading-[82px] md:text-8xl font-bold text-center font-helveticaNowDisplayBold w-full">
          <h1>A family rooted</h1>
          <h1>in christ love.</h1>
        </div>
        <div className="flex flex-col items-center text-center max-w-3xl">
          <p className="font-normal text-lg sm:text-xl md:text-2xl text-[#0C0C0CB0] mb-10 font-helveticaNowDisplayRegular w-full px-2">
          We hold firmly to the Word of God as the ultimate standard for doctrine, and we believe that the greatest demonstration of God&apos;s redemptive work of Christ. 
          </p>
          <Link href="/">
            <Button
              text="Watch our sermons"
              className=" w-[230px] h-16 rounded-full font-helveticaNowDisplayRegular whitespace-nowrap font-normal text-lg sm:text-lg md:text-[18px]"
              variant="outline"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
