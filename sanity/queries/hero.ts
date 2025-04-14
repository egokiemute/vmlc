// // src/queries/hero.ts
// import { groq } from "next-sanity";
// import { client } from "../lib/client";

// export type HeroType = {
//   titleOne?: string;
//   titleTwo?: string;
//   body?: any; // Adjust the type if you have a specific type for block content
//   btnText: string;
//   gallery?: {
//     _type: string;
//     asset: {
//       url: string;
//     };
//     alt: string;
//   }[];
//   mediaType?: string;
// };

// const getHeroSectionQuery = groq`*[_type == "hero"][0]{
//     titleOne,
//     titleTwo,
//     body,
//     btnText,
//     gallery[]{
//       _type,
//       asset->{
//         url
//       },
//       alt
//     },
//     mediaType
//   }`;

// export const getHeroSection = async () => {
//   return await client.fetch(getHeroSectionQuery, {});
// };

import { groq } from "next-sanity";
import { client } from "../lib/client";

export type HeroType = {
  titleOne: string;
  titleTwo: string;
  body: any; // Update this type according to your blockContent type
  btnText: string;
  gallery: {
    asset: {
      url: string;
    };
    alt: string;
  }[];
  mediaType: string;
};

export async function getHeroSection(): Promise<HeroType> {
  const query = groq`*[_type == "hero"][0]{
    titleOne,
    titleTwo,
    body,
    btnText,
    gallery[]{
      asset->{
        url
      },
      alt
    },
    mediaType
  }`;

  return await client.fetch(query);
}

