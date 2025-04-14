import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="py-32 mb-40 mt-40 mx-auto px-10 max-w-full w-full">
      <div className="max-w-8xl w-full flex items-center justify-center">
        <div className="flex flex-col gap-8 md:gap-16 items-center">
          <p className="space-x-2 md:flex md:flex-col text-center gap-1 items-center font-helveticaNowDisplayBold font-semibold text-4xl md:text-6xl px-2">
            <span>Have a project in mind?</span>
            <span>Let&apos;s make it happen.</span>
          </p>
          <Link href="/contact">
            <Button
              text="Get in touch"
              className="px-40 md:px-80 py-20 md:py-36 w-full rounded-full font-medium font-helveticaNowDisplayRegular text-4xl md:text-5xl border-2 whitespace-nowrap mx-auto"
              variant="outline"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
