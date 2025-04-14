
import { client } from "@/sanity/lib/client";
import { getDetailPost } from "@/sanity/queries/posts";
import { default as ImageUrlBuilder } from "@sanity/image-url";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getDetailRecent } from "@/sanity/queries/recents";

const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const componentsTest: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl mb-6">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-4xl mb-6 leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-3xl mb-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl mb-6">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-white mb-6 border-l-4 border-opacity-60 bg-white/10 p-6 w-full">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="sm:h-[45vh] aspect-auto w-full h-[33vh]  mb-6">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          width={320}
          height={450}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-400 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className=" font-bold underline text-yellow-300"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const WorkDetail = async ({ params }: { params: { slug: string, recent: boolean } }) => {
  const { slug } = params;

  console.log(slug)

  const work = await getDetailRecent(slug) || await getDetailPost(slug);
  // console.log(work);
  // console.log(work.title);

  return (
    <main className="container mx-auto px-4 md:px-28 py-16">
      <div className="pt-16 sm:pt-20">
        <h1 className="text-4xl sm:text-4xl md:text-8xl font-bold mb-6 sm:mb-10 font-inter">
          {work?.title}
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-medium  mb-6 sm:mb-10">{work?.description}</p>
        <div className="flex flex-col gap-2  mb-6 sm:mb-10">
          <p className="font-normal text-2xl tracking-wide">How did we help:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {(work?.categories || []).map((category: any, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-xl font-normal rounded-full bg-yellow-100 text-yellow-600"
              >
                {category.title}
              </span>
            ))}
          </div>
        </div>
        {work?.mediaType === "image" && (
          <img
            src={work?.imageUrl}
            alt={work?.slug.current || ""}
            className="w-full h-auto object-cover mb-4 rounded"
          />
        )}
        {work?.mediaType === "video" && (
          <video
            src={work?.mediaSrc}
            autoPlay
            loop
            muted
            className="w-full h-auto object-cover mb-4 rounded"
          >
            <source src={work?.mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {work?.mediaType === "webp" && (
          <img
            src={work?.imageUrl}
            alt={work?.title}
            className="w-full h-auto object-cover mb-4 rounded"
          />
        )}
        <div className="flex items-center gap-6 pb-16 border-b-2">
          <div className="flex flex-col items-start flex-wrap gap-3 pt-12 mb-4">
            <p className="text-muted-foreground text-2xl">Client/Brand</p>
            <p className="text-lg">{work?.author}</p>
          </div>
          {work?.website && (
            <div className="flex flex-col items-start flex-wrap gap-3 pt-12 mb-4">
              <p className="text-muted-foreground text-2xl">Website</p>
              <p className="text-lg">{work?.website || ''}</p>
            </div>
          )}
        </div>
        <div className="prose pt-20">
          <div className="w-full sm:w-[60vw] flex justify-center items-start flex-col">
            <PortableText value={work?.body} components={componentsTest} />
          </div>
        </div>
        <div className="pt-10">
          <Link
            href="/works"
            className="nav-link-hover relative inline-block text-base md:text-lg"
          >
            GO BACK
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-col mx-auto w-10/11 md:w-10/12 text-center max-w-5xl pt-20">
            <p className="text-xl sm:text-3xl md:text-5xl">Narrating stories that resonate, building experiences that people cherish, and achieving outcomes that matter demand true partnership. That&apos;s why we&apos;re here for the long haul, walking beside you every step of the way.</p>
            <Link href="/contact">
          <button className="px-8 md:px-12 py-4 text-base md:text-xl rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Let&apos;s Build
          </button>
        </Link>
        </div>
      </div>
    </main>
  );
};

export default WorkDetail;
