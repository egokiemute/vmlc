import { groq } from "next-sanity";
import { client } from "../lib/client";

export type category = {
  title: string;
};

export type Recent = {
  title?: string;
  description?: string;
  slug?: {
    current: string;
  };
  author: string;
  comingSoon: string;
  imageUrl: string;
  mediaSrc: string;
  publishedAt: string;
  mediaType: string;
  videoUrl?: string; // Add videoUrl field
  categories?: category[];
  span: boolean;
  website: string;
  recent: boolean;
};

const getRecentsQuery = groq`*[_type == "recent"]{
  title,
  description,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  "mediaSrc": mediaSrc.asset->url,
  "categories": categories[]->{title},
  mediaType,
  publishedAt,
  body,
  span,
  website
}`;

export async function getRecents() {
  return await client.fetch(getRecentsQuery, {});
}

const getRecentDetailQuery = groq`*[_type == "recent"][slug.current == $slug][0]{
  title,
  description,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  "categories": categories[]->{title},
  "mediaSrc": mediaSrc.asset->url, // Add videoUrl to the query
  publishedAt,
  mediaType,
  body,
  span,
  website
}`;

export async function getDetailRecent(slug: string) {
  return await client.fetch(getRecentDetailQuery, {
    slug,
    revalidate: new Date().getHours(),
  });
}
