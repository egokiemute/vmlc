import GetInTouch from "@/components/GetInTouch";
import WorksHero from "@/components/WorksHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | World-Class Brand Design Consultancy",
  description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Works | World-Class Brand Design Consultancy",
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
    title: "Works | World-Class Brand Design Consultancy",
    description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
    images: ["https://southcircle.vercel.app/thumbnail.png"], // Replace with actual image URL
  },
};

const Page = () => {
  return (
    <section className="pt-10 mt-28 mx-auto px-4 md:px-10 w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="w-full flex flex-col justify-center gap-10 md:flex-row max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-helveticaNowDisplayBold font-bold flex flex-col items-start text-start">
            <span>Brands we&apos;ve</span>
            <span>guided toward</span>
            <span>growth.</span>
          </h1>
          <p className="max-w-sm text-xl text-start mt-2 font-helveticaNowDisplayRegular font-medium text-[#0C0C0CB0] p-3">
            Explore our top projects that showcase our creativity and expertise.
            See how we turn bold ideas into impactful results and push the
            boundaries of design.
          </p>
        </div>
      </div>

      {/* WorkHero */}
      <WorksHero />

      {/* Get In Touch Section */}
      <div className="mx-auto px-6 md:px-10 mt-16">
        <GetInTouch />
      </div>
    </section>
  );
};

export default Page;
