"use client";
import GetInTouch from "@/components/GetInTouch";
import Meta from "@/components/Meta";
import Newsletter from "@/components/Newsletter";
import RecentInsights from "@/components/RecentInsights";
import Button from "@/components/ui/Button";
import CustomLink from "@/components/ui/Link";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define the Selected Works type
interface Blogs {
  id?: number;
  title: string;
  category?: string;
  description?: string;
  imageSrc: string;
  slug?: string;
  date?: string;
}

const blogs: Blogs[] = [
  {
    id: 1,
    title: "Art Is Dead",
    category: "Branding",
    description:
      "People often say, “I love what you do, but I’m just not the artsy type” or, “I can’t draw to save my life.”",
    imageSrc: "/assets/blogs/art-is-dead.png",
    slug: "art-is-dead",
    date: "September 24, 2024",
  },
];

// Categories to filter by
const categories = [
  "All Topic",
  "Branding",
  "Product design",
  "Visual Identity",
  "Marketing",
  "Development",
];

const Page = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All Topic");

  // Filter works based on selected category
  const filteredBlogs =
    selectedCategory === "All Topic"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="pt-10 mt-32 mx-auto px-2 md:px-10 w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mx-auto">
        <div className="relative w-full flex flex-col items-center gap-10 justify-center max-w-7xl">
          <div className="w-full flex flex-col items-center gap-4 md:gap-8 px-4">
            <h1 className="text-5xl sm:text-8xl font-semibold font-helveticaNowDisplayBold flex flex-col items-center text-center whitespace-nowrap">
              <span>Insights from</span>
              <span>our journey.</span>
            </h1>
            <p className="max-w-xl text-base md:text-xl text-center font-helveticaNowDisplayRegular">
              Explore the narratives that shape our work and reveal the
              inspiration behind our projects.
            </p>
          </div>
          <div className="max-w-3xl w-full px-2">
            <div>
              <label className="flex items-center justify-between w-full px-4 py-4 md:py-3 md:pl-8 rounded-full border transition-colors duration-300 ease-in-out bg-transparent border-gray-400">
                <input
                  type="text"
                  name="search"
                  className="bg-transparent border-none focus:border-none outline-none w-full h-full md:py-6 placeholder:font-helveticaNowDisplayRegular placeholder:text-sm md:placeholder:text-lg text-[#0C0C0CB0] placeholder:text-[#0C0C0CB0] font-helveticaNowDisplayRegular pl-4"
                  placeholder="Search for any insight..."
                />
                <Button
                  text="Search now"
                  className="md:px-16 py-6 md:py-10 w-48 rounded-full font-normal font-helveticaNowDisplayRegular text-[#1F1F1F] text-sm sm:text-base md:text-lg flex justify-center border-[#1F1F1F] whitespace-nowrap"
                  variant="outline"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT INSIGHTS */}
      <RecentInsights />

      {/* Filter Section */}
      <div className="mx-auto mb-16 mt-32 flex items-center justify-center w-full px-2">
        <div className="flex justify-start md:justify-center gap-8 overflow-x-scroll md:overflow-visible no-scrollbar relative">
          {/* Full border line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>

          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-10">
              <button
                className={`relative py-4 text-sm hover:border-b-[2px] hover:border-black hover:text-black uppercase whitespace-nowrap font-medium tracking-[2px] font-helveticaNowDisplayRegular transition-all duration-300 ease-in-out ${
                  selectedCategory === category
                    ? "text-black border-b-[2px] border-black transition-all duration-500 ease-in-out"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
              <span className={index === categories.length - 1 ? "hidden" : ""}>
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Works Section */}
      <div className="max-w-full px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Link key={index} href={`/blog/${blog.slug || "/"}`}>
                <div className="w-full">
                  <div className="relative rounded-2xl w-full h-0 pb-[80%] md:pb-[80%] overflow-hidden">
                    <Image
                      src={blog.imageSrc}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                      width={1000}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start py-4">
                    <span className="text-sm text-[#0C0C0CB0] font-helveticaNowDisplayRegular uppercase">
                      {blog.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold leading-relaxed font-helveticaNowDisplayBold mt-3">
                      {blog.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#0C0C0CB0] font-helveticaNowDisplayRegular">
                      {blog.description}
                    </p>
                  </div>

                  <CustomLink
                    href={`/blog/${blog.slug || "/"}`}
                    animate={true}
                    text="Read blog"
                    className={
                      "text-base border-b-[0.2px] border-[#919191b0] font-medium font-helveticaNowDisplayRegular"
                    }
                  />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center w-full col-span-full py-10">
              <p className="text-6xl font-helveticaNowDisplayRegular font-medium text-gray-500">
                No blog in here
              </p>
            </div>
          )}
        </div>
        {/* <div className="py-10 flex items-center justify-center">
          <Button
            text="See all blogs"
            className="px-6 py-5 w-32 text-sm font-medium rounded-full whitespace-nowrap font-helveticaNowDisplayRegular md:hidden"
            variant="outline"
          />
        </div> */}
      </div>

      <Newsletter />
      {/* Get In Touch Section */}
      <div className="mx-auto px-4 mt-16">
        <GetInTouch />
      </div>
    </section>
  );
};

export default Page;
