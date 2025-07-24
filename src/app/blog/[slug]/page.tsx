// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { getBlogPostBySlug, getAllBlogPosts, getAllTags } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import readingTime from 'reading-time';

// Update rich text options to match your styling
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-6 leading-relaxed text-gray-700 font-inter">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-3xl font-bold font-oswald text-gray-900 mb-6 mt-8">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-2xl font-bold font-oswald text-gray-900 mb-4 mt-6">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-xl font-bold font-oswald text-gray-900 mb-3 mt-5">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-outside mb-6 pl-6 space-y-2 text-gray-700 font-inter">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-outside mb-6 pl-6 space-y-2 text-gray-700 font-inter">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic mb-6 text-gray-600 font-inter">{children}</blockquote>
    ),
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) return {};

  const { seoTitle, metaDescription, title, body, canonicalUrl } = post.fields;

  const plainBody = documentToPlainTextString(body);
  const fallbackDescription = plainBody.slice(0, 160).replace(/\s+\S*$/, '') + '...';

  return {
    title: seoTitle || title,
    description: metaDescription || fallbackDescription,
    alternates: {
      canonical: canonicalUrl || `https://fmclaw.com.ph/blog/${params.slug}`,
    },
    openGraph: {
      title: seoTitle || title,
      description: metaDescription || fallbackDescription,
      url: canonicalUrl || `https://fmclaw.com.ph/blog/${params.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch the single post and all tags in parallel
  const [post, allTags] = await Promise.all([
    getBlogPostBySlug(params.slug),
    getAllTags()
  ]);

  if (!post) {
    notFound();
  }

  // Create the same lookup map
  const tagMap = new Map(allTags.map(tag => [tag.sys.id, tag.name]));

  const { title, body, publishedDate, author, featuredImage, postType, relatedPosts } = post.fields;
  const authorName = author && author.fields ? author.fields.name : 'Anonymous';
  const authorBio = author?.fields?.bio;
  const authorAvatarUrl = author?.fields?.avatar?.fields?.file?.url;
  const imageUrl = featuredImage?.fields.file?.url;
  const imageAlt = featuredImage?.fields.title || `Featured image for ${title}`;

  // Resolve the tags for this specific post
  const postTags = (post.metadata?.tags || [])
    .map(tagLink => tagMap.get(tagLink.sys.id))
    .filter(Boolean) as string[];

  const updatedAt = post.sys.updatedAt;

  const plainBodyText = documentToPlainTextString(body);
  const readingStats = readingTime(plainBodyText); // Calculates words, text, etc.

  const published = new Date(publishedDate);
  const updated = new Date(updatedAt);
  const showUpdatedAt = updated.getTime() - published.getTime() > 24 * 60 * 60 * 1000;

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

            {/* Post Section */}
            <article>
              <header className="mb-8">
                {postTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {postType && (
                      <span className="bg-[#D4AF37] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                        {postType}
                      </span>
                    )}
                    {postTags.map((tag) => (
                      <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full font-inter">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="text-4xl sm:text-5xl font-bold font-oswald text-gray-900 mb-4">
                  {title}
                </h1>
                <div className="text-gray-600 font-inter text-sm space-y-2 md:space-y-0 md:flex md:items-center">
                  <span>By {authorName}</span>
                  <span className="hidden md:inline mx-2">•</span>
                  
                  {/* Published and Updated Date */}
                  <span>
                    Published on {published.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    {showUpdatedAt && ` (Updated on ${updated.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })})`}
                  </span>
                  
                  <span className="hidden md:inline mx-2">•</span>
                  
                  {/* Reading Time */}
                  <span>{readingStats.text}</span>
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
            
            {/* Author Bio Section */}
            {author && author.fields && (
              <div className="mt-16 pt-12 border-t border-gray-200 flex items-start gap-6 bg-gray-50 p-8 rounded-lg">
                {authorAvatarUrl && (
                  <div className="flex-shrink-0">
                    <Image
                      src={`https:${authorAvatarUrl}`}
                      alt={`Avatar for ${authorName}`}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold font-oswald text-gray-900 mb-1">About {authorName}</h3>
                  {authorBio && <p className="text-gray-700 font-inter leading-relaxed">{authorBio}</p>}
                </div>
              </div>
            )}

            {/* Related Posts Section */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h2 className="text-3xl font-bold font-oswald text-gray-900 mb-8">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map(related => {
                    const { slug, title, summary } = related.fields;
                    return (
                      <div key={related.sys.id} className="border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-bold font-oswald mb-3">
                          <Link href={`/blog/${slug}`} className="hover:text-[#D4AF37]">{title}</Link>
                        </h3>
                        <p className="text-gray-600 font-inter text-sm mb-4">{summary}</p>
                        <Link href={`/blog/${slug}`} className="font-medium text-[#D4AF37] hover:text-black">Read more →</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}