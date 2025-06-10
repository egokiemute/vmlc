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
    title: "About Omega Living Bride Tabernacle",
    category: [""],
    description: "Mission, To prepare, purify and position the Bride of Jesus Christ for His imminent return.",
    imageSrc: "/assets/team/william.jpg",
    slug: "/about",
  },
  // {
  //   id: 2,
  //   title: "Youth program",
  //   category: ["Evangelism"],
  //   description: "Raising a generation of believers.",
  //   imageSrc: "/assets/selected/youth.jpg",
  //   slug: "/",
  // },
  // {
  //   id: 3,
  //   title: "Teenage program",
  //   category: ["Champions"],
  //   description: "Building a generation of champions.",
  //   imageSrc: "/assets/selected/teenage.jpg",
  //   slug: "/",
  // },
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
      <div className="flex flex-col md:flex-row items-center gap-4 w-full mx-auto">
        <div className="flex flex-col items-center text-center gap-4 w-full font-neuehasslight">
          <span className="text-xs uppercase bg-gray-300/20 p-3 rounded-full w-fit">
            🙌🏼 Our message
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-helveticaNowDisplayBold max-w-lg">
            The Voice That Foreruns His Coming.
          </h1>
          <p className="font-normal text-lg sm:text-xl md:text-xl text-[#0C0C0CB0] mb-4 font-helveticaNowDisplayRegular px-2 max-w-xl">
            We are a Message-believing church rooted in the teachings of William
            Marrion Branham, called out from every denomination and creeds and dogmas.
          </p>
          <div className="py-2 flex items-center font-helveticaNowDisplayRegular text-lg italic max-w-sm mx-auto p-8 border border-black/20 rounded-lg">
            &quot;The Message will forerun the second coming, just as John
            foreran the First Coming&quot;
          </div>
        </div>
        {/* Grid layout for work items */}
        <div className="w-full">
          {works.map((work, index) => (
            <Link key={index} href={`${work.slug || "/"}`}>
              <div className="w-full">
                <div className="relative rounded-2xl w-full md:h-[460px] overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="object-cover hover:scale-110 h-full transition-all ease-in-out duration-500 filter sepia contrast-100 brightness-80"
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
