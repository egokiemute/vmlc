// lib/contentful.ts
import { createClient, Entry, Asset, EntrySkeletonType } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
});

export type ProjectFields = {
    title: {
      'en-US': string;
    };
    description: {
      'en-US': string;
    };
    whatWeDid: {
      'en-US': string[];
    };
    heroImage: Asset | undefined;
    comingSoon: {
      'en-US': boolean;
    };
  };

export interface ProjectEntrySkeleton extends EntrySkeletonType {
  fields: ProjectFields;
}

export const fetchProjects = async (): Promise<Entry<ProjectEntrySkeleton>[]> => {
  const response = await client.getEntries<ProjectEntrySkeleton>({
    content_type: 'project',
  });
  return response.items;
};
