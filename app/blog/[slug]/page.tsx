"use client";
import GetInTouch from "@/components/GetInTouch";
import MoreInsights from "@/components/MoreInsights";
import Button from "@/components/ui/Button";
// import { client } from "@/sanity/lib/client";
// import { getDetailPost } from "@/sanity/queries/posts";
// import { default as ImageUrlBuilder } from "@sanity/image-url";
// import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { getDetailRecent } from "@/sanity/queries/recents";

const WorkDetail = ({
  params,
}: {
  params: { slug: string; recent: boolean };
}) => {
  const { slug } = params;

  // Function to handle opening social share links
  const openShareLink = (url: string) => {
    window.open(url, "_blank");
  };

  const twitterUrl = `https://twitter.com/share?url=${encodeURIComponent(
    slug
  )}`;

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    slug
  )}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    slug
  )}`;

  console.log(slug);

  // const work = await getDetailRecent(slug) || await getDetailPost(slug);
  // console.log(work);
  // console.log(work.title);

  return (
    <section className="pt-10 mt-32 mx-auto w-full px-3 md:px-10">
      {/* Hero Section */}
      <div className="flex flex-col items-start justify-start text-start mb-20 mx-auto w-full">
        <div className="flex flex-col items-start justify-start max-w-7xl md:px-0 w-full">
          <div className="flex items-center gap-3 py-5 text-[#0C0C0CB0] text-sm md:text-sm text-nowrap font-helveticaNowDisplayRegular tracking-[2px]">
            <p>BRANDING</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p>AUGUST 14, 2024.</p>
          </div>
          <div className="w-full text-5xl md:text-[98px] font-helveticaNowDisplayBold font-bold flex gap-6 items-center justify-start text-start whitespace-nowrap">
            <span>Art is dead.</span>
            {/* <div className="p-2 md:p-5 rounded-full border-[1px] border-black w-fit -rotate-45">
              <Image
                src="/assets/arrow-down.svg"
                width={32}
                height={32}
                alt="arrow-down"
                className="object-contain w-6 h-6 md:w-10 md:h-10 animate-bounce rotate-6"
              />
            </div> */}
          </div>
        </div>
        <div className="w-full py-8">
          <Image
            src="/assets/blogs/art-is-dead.png"
            width={1000}
            height={400}
            alt="imagine more"
            className="object-cover h-[380px] md:h-[720px] rounded-3xl w-[100vw]"
          />
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-[480px,_1fr]">
        {/* LEFT HAND SIDE */}
        <div className="md:flex flex-col gap-4 hidden">
          <h2 className="text-lg font-medium mb-4 font-helveticaNowDisplayRegular uppercase text-gray-400 tracking-wider">
            Share this news
          </h2>
          <button
            onClick={() => openShareLink(twitterUrl)}
            className="p-2 border border-[#2d2d2d] rounded-full flex items-center justify-start w-fit gap-4"
          >
            <Image src="/assets/x.svg" width={26} height={26} alt="X" />
            <p className="text-lg font-helveticaNowDisplayRegular pr-2">Twitter</p>
          </button>
          <button
            onClick={() => openShareLink(linkedInUrl)}
            className="p-2 border border-[#2d2d2d] rounded-full flex items-center justify-start w-fit gap-4"
          >
            <Image src="/assets/linkedin.svg" width={26} height={26} alt="X" />
            <p className="text-lg font-helveticaNowDisplayRegular pr-2">LinkedIn</p>
          </button>
          <button
            onClick={() => openShareLink(facebookUrl)}
            className="p-2 border border-[#2d2d2d] rounded-full flex items-center justify-start w-fit gap-4"
          >
            <Image src="/assets/facebook.svg" width={26} height={26} alt="X" />
            <p className="text-lg font-helveticaNowDisplayRegular pr-2">Facebook</p>
          </button>
        </div>

        {/* RIGHT HAND SIDE */}
        <div className="flex flex-col items-start">
          <h1 className="font-helveticaNowDisplayRegular font-medium text-2xl md:text-3xl">
          People often say, &quot;I love what you do, but I&apos;m just not the artsy type&quot; or, &quot;I can&apos;t draw to save my life.&quot; It&apos;s almost like there&apos;s this invisible standard everyone thinks they need to reach in order to be considered an artist. But that&apos;s a misconception. Art isn&apos;t about skill alone; it&apos;s about expression. And guess what? Life itself is art.
          </h1>
          <div className="space-y-6 mt-6 mb-10">
            <div className="space-y-4 pb-12">
              <p className="text-base md:text-xl font-medium text-[#0C0C0CB0] font-helveticaNowDisplayRegular tracking-wide">
              I get it, though. With AI-generated art becoming a hot topic, it can sometimes feel like there&apos;s a predefined benchmark for what qualifies as &quot;good art.&quot; And if what you create doesn&apos;t measure up, it&apos;s dismissed. But that&apos;s not how it works. Art is self-expression in its purest form, and when it&apos;s authentic, it has the power to build connections and a sense of belonging. When you express something real—whether it&apos;s a feeling, an experience, or even a fleeting thought—someone out there will resonate with it.
              </p>
              <p className="text-base md:text-xl font-medium text-[#0C0C0CB0] font-helveticaNowDisplayRegular tracking-wide">
              Think about it. You see a piece of art that mirrors a struggle or joy you&apos;ve experienced. It&apos;s an instant bond, right? You realize, &quot;I&apos;m not alone; someone else gets it.&quot; In a world that often urges us to chase perfection (thanks, to social media), art can be a comforting reminder that it&apos;s okay to be real and flawed. It&apos;s okay to express ourselves without worrying about meeting any standards.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/assets/blogs/art-two.png"
                width={2000}
                height={1000}
                alt="team image"
                className="object-cover h-[240px] rounded-3xl w-[100vw]"
              />
            </div>
          </div>
          <div className="space-y-6 mt-6">
            <div className="space-y-4 pb-12">
              <p className="text-base md:text-xl font-medium text-[#0C0C0CB0] font-helveticaNowDisplayRegular tracking-wide">
              The reality is, we&apos;re all human before we&apos;re anything else. When we&apos;re not pressured to meet some imaginary artistic ideal, we&apos;re free to express our experiences as they are—raw, unpolished, and full of meaning. Feeling down and all you want to do is draw a frown inside a circle? Do it. That&apos;s your art. You may not even want to define it with words—let the viewer interpret it. That&apos;s the beauty of art; it&apos;s limitless.
              </p>
              <p className="text-base md:text-xl mt-4 font-medium text-[#0C0C0CB0] font-helveticaNowDisplayRegular tracking-wide">
              Humans are wired to connect. So, when we see something genuine, something we relate to, we form a bond. It makes life feel less lonely. Art does that—it&apos;s a bridge, not a finish line. It&apos;s about shaping perceptions, yes, but it&apos;s also about showing that life isn&apos;t always about happiness or perfection. Its messy, nuanced, and complex. And that&apos;s okay. When we embrace this reality, we start to live without fear of judgment.
              </p>
            </div>
          </div>
          <div className="space-y-6 mt-6 mb-10">
            <div className="space-y-4">
              <p className="text-base md:text-xl font-medium text-[#0C0C0CB0] font-helveticaNowDisplayRegular tracking-wide">
              At the end of the day, art is a way of choosing to truly live, not just exist. It&apos;s not the destination, it&apos;s the way we choose to see and express life&apos;s journey.
              </p>
            </div>
            <div className="w-full pt-16 flex items-start">
              <div className="flex flex-col gap-3 items-start max-w-md">
                <p className="font-helveticaNowDisplayRegular uppercase text-[#0C0C0CB0]">Written by:</p>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Link
                      href="https://www.linkedin.com/in/oke-omorohwovo-41089515b/"
                      className="font-helveticaNowDisplayBold font-semibold text-xl"
                    >
                      Oke Omorohwovo
                    </Link>
                    <p className="text-[#0C0C0CB0] font-helveticaNowDisplayRegular">
                    COO & Partner, South Circle
                    </p>
                  </div>
                </div>
                <div className="md:hidden flex flex-col gap-2 mt-6">
                  <h2 className="text-base font-medium font-helveticaNowDisplayRegular uppercase text-[#0C0C0CB0] tracking-wider">
                    Share this news
                  </h2>
                  <div className="w-full flex items-center justify-between gap-2">
                    <button
                      onClick={() => openShareLink(twitterUrl)}
                      className="p-2 md:p-4 border border-[#2d2d2d] rounded-full text-nowrap flex items-center justify-start w-fit gap-2 md:gap-4"
                    >
                      <Image
                        src="/assets/x.svg"
                        width={20}
                        height={20}
                        alt="X"
                      />
                      <p className="text-sm font-helveticaNowDisplayRegular pr-2">Twitter</p>
                    </button>
                    <button
                      onClick={() => openShareLink(linkedInUrl)}
                      className="p-2 md:p-4 border border-[#2d2d2d] rounded-full text-nowrap flex items-center justify-start w-fit gap-2 md:gap-4"
                    >
                      <Image
                        src="/assets/linkedin.svg"
                        width={20}
                        height={20}
                        alt="X"
                      />
                      <p className="text-sm font-helveticaNowDisplayRegular pr-2">
                        LinkedIn
                      </p>
                    </button>
                    <button
                      onClick={() => openShareLink(facebookUrl)}
                      className="p-2 md:p-4 border border-[#2d2d2d] rounded-full text-nowrap flex items-center justify-start w-fit gap-2 md:gap-4"
                    >
                      <Image
                        src="/assets/facebook.svg"
                        width={20}
                        height={20}
                        alt="X"
                      />
                      <p className="text-sm font-helveticaNowDisplayRegular pr-2">
                        Facebook
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE INSIGHTS */}
      {/* <MoreInsights /> */}

      {/* GET IN TOUCH */}
      <GetInTouch />
    </section>
  );
};

export default WorkDetail;
