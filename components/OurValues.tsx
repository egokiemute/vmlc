import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const OurValues = () => {
  return (
    <section className="pt-16 mt-16 mx-auto px-1">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight tracking-[2px]">
          <span className="text-sm text-gray-400 tracking-wider uppercase font-helveticaNowDisplayRegular">
            Who We Are
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="my-6 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[500px,_1fr]">
          <div className="max-w-sm">
            <h2 className="text-3xl md:text-4xl font-semibold font-helveticaNowDisplayBold">
              Powered by intellect, driven by values.
            </h2>
          </div>
          {/* Services Grid */}
          <div className="gap-8">
            <div>
              <div className="w-full flex items-start text-2xl md:text-xl font-medium font-helveticaNowDisplayRegular mt-12 md:mt-0 mb-8">
                <p>
                  At South Circle, our culture is rooted in collaboration and
                  flexibility. We have a few traditions, like our monthly
                  Thursday brainstorm over coffee, where we catch up and plan
                  our next steps together. We&apos;ve adopted a five-day
                  workweek, with some of us taking Fridays off and others
                  Saturdays—an idea that came from a team discussion. Here,
                  every voice matters, and everyone shares in the success of our
                  projects through commissions. We value flexibility and keep
                  things adaptable. Oh, and we love having friendly friends come
                  visiting the office too.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-helveticaNowDisplayBold font-semibold text-xl whitespace-nowrap">
                    Driven by ambition
                  </h4>
                  <p className="max-w-lg font-helveticaNowDisplayRegular text-[#0C0C0CB0] text-xl">
                    We never settle. We&apos;re on a constant quest to set new
                    benchmarks in design, always aiming higher.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-helveticaNowDisplayBold font-semibold whitespace-nowrap text-xl">
                    Resilient by nature
                  </h4>
                  <p className="max-w-lg font-helveticaNowDisplayRegular text-[#656565] text-xl">
                    Challenges are opportunities. With grit and determination,
                    we tackle obstacles head-on, turning them into stepping
                    stones for greatness.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-helveticaNowDisplayBold font-semibold whitespace-nowrap text-xl">
                    Integrity always
                  </h4>
                  <p className="max-w-lg font-helveticaNowDisplayRegular text-[#0C0C0CB0] text-xl">
                    Honesty is non-negotiable. We deliver outstanding results
                    while being transparent and trustworthy in every project.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-helveticaNowDisplayBold font-semibold whitespace-nowrap text-xl">
                    Genuine interest
                  </h4>
                  <p className="max-w-lg font-helveticaNowDisplayRegular text-[#0C0C0CB0] text-xl">
                    People first. We approach every relationship with empathy,
                    offering nothing but the best in service and connection.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-helveticaNowDisplayBold font-semibold whitespace-nowrap text-xl">
                    Playful spirit
                  </h4>
                  <p className="max-w-lg font-helveticaNowDisplayRegular text-[#0C0C0CB0] text-xl">
                    Curiosity fuels us. At South Circle, we embrace wonder and
                    creativity—it&apos;s how we stay innovative and passionate
                    in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
