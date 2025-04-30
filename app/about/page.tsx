// import GetInTouch from "@/components/GetInTouch";
// import OurJourney from "@/components/OurJourney";
import OurProcess from "@/components/OurProcess";
import OurTeams from "@/components/OurTeams";
// import OurValues from "@/components/OurValues";
// import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
// import { Metadata } from "next";
// import WhoWeAre from "@/components/WhoWeAre";
// import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto about-banner-bg w-full h-[650px] md:h-[800px] relative">
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-xs text-white uppercase bg-gray-300/20 p-3 rounded-full w-fit">
            🙌🏼 The Family
          </span>
          <h1 className="w-full text-white mx-auto text-5xl text-center items-center md:text-7xl font-helveticaNowDisplayBold font-extrabold flex flex-col md:items-center md:text-center">
            <span>In Christ, For</span>
            <span>Christ, With</span>
            <span>Joy.</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-10">
        {/* <OurJourney /> */}
        {/* <WhatWeDo /> */}
        <WhoWeAre />
        {/* <OurValues /> */}
        <OurProcess />
        <OurTeams />
      </div>
    </main>
  );
};

export default page;
