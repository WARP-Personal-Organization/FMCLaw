// src/app/blog/[slug]/page.tsx
import {
  documentToReactComponents,
  Options as RichTextOptions,
} from "@contentful/rich-text-react-renderer";
import {
  getBlogPostBySlug,
  getAllBlogPosts,
  AuthorSkeleton,
} from "@/lib/contentful";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Asset, Entry } from "contentful";
import type { Metadata } from "next";
import { BLOCKS } from "@contentful/rich-text-types";

// --- generateMetadata ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const { title, summary, featuredImage } = post.fields;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fmclaw.com.ph";
  const typedImage = featuredImage as Asset<undefined, string> | undefined;
  const imageUrl = typedImage?.fields?.file?.url
    ? `https:${typedImage.fields.file.url}`
    : `${siteUrl}/socialshare.png`;
  const imageAlt = typedImage?.fields?.title ?? `Featured image for ${title}`;

  return {
    title: `${title} | FMC Law`,
    description: summary,
    openGraph: {
      title: `${title} | FMC Law`,
      description: summary,
      url: `${siteUrl}/blog/${slug}`,
      siteName: "FMC Law",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | FMC Law`,
      description: summary,
      images: [imageUrl],
    },
  };
}

// --- Rich Text Options for proper spacing ---
const richTextOptions: RichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mt-8 mb-4 font-bold text-2xl">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="mt-6 mb-3 font-semibold text-xl">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-6 mb-6">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-6 mb-6">{children}</ol>
    ),
  },
};


export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

// --- Blog Post Page ---
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  const { title, body, publishedDate, author, featuredImage } = post.fields;
  const typedAuthor = author as Entry<AuthorSkeleton> | undefined;

  const rawName = (typedAuthor?.fields?.name ?? {}) as unknown as Record<
    string,
    string
  >;
  const authorName =
    typeof rawName === "string" ? rawName : rawName["en-US"] ?? "FMC Law";

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
                    {new Date(publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
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
