import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const SermonsBanner = () => {
  return (
    <section className="relative pt-24 md:mt-24 mx-auto px-4 md:px-10 h-[400px] md:h-[600px] sermons-banner-bg w-full">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Bottom-left text */}
      <div className="absolute bottom-10 left-6 md:left-10 z-20 text-white max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold font-helveticaNowDisplayBold">
          Sermons & Teachings
        </h2>
        <p className="mt-2 mb-8 text-base md:text-lg">
          Be inspired by powerful messages of faith and hope from our Pastor and
          get filled and transformed.
        </p>
        <Link href="/">
          <Button
            text="See all sermons"
            className="w-44 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular hidden md:inline-block"
            variant="outline"
          />
        </Link>
      </div>
    </section>
  );
};

export default SermonsBanner;
