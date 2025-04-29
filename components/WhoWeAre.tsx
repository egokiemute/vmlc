import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="pt-20 mt-20 mx-auto px-1">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-xs uppercase bg-gray-300/20 p-3 rounded-full w-fit">
            🙌🏼 Our Approach
          </span>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-3xl font-semibold max-w-md mb-6 font-helveticaNowDisplayBold">
              Celebrating endless life in Christ Jesus demands that you:
            </h2>
          </div>
        </div>
        <div className="space-y-10 mt-10">
          {/* Process Grid */}
          <div className="w-full grid grid-cols-1 gap-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 md:p-12 flex flex-col items-start gap-3 bg-[#5975FF0D] rounded-sm">
                <h4 className="font-medium font-helveticaNowDisplayBold text-xl tracking-wide text-nowrap">
                  Know it
                </h4>
                <p className="text-[#0C0C0CA3] text-base md:text-lg font-normal font-helveticaNowDisplayRegular">
                  At Victory Mega Living Church, the word of God is emphasized
                  to ensure every member knows and understands the lordship of
                  Jesus, and experiences progress and joy in the faith.
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
                  Live it
                </h4>
                <p className="text-[#0C0C0CA3] text-base md:text-lg font-normal font-helveticaNowDisplayRegular">
                  Your life should reflect the death and resurrection of Jesus
                  Christ every single day. It&apos;s not enough to simply know
                  that Jesus is Lord—you must live out that truth in everything
                  you do.
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
                  Tell it
                </h4>
                <p className="text-[#0C0C0CA3] text-base md:text-lg font-normal font-helveticaNowDisplayRegular">
                  Celebrating the finished work of Jesus means sharing it with
                  the world. We are called to boldly proclaim His love and grace
                  to as many people as we can.
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
