import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="pt-20 mt-20 mx-auto px-1">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-[2px] uppercase font-helveticaNowDisplayRegular">
            What We Do
          </span>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-4xl font-semibold max-w-md mb-6 font-helveticaNowDisplayBold">
              Building a strong brand with our expertise.
            </h2>
            {/* <div>
              <Button
                text="See our services"
                className="px-6 py-6 w-36 text-sm font-medium rounded-full whitespace-nowrap font-helveticaNowDisplayRegular hidden md:inline-block"
                variant="outline"
              />
            </div> */}
          </div>
        </div>
        <div className="space-y-10 mt-10">
          {/* Process Grid */}
          <div className="w-full grid grid-cols-1 gap-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 md:p-12 flex flex-col items-start gap-3 bg-[#5975FF0D] rounded-sm">
                <h4 className="font-medium font-helveticaNowDisplayBold text-xl tracking-wide text-nowrap">
                  Full-service design agency
                </h4>
                <p className="text-[#0C0C0CA3] text-base md:text-lg font-normal font-helveticaNowDisplayRegular">
                  At South Circle, we merge expertise in design, technology, and
                  psychology to craft strategies that drive measurable results.
                  By carefully selecting clients who align with our mission, we
                  focus on delivering distinct, quantifiable outcomes that fuel
                  business growth.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <Image
                    src="/assets/services/bolt.svg"
                    alt="Full Service"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col items-start gap-3 bg-[#FF4A4A0D] rounded-sm">
                <h4 className="font-medium font-helveticaNowDisplayBold text-xl tracking-wide">
                  Design, development and marketing
                </h4>
                <p className="text-[#0C0C0CA3] text-base md:text-lg font-normal font-helveticaNowDisplayRegular">
                  We believe in long-term success, not just short-term wins. Our
                  commitment goes beyond the launch—through continuous
                  refinement and adaptation, we ensure your brand stays relevant
                  and grows sustainably in an ever-evolving landscape.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <Image
                    src="/assets/services/visual.svg"
                    alt="Full Service"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col items-start gap-3 bg-[#0ACC920D] rounded-sm">
                <h4 className="font-medium font-helveticaNowDisplayBold text-xl tracking-wide text-nowrap">
                  Smooth makes us worried
                </h4>
                <p className="text-[#0C0C0CA3] text-base md:text-lg font-normal font-helveticaNowDisplayRegular">
                  We thrive on disruption. At South Circle, we don&apos;t shy
                  away from friction—it&apos;s what fuels our creativity. By
                  embracing challenges and clashing ideas, we provoke the energy
                  needed to spark innovation and create transformative solutions
                  for your business.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <Image
                    src="/assets/services/brand.svg"
                    alt="Full Service"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/services"
          className="py-10 flex items-center justify-center"
        >
          <Button
            text="See our services"
            className="px-6 py-6 w-36 text-sm font-medium rounded-full whitespace-nowrap font-helveticaNowDisplayRegular md:hidden"
            variant="outline"
          />
        </Link>
      </div>
    </div>
  );
};

export default WhoWeAre;
