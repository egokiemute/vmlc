"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Button from "./ui/Button";
import Link from "next/link";

const OurServices = () => {
  const services = [
    {
      desc: "Craft clear, actionable strategies that drive brand success and resonate with your target audience.",
      title: "Brand Strategy",
      imageSrc: "/assets/services/brand.svg",
      style: "p-10 flex flex-col items-start gap-3 bg-[#5975FF0D] rounded-sm",
    },
    {
      desc: "Design compelling visual elements that represent your brand’s essence and stand out in the market.",
      title: "Visual Identity",
      imageSrc: "/assets/services/visual.svg",
      style: "p-10 flex flex-col items-start gap-3 bg-[#FF4A4A0D] rounded-sm",
    },
    {
      desc: "Develop integrated marketing strategies to enhance visibility, engage your audience, and drive growth.",
      title: "Marketing",
      imageSrc: "/assets/services/marketing.svg",
      style: "p-10 flex flex-col items-start gap-3 bg-[#FFC02E0D] rounded-sm",
    },
    {
      desc: "Build responsive, user-friendly websites that effectively showcase your brand and achieve your business goals.",
      title: "Development",
      imageSrc: "/assets/services/development.svg",
      style: "p-10 flex flex-col items-start gap-3 bg-[#0ACC920D] rounded-sm",
    },
    // Add more testimonials here
  ];

  // const [currentSlide, setCurrentSlide] = useState(0);

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  // };

  // const handlePreviousSlide = () => {
  //   setCurrentSlide(
  //     (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  return (
    <section className="pt-14 md:pt-14 md:mt-14 mx-auto px-4 md:px-10">
      <div className="max-w-8xl w-full">
        <div className="flex flex-col gap-4 w-full font-helveticaNowDisplayRegular">
          <span className="text-sm text-gray-400 tracking-[2px] font-helveticaNowDisplayRegular uppercase">
            Our Services
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="w-full flex flex-col md:flex-row align-top md:gap-40 mt-10">
          <div className="flex flex-col items-start gap-6">
            <div className="space-y-4 max-w-lg">
              <p className="text-[#0C0C0C] font-normal font-helveticaNowDisplayRegular text-2xl text-start">
                We&apos;re all about flipping the script <br />
                and making brands that don&apos;t just <br />
                show up.
              </p>
              <p className="text-[#0C0C0C] font-normal font-helveticaNowDisplayRegular text-2xl text-start">
                We mix strategy with creativity to <br />
                make sure your brand hits different <br />
                and stays unforgettable.
              </p>
            </div>
            <div>
              <Link href="/services">
                <Button
                  text="See our services"
                  className="w-40 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular hidden md:inline-block"
                  variant="outline"
                />
              </Link>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div className={service.style} key={idx}>
                <h4 className="font-medium font-helveticaNowDisplayBold text-lg tracking-tight">
                  {service.title}
                </h4>
                <p className="text-[#0C0C0CA3] text-base font-normal font-helveticaNowDisplayRegular">
                  {service.desc}
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/services"
          className="py-10 flex items-center justify-center"
        >
          <Button
            text="See our services"
            className="w-40 h-12 py-4 text-sm font-medium rounded-full whitespace-nowrap font-helveticaNowDisplayRegular md:hidden"
            variant="outline"
          />
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
