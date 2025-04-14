import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const Custom404Hero = () => {
  return (
    <section className="pt-16 mt-16 mb-32 pb-40 max-w-8xl h-[60vh] px-2">
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="w-full flex flex-col justify-center items-center gap-10 md:flex-row max-w-8xl mx-auto">
          <div className="flex flex-col gap-6 items-start">
            <h1 className="text-5xl md:text-8xl font-helveticaNowDisplayBold font-bold flex flex-col items-start text-start">
              <span>You&apos;ve just</span>
              <span>stepped out</span>
              <span>of the circle.</span>
            </h1>
            <p className="max-w-sm md:max-w-md text-xl text-start font-helveticaNowDisplayRegular font-medium text-[#0C0C0CB0]">
              The link you clicked is broken or may have been removed, leading
              you out of the circle.
            </p>
            <Link href="/">
              <Button
                text="Get back to the circle"
                className=" w-[230px] h-16 rounded-full font-helveticaNowDisplayRegular whitespace-nowrap font-normal text-lg sm:text-lg md:text-[18px]"
                variant="outline"
              />
            </Link>
          </div>
          <Image
            src="/assets/out-the-box.svg"
            width={600}
            height={440}
            alt="about-down"
            className="object-contain mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Custom404Hero;
