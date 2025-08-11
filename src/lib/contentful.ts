// src/lib/contentful.ts
import { createClient, type EntrySkeletonType, type Entry, type Asset } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export interface AuthorFields {
  name: string;
  bio?: string;
}

export type AuthorSkeleton = EntrySkeletonType<AuthorFields, 'author'>;
export type ImageAssetFields = {
  file: {
    url: string;
    contentType: string;
    details: string;
    fileName: string;
  };
  title: string;
};
export interface BlogPostFields {
  title: string;
  slug: string;
  summary: string;
  publishedDate: string;
  author: Entry<AuthorSkeleton>;
  body: Document;
  featuredImage?: Asset; 
}

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'blogPost'>;
export type BlogPost = Entry<BlogPostSkeleton, undefined>;

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Missing Contentful environment variables');
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const queryOptions = {
    content_type: 'blogPost',
    include: 2,
    order: ['-fields.publishedDate'],
  } as unknown as Parameters<typeof client.getEntries<BlogPostSkeleton>>[0];

  const entries = await client.getEntries<BlogPostSkeleton>(queryOptions);
  return entries.items;
}


export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const queryOptions = {
    content_type: 'blogPost',
    limit: 1,
    include: 2,
    'fields.slug': slug, 
  } as unknown as Parameters<typeof client.getEntries<BlogPostSkeleton>>[0];

  const entries = await client.getEntries<BlogPostSkeleton>(queryOptions);
  return entries.items[0] || null;
}

 