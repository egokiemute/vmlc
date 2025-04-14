"use client";
import Image from "next/image";
import React, { useState } from "react";

interface FAQ {
  question?: string;
  answer?: string;
}

const faqs: FAQ[] = [
  {
    question: "How do I start a project with South Circle?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
  {
    question: "What services does South Circle offer?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
  {
    question: "What industries does South Circle specialize in?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
  {
    question: "What you can expect from a project?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
  {
    question: "What is the typical timeline of a project?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
  {
    question: "How does South Circle approach client collaboration?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
  {
    question: "How is pricing determined for your services?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
  {
    question: "What payment method do you accept?",
    answer:
      "Starting a project with South Circle is simple. First, reach out to us through our contact form or give us a call. We'll set up an initial consultation to understand your needs, goals, and vision. From there, we'll develop a tailored proposal outlining our approach, timeline, and next steps. Once everything is aligned, we'll kick off the project and begin bringing your ideas to life!",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 mb-40 mx-auto px-2">
      <div className="max-w-8xl w-full flex items-center justify-center mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="flex flex-col gap-5">
            <p className="font-helveticaNowDisplayRegular text-gray-400 tracking-[2px] text-lg">
              FAQ
            </p>
            <h1 className="font-helveticaNowDisplayBold text-4xl sm:text-7xl md:text-[82px] font-bold tracking-wide text-start">
              Find the{" "}
              <br className="hidden md:inline-block"/>
              clarity you
              <br />
              need here.
            </h1>
          </div>
          <div className="flex w-full items-end ml-auto py-4">
            <div className="space-y-6 divide-y-[1px] divide-gray-300 max-w-2xl w-full">
              {faqs.map((faq, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium py-4 font-helveticaNowDisplayBold"
                  >
                    <p className="w-[200px] md:w-full text-xl md:text-2xl font-semibold">{faq.question}</p>
                    {activeIndex === index ? (
                      <div className="w-14 h-14 flex items-center justify-center border-[1px] border-gray-400 rounded-full">
                        <Image
                          src="/assets/minus.svg"
                          width={20}
                          height={20}
                          alt="plus"
                        />
                      </div>
                    ) : (
                      <div className="p-4 flex items-center justify-center border-[1px] border-gray-400 rounded-full">
                        <Image
                          src="/assets/plus.svg"
                          width={20}
                          height={20}
                          alt="minus"
                        />
                      </div>
                    )}
                  </button>
                  {activeIndex === index && (
                    <p className="mt-2 text-base md:text-lg font-medium text-[#0C0C0CB0] font-helveticaNowDisplayRegular">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
