"use client";
import GetInTouch from "@/components/GetInTouch";
import OurProcess from "@/components/OurProcess";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";
import React from "react";

// interface Service {
//   id?: number;
//   title: string;
//   details?: string;
//   serviceImg?: string;
//   serviceStyle?: string;
//   services?: Array<Service>;
// }

// const services: Service[] = [
//   {
//     id: 1,
//     title: "Branding",
//     serviceImg: "/assets/services/branding-service.svg",
//     serviceStyle: "bg-[#5975FF0D]",
//     services: [
//       { id: 11, title: "Naming", details: "-" },
//       { id: 12, title: "Visual identity", details: "+" },
//       { id: 13, title: "Verbal design", details: "+" },
//       { id: 14, title: "Sound & motion design", details: "+" },
//       { id: 15, title: "Typography", details: "+" },
//       { id: 16, title: "Illustrations", details: "+" },
//       { id: 17, title: "Brand guidelines", details: "+" }
//     ]
//   },
//   {
//     id: 2,
//     title: "Strategy",
//     serviceImg: "/assets/services/strategy-service.svg",
//     serviceStyle: "bg-[#FF4A4A0D]",
//     services: [
//       { id: 21, title: "Product discovery and strategy", details: "+" },
//       { id: 22, title: "Positioning and alignment", details: "+" },
//       { id: 23, title: "Market research and insights", details: "+" },
//       { id: 24, title: "Brand positioning", details: "+" },
//       { id: 25, title: "Brand architecture and narrative", details: "+" }
//     ]
//   },
//   {
//     id: 3,
//     title: "Marketing",
//     serviceImg: "/assets/services/marketing-service.svg",
//     serviceStyle: "bg-[#0ACC920D]",
//     services: [
//       { id: 21, title: "Social media campaignr", details: "+" },
//       { id: 22, title: "Search engine optimization", details: "+" },
//       { id: 23, title: "Email marketing", details: "+" },
//       { id: 24, title: "Billboard campaign", details: "+" },
//       { id: 25, title: "TV and display ad", details: "+" },
//       { id: 26, title: "Broadcasting", details: "+" },
//       { id: 26, title: "PR and press release", details: "+" },
//     ]
//   },
//   {
//     id: 4,
//     title: "Product Design",
//     serviceImg: "/assets/services/product-design.svg",
//     serviceStyle: "bg-[#FFC02E0D]",
//     services: [
//       { id: 21, title: "User research & insights", details: "+" },
//       { id: 22, title: "Concept development", details: "+" },
//       { id: 23, title: "UI/UX design", details: "+" },
//       { id: 24, title: "Design systems & guidelines", details: "+" },
//       { id: 25, title: "Design consultation", details: "+" }
//     ]
//   },
//   {
//     id: 5,
//     title: "Development",
//     serviceImg: "/assets/services/development-service.svg",
//     serviceStyle: "bg-[#8F00FF0D]",
//     services: [
//       { id: 21, title: "Mobile app development", details: "+" },
//       { id: 22, title: "Web development", details: "+" },
//       { id: 23, title: "Front-end development", details: "+" },
//       { id: 24, title: "Back-end development", details: "+" },
//       { id: 25, title: "Maintenance and support", details: "+" }
//     ]
//   }
// ];

const page = () => {
  return (
    <section className="pt-10 mt-32 mx-auto px-4 md:px-10 w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mx-auto w-full">
        <div className="relative w-full flex flex-col items-center gap-10 md:gap-20 justify-center max-w-7xl">
          <p className="absolute max-w-xs text-2xl text-start font-helveticaNowDisplayRegular left-10 top-20 hidden md:inline-block">
            From innovative strategies to striking designs, we turn your vision
            into.
          </p>
          <h1 className="text-6xl md:text-[160px] font-baseneue flex flex-col items-center text-center uppercase whitespace-nowrap">
            <span>Empowering</span>
            <span>your brand&apos;s next</span>
            <span>big move.</span>
          </h1>
          <p className="max-w-sm text-2xl text-center font-helveticaNowDisplayRegular md:hidden">
            From innovative strategies to striking designs, we turn your vision
            into a powerful reality. Explore how our expertise drives your
            brand&apos;s success.
          </p>
          <div className="p-5 rounded-full border-[1px] border-black w-fit mt-10">
            <Image
              src="/assets/arrow-down.svg"
              width={32}
              height={32}
              alt="arrow-down"
              className="object-contain animate-bounce"
            />
          </div>
          <p className="absolute max-w-sm text-2xl text-start font-helveticaNowDisplayRegular right-4 bottom-40 hidden md:inline-block">
            From innovative strategies to striking designs, we turn your vision
            into a powerful reality. Explore how our expertise drives your
            brand&apos;s success.
          </p>
          <p className="max-w-sm text-2xl text-center font-helveticaNowDisplayRegular md:hidden">
            From innovative strategies to striking designs, we turn your vision
            into.
          </p>
        </div>
      </div>
      <WhatWeDo />
      <OurProcess />
      <GetInTouch />
    </section>
  );
};

export default page;
