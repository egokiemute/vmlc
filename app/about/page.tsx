
import GetInTouch from "@/components/GetInTouch";
// import OurJourney from "@/components/OurJourney";
import OurProcess from "@/components/OurProcess";
import OurTeams from "@/components/OurTeams";
import OurValues from "@/components/OurValues";
import WhatWeDo from "@/components/WhatWeDo";
import { Metadata } from "next";
// import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";
import React from "react";

// app/layout.js or app/page.js
export const metadata: Metadata = {
  title: "About Us | World-Class Brand Design Consultancy",
  description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "About Us | World-Class Brand Design Consultancy",
    description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
    url: "https://southcircle.co",  // Replace with your actual URL
    images: [
      {
        url: "https://southcircle.vercel.app/thumbnail.png", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "South Circle Brand Design Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | World-Class Brand Design Consultancy",
    description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
    images: ["https://southcircle.vercel.app/thumbnail.png"], // Replace with actual image URL
  },
};

const page = () => {
  return (
    <main className="pt-10 mt-28 mx-auto px-4 md:px-10 w-full overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="w-full mx-auto text-4xl text-start items-start md:text-6xl font-helveticaNowDisplayBold font-semibold flex flex-col md:items-center md:text-center">
            <span>Curious about us?</span>
            <span>Here&apos;s the inside scoop.</span>
          </h1>
        </div>
        <Image
          src="/assets/about-banner.svg"
          width={720}
          height={240}
          alt="about-down"
          className="object-contain mt-8"
        />
        <div className="py-24 flex items-end justify-center">
          <p className="font-medium text-start font-helveticaNowDisplayRegular max-w-xl text-2xl md:text-5xl">
            We are not content with just blending in - we are on a mission to
            stand out, with vision to become one of the leading agencies in
            Southern Nigeria.
          </p>
        </div>
      </div>
      {/* <OurJourney /> */}
      <WhatWeDo />
      {/* <WhoWeAre /> */}
      <OurValues />
      <OurProcess />
      <OurTeams />
      <GetInTouch />
    </main>
  );
};

export default page;
