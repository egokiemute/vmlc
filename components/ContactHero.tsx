import React from "react";
const ContactHero = () => {
  return (
    <section className="pt-10 sm:pt-16 md:pt-16">
      <div className="relative mx-auto w-full flex flex-col gap-5 md:gap-10 items-start text-start px-2 md:flex-row md:justify-center md:items-center">
        <div className="w-full max-w-2xl aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/q7ySaIUQqY8?si=1TAEunt7Hm9zEJ-X&autoplay=1"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="max-w-sm px-2 mt-auto flex flex-col gap-4 items-center justify-center text-center">
          <span className="text-xs uppercase bg-gray-300/20 p-3 rounded-full">
            🌍 Sermons
          </span>
          <p className="text-2xl md:text-5xl text-center font-helveticaNowDisplayRegular max-w-sm px-2 mt-auto mb-4">
          Over 200+ Sermons curated for your progress and joy in the faith.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;