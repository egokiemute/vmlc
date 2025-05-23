import Image from "next/image";
// import Link from "next/link";
import React from "react";

interface Team {
  fullname?: string;
  title?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  imageSrc?: string;
  mail?: string;
  contact?: string;
}

const teams: Team[] = [
  {
    fullname: "Prophet William Marrion Branham",
    title: "Lead Pastor & Founder",
    imageSrc: "/assets/team/william.jpg",
    // twitter: "https://x.com/chideranwanyemi",
    // linkedin: "https://www.linkedin.com/in/ozoofsouth/",
  },
  // {
  //   fullname: "Michelle Ozoefe",
  //   title: "Co-Pastor & Partner",
  //   imageSrc: "/assets/team/oke.jpg",
  //   // twitter: "https://x.com/Oakswood6",
  //   // linkedin: "https://www.linkedin.com/in/oke-omorohwovo-41089515b/",
  // },
  // {
  //   fullname: "Joseph Haruna",
  //   title: "Pastor & Partner",
  //   imageSrc: "/assets/team/nelson.jpg",
  //   // twitter: "https://x.com/i_am_goldnelson",
  //   // linkedin: "https://www.linkedin.com/in/gold-nelson/",
  // },
];

const OurTeams = () => {
  return (
    <section className="pb-20 pt-20 mb-20 mx-auto px-1">
      <div className="max-w-8xl w-full">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-[2px] uppercase font-helveticaNowDisplayRegular">
            Our Pastors
          </span>
          <hr />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-3xl font-semibold mb-6 max-w-sm font-helveticaNowDisplayBold">
              Our God-Chosen pastors and ministers.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
          {teams.map((team, index) => (
            <div key={index} className="max-w-md w-full h-[400px] flex-shrink-0">
              <Image
                src={team.imageSrc || ""}
                alt={team.title || ""}
                width={1000}
                height={240}
                className="object-cover grayscale h-[400px] rounded-2xl"
              />
              <div className="my-3">
                <h3 className="text-lg font-semibold truncate font-helveticaNowDisplayBold">
                  {team.fullname}
                </h3>
                <p className="text-gray-600 w-full font-helveticaNowDisplayRegular">
                  {team.title}
                </p>
              </div>
              {/* <div className="flex items-center gap-1 text-start mb-3">
                <Link href={team.twitter || "#"} className="">
                  <Image src="/assets/x-outline.svg" width={28} height={28} alt="X" />
                </Link>
                <Link href={team.linkedin || "#"} className="">
                  <Image
                    src="/assets/linkedIn-outline.svg"
                    width={28}
                    height={28}
                    alt="linkedin"
                  />
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
