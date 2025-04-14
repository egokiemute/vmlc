import CallUsNow from "@/components/CallUsNow";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | World-Class Brand Design Consultancy",
  description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Contact Us | World-Class Brand Design Consultancy",
    description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
    url: "https://southcircle.co",  // Replace with your actual URL
    images: [
      {
        url: "https://southcircle.vercel.app/thumbnail.png", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "South Circle Brand Design Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | World-Class Brand Design Consultancy",
    description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
    images: ["https://southcircle.vercel.app/thumbnail.png"], // Replace with actual image URL
  },
};

const page = () => {
  return (
    <main className="pt-10 mt-24 mx-auto px-2 md:px-10 w-full">
      <ContactHero />
      <ContactForm />
      <CallUsNow />
      <FAQ />
    </main>
  );
};

export default page;
