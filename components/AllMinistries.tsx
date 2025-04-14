"use client";
import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";

// Define the Selected Works type
interface AllMinistries {
  id?: number;
  title: string;
  category?: string[];
  description?: string;
  imageSrc: string;
  slug?: string;
}

const works: AllMinistries[] = [
  {
    id: 1,
    title: "Celebrating youthfulness",
    category: ["Visual Identity"],
    description: "Youth Ministry",
    imageSrc: "/assets/selected/visha.jpg",
    slug: "/",
  },
  {
    id: 2,
    title: "Building souls",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Evangelism Ministry",
    imageSrc: "/assets/selected/xuse.webp",
    slug: "/",
  },
  {
    id: 3,
    title: "Worship outreach",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Ultimate Music Concert",
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

const AllMinistries = () => {
  return (
    <section className="pt-24 md:mt-24 mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-20 w-full mx-auto">
        <div className="flex flex-col items-center text-center gap-4 max-w-lg font-neuehasslight">
          <span className="text-xs uppercase tracking-wider font-medium">Ministries</span>
          <h1 className="text-4xl md:text-6xl font-bold font-helveticaNowDisplayBold max-w-lg">
            THERE&apos;S A PLACE FOR{" "}
            <span className="text-[#2e3b4d]">EVERYONE</span>
          </h1>
          <Link href="#">
            <Button
              text="See all works"
              className="w-44 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-helveticaNowDisplayRegular hidden md:inline-block"
              variant="outline"
            />
          </Link>
        </div>
        {/* Grid layout for work items */}
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {works.map((work, index) => (
            <Link key={index} href={`${work.slug || "/"}`}>
              <div className="">
                <div className="relative rounded-2xl w-full md:h-[320px] overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="object-cover hover:scale-110 h-full transition-all ease-in-out duration-500"
                    width={400}
                    height={320}
                  />
                </div>
                <div className="flex gap-1 items-center justify-between pt-3">
                  <h3 className="text-2xl font-medium font-helveticaNowDisplayBold tracking-wide">
                    {work.title}
                  </h3>
                </div>
                <p className="leading-7 text-[#0C0C0CB0] text-base md:text-lg font-medium font-helveticaNowDisplayRegular">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllMinistries;
