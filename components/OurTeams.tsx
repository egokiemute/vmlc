import Image from "next/image";
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
    fullname: "William Marrion Branham",
    title: "",
    imageSrc: "/assets/team/william.jpg",
  },
];

const OurTeams = () => {
  return (
    <section className="pb-20 pt-20 mb-20 mx-auto px-4 bg-[#5975FF0D]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* About Us Content */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-medium mb-6 font-helveticaNowDisplayBold text-3xl tracking-wide">
              About Us
            </h4>
            <p className="text-2xl font-neuehasslight leading-relaxed">
              We are a Bible-believing church focused on preparing for the end
              time through the teachings of William Marrion Branham. Our mission
              is to live out the message of the hour and to help others come to
              the fullness of Christ.
            </p>
          </div>
          
          {/* Team Member */}
          <div className="flex-shrink-0">
            {teams.map((team, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="mb-6">
                  <Image
                    src={team.imageSrc || ""}
                    alt={team.fullname || "Team member"}
                    width={400}
                    height={400}
                    className="object-cover grayscale h-[400px] w-[400px] rounded-2xl mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-helveticaNowDisplayBold">
                    {team.fullname}
                  </h3>
                  {team.title && (
                    <p className="text-gray-600 font-helveticaNowDisplayRegular">
                      {team.title}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeams;