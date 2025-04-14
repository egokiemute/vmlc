"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

interface Service {
  title?: string;
  answer?: string;
  question?: string;
  serviceImg?: string;
  serviceStyle?: string;
  services?: Array<Service>;
}

const services: Service[] = [
  {
    title: "Branding",
    serviceImg: "/assets/services/branding-service.svg",
    serviceStyle: "bg-[#0C0C0C05]",
    services: [
      {
        question: "Naming",
        answer:
          "We create memorable and meaningful names that capture the essence of your brand, aligning with your mission and values.",
      },
      {
        question: "Visual identity",
        answer:
          "Our design team crafts visual elements—logos, colour palettes, and more—that reflect your brand's personality and vision.",
      },
      {
        question: "Verbal design",
        answer:
          "We refine your brand's voice through tailored messaging and tone, ensuring consistency in communication.",
      },
      {
        question: "Sound & motion design",
        answer:
          "We integrate sound and motion into your brand experience, enhancing emotional connections with your audience.",
      },
      {
        question: "Typography",
        answer:
          "Our typography solutions enhance readability and visual appeal, aligning with your brand identity.",
      },
      {
        question: "Illustrations",
        answer:
          "Unique illustrations add personality and depth to your branding, making it more relatable and memorable.",
      },
      {
        question: "Brand guidelines",
        answer:
          "We compile all brand elements into a comprehensive brand book, ensuring consistency across all communications and empowering your team.",
      },
    ],
  },
  {
    title: "Strategy",
    serviceImg: "/assets/services/strategy-service.svg",
    serviceStyle: "bg-[#0C0C0C05]",
    services: [
      {
        question: "Product Discovery and Strategy",
        answer:
          "We employ strategic user research to deeply understand your audience's problems and needs.",
      },
      {
        question: "Positioning and Alignment",
        answer:
          "Our team helps position your brand effectively in the market, ensuring alignment with your values and goals.",
      },
      {
        question: "Market Research and Insights",
        answer:
          "In-depth market research informs your brand strategy and positioning.",
      },
      {
        question: "Brand Positioning",
        answer:
          "We develop clear brand positioning to differentiate you from competitors.",
      },
      {
        question: "Brand Architecture and Narrative",
        answer:
          "We organize your brand's portfolio and narrative for clarity and impact.",
      },
    ],
  },
  {
    title: "Marketing",
    serviceImg: "/assets/services/marketing-service.svg",
    serviceStyle: "bg-[#0C0C0C05]",
    services: [
      {
        question: "Social Media Campaign",
        answer:
          "We create tailored social media campaigns that amplify your brand's voice and connect with your audience.",
      },
      {
        question: "Search Engine Optimization",
        answer:
          "Our SEO strategies enhance your online visibility and drive organic traffic to your website.",
      },
      {
        question: "Email Marketing",
        answer:
          "We design personalized email campaigns that nurture leads and drive customer engagement.",
      },
      {
        question: "Billboard Campaign",
        answer:
          "Our striking billboard designs grab attention and elevate brand awareness in high-traffic areas.",
      },
      {
        question: "TV and Display Ad",
        answer:
          "We create captivating TV and display ads that communicate your brand's message effectively.",
      },
      {
        question: "Broadcasting",
        answer:
          "Our broadcasting strategies ensure your message is heard across multiple channels.",
      },
      {
        question: "PR and Press release",
        answer:
          "We manage your public relations to shape perceptions and maintain a positive brand image.",
      },
    ],
  },
  {
    title: "Product Design",
    serviceImg: "/assets/services/product-design.svg",
    serviceStyle: "bg-[#0C0C0C05]",
    services: [
      {
        question: "User Research & Insights",
        answer:
          "We conduct thorough user research to gain deep insights into user behaviors, preferences, and pain points.",
      },
      {
        question: "Concept Development",
        answer:
          "Our team collaborates with you to develop innovative concepts that solve real user problems.",
      },
      {
        question: "UI/UX Design",
        answer:
          "We design user interfaces and experiences that seamlessly blend functionality with aesthetic appeal.",
      },
      {
        question: "Design Systems & Guidelines",
        answer:
          "We create comprehensive design systems that ensure consistency across all platforms and touchpoints.",
      },
      {
        question: "Design Consultation",
        answer:
          "Our design consultation services provide expert guidance to refine your design approach and strategy.",
      },
    ],
  },
  {
    title: "Development",
    serviceImg: "/assets/services/development-service.svg",
    serviceStyle: "bg-[#0C0C0C05]",
    services: [
      {
        question: "Mobile App Development",
        answer:
          "We design and develop mobile applications that offer exceptional user experiences across all devices.",
      },
      {
        question: "Web Development",
        answer:
          "Our web development services create responsive websites that effectively showcase your brand and meet your business goals.",
      },
      {
        question: "Frontend Development",
        answer:
          "We focus on crafting intuitive user interfaces that enhance user interaction and experience.",
      },
      {
        question: "Backend Development",
        answer:
          "Our back-end development ensures that your applications run smoothly and efficiently, managing data and server interactions.",
      },
      {
        question: "Maintenance and Support",
        answer:
          "We provide ongoing maintenance and support to ensure your digital products remain up-to-date and perform optimally.",
      },
    ],
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-32 mt-32 mx-auto w-full">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 uppercase font-helveticaNowDisplayRegular tracking-[2px]">
            What We Do
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="mt-10 w-full grid grid-cols-1">
          {/* Left Column - Title and Button */}
          <div className="max-w-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold max-w-md mb-6 font-helveticaNowDisplayBold">
              Building a strong brand with our expertise.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <div className="mt-8 md:mt-4" key={idx}>
                <div
                  className={`w-full h-[480px] flex flex-col items-start justify-center p-10 rounded-2xl border-[1px] border-[#0C0C0C1A] ${service.serviceStyle}`}
                >
                  <Image
                    src={service.serviceImg || ""}
                    width={80}
                    height={80}
                    alt={service.title || "Service image"}
                    className="grayscale"
                  />
                
                <div className="flex flex-col gap-8 mt-4 md:mt-0 w-full items-start justify-between py-4 md:pt-0">
                  <h3 className="text-2xl font-semibold tracking-[1px] font-helveticaNowDisplayBold md:mt-6">
                    {service.title}
                  </h3>
                  <div className="space-y-2 w-full md:max-w-3xl md:w-[820px]">
                    {service?.services &&
                      service?.services.map((faq, index) => (
                        <div key={index} className="">
                          <div
                            className="flex justify-between items-center w-full text-left text-[#0C0C0CB0] text-xl font-medium font-helveticaNowDisplayRegular"
                          >
                            {faq.question}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
