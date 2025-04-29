"use client";
import AllMinistries from "@/components/AllMinistries";
// import GetInTouch from "@/components/GetInTouch";
import GiveSection from "@/components/GiveSection";
import Hero from "@/components/Hero";
// import Insights from "@/components/Insights";
// import OurServices from "@/components/OurServices";
// import SelectedWorks from "@/components/SelectedWorks";
import SermonsBanner from "@/components/SermonsBanner";
import WelcomeToChurch from "@/components/WelcomeToChurch";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // if (!loading) {
  //   return (
  //     <section className="container pb-16 pt-10 sm:pt-20 md:pt-28 animate-pulse">
  //       <div className="max-w-8xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col gap-5 items-start justify-start">
  //         <div className="h-12 sm:h-14 md:h-16 bg-gray-300 rounded w-3/4"></div>
  //         <div className="h-4 md:h-6 bg-gray-300 rounded w-2/3 mt-2"></div>
  //       </div>
  //       <div className="flex flex-col items-start md:flex-row md:items-center gap-6 pt-8">
  //         <div className="px-8 md:px-12 py-4 bg-gray-300 rounded w-32 md:w-40"></div>
  //         <div className="h-4 md:h-6 bg-gray-300 rounded w-24 md:w-32 mt-2 md:mt-0"></div>
  //       </div>
  //     </section>
  //   );
  // }

  // // Transform worksData to fit the PreviousWorks component's expected props
  // const recentWorks = previousWork.slice(0, 3).map(work => ({
  //   title: work.title,
  //   imageUrl: work.mediaType === "image" || work.mediaType === "webp" ? work.imageUrl : undefined,
  //   mediaSrc: work.mediaType === "video" ? work.mediaSrc : undefined,
  //   mediaType: work.mediaType,
  //   span: true,
  //   slug: work.slug?.current
  // }));

  return (
    <>
      <Hero />
      <WelcomeToChurch />
      <SermonsBanner />
      {/* <SelectedWorks /> */}
      {/* <OurServices /> */}
      {/* <Insights /> */}
      {/* <GetInTouch /> */}
      <AllMinistries />
      <GiveSection />
    </>
  );
}
