import AllMinistriesSermons from "@/components/AllMinistriesSermons";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <>
      <main className="pt-10 mt-24 mx-auto px-2 md:px-10 w-full">
        <ContactHero />
        <AllMinistriesSermons />
      </main>
      <Footer showFooter={true} />
    </>
  );
};

export default page;
