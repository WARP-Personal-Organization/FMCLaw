// src/lib/contentful.ts
import { createClient, type EntrySkeletonType, type Entry, type Asset, type Tag } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export interface AuthorFields {
  name: string;
  bio?: string;
  avatar?: Asset;
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
  seoTitle: string;
  metaDescription: string;
  postType?: string;
  canonicalUrl?: string;
  commentsEnabled?: boolean;
  relatedPosts?: Entry<BlogPostSkeleton>[]; 
}

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'blogPost'>;

export type BlogPost = Entry<BlogPostSkeleton, undefined>;

export async function getAllTags(): Promise<Tag[]> {
  const tags = await client.getTags();
  return tags.items;
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const queryOptions = {
    content_type: 'blogPost',
    include: 3, // Level 3 from Blogs, Authors and Images, and Related Posts
    order: ['-fields.publishedDate'],
  };

  const entries = await client.getEntries<BlogPostSkeleton>(queryOptions as any);
  return entries.items;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const queryOptions = {
    content_type: 'blogPost',
    limit: 1,
    include: 3,
    'fields.slug': slug,
  };
  
  const entries = await client.getEntries<BlogPostSkeleton>(queryOptions as any);
  return entries.items[0] || null;
}