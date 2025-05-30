import { groq } from "next-sanity";
import { client } from "../lib/client";

export type category = {
  title: string;
};

export type Post = {
  title?: string;
  description?: string;
  slug?: {
    current: string;
  };
  author: string;
  comingSoon: string;
  imageUrl: string;
  mediaSrc: string;
  audioSrc?: string; // Add audioSrc field
  audioTitle?: string; // Add audio title field
  audioDescription?: string; // Add audio description field
  audioDuration?: string; // Add audio duration field
  publishedAt: string;
  mediaType: string;
  videoUrl?: string; // Add videoUrl field
  categories?: category[];
  span: boolean;
  website: string;
};

const getPostsQuery = groq`*[_type == "post"]{
  title,
  description,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  "mediaSrc": mediaSrc.asset->url,
  "audioSrc": audioSrc.asset->url,
  "audioTitle": audioSrc.title,
  "audioDescription": audioSrc.description,
  "audioDuration": audioSrc.duration,
  "categories": categories[]->{title},
  mediaType,
  publishedAt,
  body,
  span,
  website
}`;

export async function getPosts() {
  return await client.fetch(getPostsQuery, {});
}

const getPostDetailQuery = groq`*[_type == "post"][slug.current == $slug][0]{
  title,
  description,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  "categories": categories[]->{title},
  "mediaSrc": mediaSrc.asset->url,
  "audioSrc": audioSrc.asset->url,
  "audioTitle": audioSrc.title,
  "audioDescription": audioSrc.description,
  "audioDuration": audioSrc.duration,
  publishedAt,
  mediaType,
  body,
  span,
  website
}`;

export async function getDetailPost(slug: string) {
  return await client.fetch(getPostDetailQuery, {
    slug,
    revalidate: new Date().getHours(),
  });
}