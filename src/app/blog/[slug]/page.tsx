// src/app/blog/[slug]/page.tsx
import {
  BLOCKS,
  MARKS,
  Block,
  Inline,
} from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options as RichTextOptions,
} from '@contentful/rich-text-react-renderer';

import { getBlogPostBySlug, getAllBlogPosts, AuthorSkeleton } from '@/lib/contentful';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Asset, Entry } from 'contentful';
import { ReactNode } from 'react';

  // Update rich text options to match your styling
const richTextOptions: RichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text: ReactNode) => <em className="italic">{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => (
      <p className="mb-6 leading-relaxed text-gray-700 font-inter">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_node: Block | Inline, children: ReactNode) => (
      <h1 className="text-3xl font-bold font-oswald text-gray-900 mb-6 mt-8">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: Block | Inline, children: ReactNode) => (
      <h2 className="text-2xl font-bold font-oswald text-gray-900 mb-4 mt-6">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: Block | Inline, children: ReactNode) => (
      <h3 className="text-xl font-bold font-oswald text-gray-900 mb-3 mt-5">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_node: Block | Inline, children: ReactNode) => (
      <ul className="list-disc list-outside mb-6 pl-6 space-y-2 text-gray-700 font-inter">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: Block | Inline, children: ReactNode) => (
      <ol className="list-decimal list-outside mb-6 pl-6 space-y-2 text-gray-700 font-inter">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (_node: Block | Inline, children: ReactNode) => (
      <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic mb-6 text-gray-600 font-inter">{children}</blockquote>
    ),
  },
};



  export async function generateStaticParams() {
    const posts = await getAllBlogPosts();
    
    return posts.map((post) => ({
      slug: post.fields.slug,
    }));
  }


export default async function BlogPostPage({ params }: { params: { slug: string } }) {


    const post = await getBlogPostBySlug(params.slug);

    if (!post) notFound();

    const { title, body, publishedDate, author, featuredImage } = post.fields;
  const typedAuthor = author as Entry<AuthorSkeleton> | undefined;

  // ✅ Handles localized name fields (like { "en-US": "John Doe" }) or plain strings
  const rawName = (typedAuthor?.fields?.name ?? {}) as unknown as Record<string, string>;
  const authorName = typeof rawName === 'string' ? rawName : rawName['en-US'] ?? 'Anonymous';



  const typedImage = featuredImage as Asset<undefined, string> | undefined;
  const imageUrl = typedImage?.fields?.file?.url;
  const imageAlt = typedImage?.fields?.title ?? `Featured image for ${title}`;


    return (
      <>
        <Header />
        <main className="font-sans text-gray-800">
          <section className="bg-white py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-[#D4AF37] hover:text-black transition-colors mb-8 font-inter"
              >
                ← Back to Blog
              </Link>

              <article>
                <header className="mb-8">
                  <h1 className="text-4xl sm:text-5xl font-bold font-oswald text-gray-900 mb-4">
                    {title}
                  </h1>
                  <div className="text-gray-600 font-inter">
                    <span>By {authorName}</span>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </header>

                {imageUrl && (
                  <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
                    <Image
                      src={`https:${imageUrl}`}
                      alt={imageAlt || `Featured image for ${title}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                <div className="prose prose-lg max-w-none font-inter">
                  {body && documentToReactComponents(body, richTextOptions)}
                </div>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }