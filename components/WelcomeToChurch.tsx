"use client";
import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";

// Define the Selected Works type
interface SelectedWorks {
  id?: number;
  title: string;
  category?: string[];
  description?: string;
  imageSrc: string;
  slug?: string;
}

const works: SelectedWorks[] = [
  {
    id: 1,
    title: "About us",
    category: ["Family"],
    description: "We are big enough to accommodate you.",
    imageSrc: "/assets/selected/visha.jpg",
    slug: "/",
  },
  {
    id: 2,
    title: "Xuse Gold",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Building Trust Through Stability with Gold.",
    imageSrc: "/assets/selected/xuse.webp",
    slug: "/",
  },
  {
    id: 3,
    title: "GameBox",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Your Ultimate Gaming Destination.",
    imageSrc: "/assets/selected/gamebox.webp",
    slug: "/",
  },
  // {
  //   id: 4,
  //   title: "Coming Soon...",
  //   category: ["UI/UX Design"],
  //   description: "Coming...",
  //   imageSrc: "/assets/selected/ciange.png",
  //   slug: "https://www.behance.net/southcircle",
  // },
];

const WelcomeToChurch = () => {
  return (
    <section className="pt-24 md:mt-24 mx-auto px-4 md:px-10">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-xs uppercase bg-gray-300/20 p-3 rounded-full w-fit">
            🙌🏼 Our mandate
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-helveticaNowDisplayBold max-w-lg">
            We are a family rooted in Christ love.
          </h1>
          <p className="font-normal text-lg sm:text-xl md:text-xl text-[#0C0C0CB0] mb-10 font-helveticaNowDisplayRegular px-2 max-w-xl">
            Unveiling kingdom mysteries, preparing for the Rapture by the
            messages brought by the Prophet William Maroon Branham.
          </p>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="py-2 flex items-center justify-between w-full">
            {/* <h2 className="text-2xl md:text-3xl font-semibold font-helveticaNowDisplayBold">
              Selected Works
            </h2>
            <div>
              <Link href="/works">
                <Button
                  text="See all works"
                  className="w-44 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular hidden md:inline-block"
                  variant="outline"
                />
              </Link>
            </div> */}
          </div>
        </div>
        {/* Grid layout for work items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-6 w-full mt-10">
          {works.map((work, index) => (
            <Link key={index} href={`${work.slug || "/"}`}>
              <div className="w-full">
                <div className="relative rounded-2xl w-full md:h-[460px] overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="object-cover hover:scale-110 h-full transition-all ease-in-out duration-500"
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="flex gap-1 items-center justify-between pt-3">
                  <h3 className="text-2xl font-semibold font-helveticaNowDisplayBold tracking-wide">
                    {work.title}
                  </h3>
                  <div className="md:flex items-center gap-1 hidden mt-2">
                    {work?.category &&
                      work?.category.map((cat, index) => (
                        <span
                          key={index}
                          className="border-[0.8px] text-sm border-gray-200 px-4 py-1 whitespace-nowrap rounded-full inline-block font-helveticaNowDisplayRegular"
                        >
                          {cat}
                        </span>
                      ))}
                  </div>
                </div>
                <p className="leading-7 text-[#0C0C0CB0] text-base md:text-lg font-medium font-helveticaNowDisplayRegular">
                  {work.description}
                </p>
                <div className="flex items-center gap-1 md:hidden mt-1">
                  {work?.category &&
                    work?.category.map((cat, index) => (
                      <span
                        key={index}
                        className="border-[0.8px] text-sm border-gray-200 px-2 py-1 whitespace-nowrap rounded-full inline-block font-helveticaNowDisplayRegular"
                      >
                        {cat}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/works"
          className="py-10 flex items-center justify-center md:hidden"
        >
          <Button
            text="See all works"
            className="w-44 h-12 py-2 text-center text-base md:text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular"
            variant="outline"
          />
        </Link>
      </div>
    </section>
  );
};

export default WelcomeToChurch;
