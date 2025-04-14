import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomLink from "./ui/Link";

const RecentInsights = () => {
  return (
    <section className="pt-24 md:pt-32 md:mt-32 mx-auto px-2">
      <div className="max-w-8xl w-full">
        <div className="flex flex-col gap-4 w-full font-helveticaNowDisplayRegular">
          <span className="text-sm text-gray-400 tracking-[2px] font-helveticaNowDisplayRegular uppercase">
            Recent Insight
          </span>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="w-full flex flex-col md:flex-row align-top gap-28 mt-10">
            <div className="w-full">
              <Link href="/blog/art-is-dead">
                <div className="w-full flex flex-col md:flex-row gap-4 md:gap-20 items-center">
                  <div className="relative rounded-2xl overflow-hidden h-[320px]">
                    <Image
                      src="/assets/blogs/art-is-dead.png"
                      alt="Imagine more"
                      className="object-cover hover:scale-110 transition-all ease-in-out duration-500"
                      width={700}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-6 md:gap-16 md:px-3">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-sm text-[#0C0C0CB0] font-helveticaNowDisplayRegular uppercase">
                        September 24, 2024
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold font-helveticaNowDisplayBold mt-3">
                        Art is Dead.
                      </h3>
                      <p className="text-base md:text-lg text-[#0C0C0CB0] font-helveticaNowDisplayRegular max-w-2xl">
                        People often say, &quot;I love what you do, but I&apos;m
                        just not the artsy type&quot; or, &quot;I can&apos;t
                        draw to save my life.&quot; It&apos;s almost like
                        there&apos;s this invisible standard everyone...
                      </p>
                    </div>
                    <CustomLink
                      href="/blog/art-is-dead"
                      animate={true}
                      text="Read blog"
                      className={
                        "text-base border-b-[0.2px] border-[#919191b0] font-medium font-helveticaNowDisplayRegular"
                      }
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentInsights;
