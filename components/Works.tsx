"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Works = () => {
  const works = [
    {
      title: "CloudZero",
      description:
        "Transforming the global EdTech industry with a new brand strategy and website.",
      tags: ["Market Research", "Visual Identity", "Website Design"],
      mediaType: "video",
      mediaSrc:
        "https://bb.agency/wp-content/uploads/2024/03/04-CloudZero-892x700-1.mp4",
      comingSoon: false,
    },
    {
      title: "mimo",
      description:
        "Reimagining code learning with a touch of retro and plenty of character!",
      tags: ["Coming soon"],
      mediaType: "video",
      mediaSrc:
        "https://bb.agency/wp-content/uploads/2024/02/Fetured-BB-Web-Mimo-892x700-1.mp4",
      comingSoon: true,
    },
    {
      title: "CloudZero",
      description:
        "Transforming the global EdTech industry with a new brand strategy and website.",
      tags: ["Market Research", "Visual Identity", "Website Design"],
      mediaType: "video",
      mediaSrc:
        "https://bb.agency/wp-content/uploads/2024/03/04-CloudZero-892x700-1.mp4",
      comingSoon: false,
    },
    {
      title: "ShipBob",
      description:
        "From startup to grown up: building a scalable brand for ShipBob, the $1B valued shipping logistics provider.",
      tags: ["Coming soon", "Visual Identity", "Design System"],
      mediaType: "image",
      mediaSrc:
        "https://bb.agency/wp-content/uploads/2024/02/shipbob-thumbnail.webp",
      comingSoon: false,
    },
    {
      title: "mimo",
      description:
        "Reimagining code learning with a touch of retro and plenty of character!",
      tags: ["Coming soon"],
      mediaType: "video",
      mediaSrc:
        "https://bb.agency/wp-content/uploads/2024/02/Fetured-BB-Web-Mimo-892x700-1.mp4",
      comingSoon: true,
    },
    {
      title: "ShipBob",
      description:
        "From startup to grown up: building a scalable brand for ShipBob, the $1B valued shipping logistics provider.",
      tags: ["Coming soon", "Visual Identity", "Design System"],
      mediaType: "image",
      mediaSrc:
        "https://bb.agency/wp-content/uploads/2024/02/shipbob-thumbnail.webp",
      comingSoon: false,
    },
  ];

  return (
    <section className="py-16 mb-20 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              {work.mediaType === "image" && (
                <img
                  src={work.mediaSrc}
                  alt={work.title}
                  className="w-full h-auto object-cover mb-4 rounded"
                />
              )}
              {work.mediaType === "video" && (
                <video
                  src={work.mediaSrc}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto object-cover mb-4 rounded"
                >
                  <source src={work.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {work.mediaType === "webp" && (
                <img
                  src={work.mediaSrc}
                  alt={work.title}
                  className="w-full h-auto object-cover mb-4 rounded"
                />
              )}
              <div className=" p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {work.title}
                </h3>
                <p className="text-muted-foreground mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        work.comingSoon
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/contact">
          <button className="px-8 md:px-12 py-2 text-base md:text-lg rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Let&apos;s Build
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Works;
