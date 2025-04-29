
// import CallUsNow from "@/components/CallUsNow";
// import ContactForm from "@/components/ContactForm";
import AllMinistriesSermons from "@/components/AllMinistriesSermons";
import ContactHero from "@/components/ContactHero";
import FAQ from "@/components/FAQ";
import React from "react";

const page = () => {
  return (
    <main className="pt-10 mt-24 mx-auto px-2 md:px-10 w-full">
      <ContactHero />
      <AllMinistriesSermons />
      {/* <ContactForm />
      <CallUsNow /> */}
      {/* <FAQ /> */}
    </main>
  );
};

export default page;
