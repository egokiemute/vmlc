import Image from "next/image";
import React from "react";
import CountUp from "./ui/CountUp";

const OurJourney = () => {
  return (
    <section className="py-40 mx-auto px-1">
      <div className="max-w-8xl w-full mx-auto">
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-20 text-center">
          <Image
            src="/assets/team/groupOne.png"
            alt="group team one"
            width={800}
            height={440}
            className="object-cover "
          />
          <Image
            src="/assets/team/groupTwo.png"
            alt="group team two"
            width={540}
            height={400}
            className="object-cover"
          />
        </div> */}
        {/* <div className="py-24 flex items-end justify-center">
          <p className="font-medium font-helveticaNowDisplayBold max-w-xl text-4xl md:text-5xl">
          With a clear vision and bold ambition, we&apos;re on a mission to redefine creativity and innovation. Our goal? To become one of the leading agencies in Southern Nigeria, delivering exceptional results that set new industry standards.
          </p>
        </div> */}
        <div className="flex items-center justify-center w-full mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-40 w-full">
            <div className="flex flex-col items-start border-b-[2px] border-gray-400">
              <p className="font-helveticaNowDisplayRegular text-xl text-gray-400">Members</p>
              <CountUp begin={0} amount={5} plus="" duration={2000} />
            </div>
            <div className="flex flex-col items-start border-b-[2px] border-gray-400">
              <p className="font-helveticaNowDisplayRegular text-xl text-gray-400">Office</p>
              <CountUp begin={0} amount={1} plus="" duration={200} />
            </div>
            <div className="flex flex-col items-start border-b-[2px] border-gray-400">
              <p className="font-helveticaNowDisplayRegular text-xl text-gray-400">Projects</p>
              <CountUp begin={false} amount={20} plus="+" duration={100} />
            </div>
            <div className="flex flex-col items-start border-b-[2px] border-gray-400">
              <p className="font-helveticaNowDisplayRegular text-xl text-gray-400">Years</p>
              <CountUp begin={0} amount={2} plus="" duration={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
