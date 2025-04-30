import FAQ from "@/components/FAQ";
// import GetInTouch from "@/components/GetInTouch";
// import OurJourney from "@/components/OurJourney";
// import OurProcess from "@/components/OurProcess";
// import OurTeams from "@/components/OurTeams";
// import OurValues from "@/components/OurValues";
import Button from "@/components/ui/Button";
// import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
// import { Metadata } from "next";
// import WhoWeAre from "@/components/WhoWeAre";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-10 mx-auto give-banner-bg w-full h-[650px] md:h-[800px] relative">
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-xs text-white uppercase bg-gray-300/20 p-3 rounded-full w-fit">
            💸 Give
          </span>
          <h1 className="w-full text-white mx-auto text-4xl text-center items-center md:text-7xl font-helveticaNowDisplayBold font-extrabold flex flex-col md:items-center md:text-center">
            <span>Your Generosity.</span>
            <span>Our Mission.</span>
            <span>The Gospel.</span>
          </h1>
          <p className="font-thin text-white text-lg max-w-sm">Give towards our mission to reach a billion souls in ten thousand cities with the message of the gospel.</p>
          <div className="flex items-center flex-row gap-4 mt-8">
          <Link href="#">
            <Button
              text="Give now"
              className="w-44 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular hidden md:inline-block"
              variant="outline"
            />
          </Link>
          <Link href="#">
            <Button
              text="Other ways to give"
              className="w-44 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular hidden md:inline-block"
              variant="secondary"
            />
          </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-10">
        {/* <OurJourney /> */}
        {/* <WhatWeDo /> */}
        <WhoWeAre />
        {/* <OurValues /> */}
        {/* <OurProcess />
        <OurTeams /> */}
        <FAQ />
      </div>
    </main>
  );
};

export default page;
