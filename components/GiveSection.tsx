import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const GiveSection = () => {
  return (
    <section className="relative pt-24 md:mt-24 mx-auto px-4 md:px-10 h-[400px] md:h-[400px] give-bg w-full -bottom-28">
      <div className="absolute inset-0 bg-[#F8EAEA] rounded-3xl bg-give-bg bg-cover shadow-lg bg-center bg-no-repeat h-[320px] pt-12 pl-10 pb-10 max-w-6xl mx-auto z-10">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold font-helveticaNowDisplayBold mb-2">
            Give to Victory Mega Living Church
          </h2>
          <p className="text-xl font-medium mb-8">
            Your generousity keeps blessing lives, thank you for giving.
          </p>
          <div className="flex items-center flex-row gap-4">
            <Link href="/">
              <Button
                text="Give"
                className="w-20 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular"
                variant="outline"
              />
            </Link>
            <Link href="/">
              <Button
                text="Building project"
                className="w-44 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular"
                variant="outline"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveSection;
