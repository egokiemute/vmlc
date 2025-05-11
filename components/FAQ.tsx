"use client";
import Image from "next/image";
import React, { useState } from "react";

interface FAQ {
  question?: string;
  answer?: string;
}

const faqs: FAQ[] = [
  {
    question: "How is my donation used?",
    answer:
      "Your donation supports the mission of Celebration Church International to spread the gospel and make disciples around the world. Contributions go towards ministry programs, church operations, cell churches, community outreach, and special initiatives that help us bring transformation and impact to individuals and communities.",
  },
  {
    question: "Can I choose where my donation goes?",
    answer:
      "Yes! We provide the option to direct your donation towards specific funds or projects, such as missions, church plants, cell churches, or outreach initiatives. During the giving process, you can select the area that resonates most with you, allowing you to support what matters most.",
  },
  {
    question: "Are there other ways to give besides online?",
    answer:
      "Absolutely! In addition to online giving, you can also contribute through bank transfers, checks, or in-person at any of our church locations. Our team can provide more details to help you give in the way that’s most convenient for you. Please feel free to contact us for more information.",
  },
  {
    question: "Is my payment information secured?",
    answer:
      "Yes, protecting your financial information is our top priority. Our online giving platform uses secure encryption and trusted payment processors to ensure that your data is safe. We are committed to maintaining the highest standards of security for all transactions. Rest assured that your payment information is handled with the utmost care and confidentiality.",
  },
  {
    question: "Can I give to support a specific project or initiative?",
    answer:
      "Yes, you can! We offers designated giving options, allowing you to support specific projects or initiatives within the church. Whether you’re passionate about missions, building projects, or outreach, you can choose to invest in the initiatives closest to your heart.",
  },
  {
    question: "Who do I contact with my questions?",
    answer:
      "If you have any questions about giving, please reach out to our Giving Team at givings@vomg.org or call us at +2349019434343. We’re here to assist and ensure that your giving experience at Omega Living Bridge Tabernacle is seamless and meaningful.",
  }
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
            <h1 className="font-helveticaNowDisplayBold text-4xl sm:text-6xl md:text-[60px] font-bold tracking-wide text-start">
              Have questions?
              <br className="hidden md:inline-block"/>
              We have answers.
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
