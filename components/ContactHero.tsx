import Image from "next/image";
import React from "react";

const ContactHero = () => {
  return (
    <section className="pt-10 sm:pt-16 md:pt-16">
      <div className="relative mx-auto w-full flex flex-col gap-5 md:gap-10 items-start text-start px-2 md:flex-row md:justify-center md:items-center">
        <h1 className="text-5xl sm:text-8xl ml-0 font-semibold font-helveticaNowDisplayBold flex flex-col items-start text-start whitespace-nowrap">
          <span>Start the</span>
          <span>that changes</span>
          <span>conversation</span>
          <span>everything.</span>
        </h1>
        <p className="text-lg md:text-2xl text-start font-helveticaNowDisplayRegular max-w-sm px-2 mt-auto mb-4">
          We believe in long-term collaboration for the best results. Our team
          integrates with yours, working remotely but fully committed to your
          success.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
