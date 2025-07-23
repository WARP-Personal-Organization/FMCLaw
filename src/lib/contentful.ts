// src/lib/contentful.ts
import { createClient, type EntrySkeletonType, type Entry, type Asset } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export interface AuthorFields {
  name: string;
  bio?: string;
}

export type AuthorSkeleton = EntrySkeletonType<AuthorFields, 'author'>;

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

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const queryOptions = {
    content_type: 'blogPost',
    include: 2, // This now includes both author and featuredImage
    order: ['-fields.publishedDate'],
  };

  const entries = await client.getEntries<BlogPostSkeleton>(queryOptions as any);
  return entries.items;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const queryOptions = {
    content_type: 'blogPost',
    limit: 1,
    include: 2, // This now includes both author and featuredImage
    'fields.slug': slug,
  };
  
  const entries = await client.getEntries<BlogPostSkeleton>(queryOptions as any);
  return entries.items[0] || null;
}