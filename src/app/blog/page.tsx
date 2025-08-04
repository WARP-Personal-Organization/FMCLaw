// src/app/blog/page.tsx
import { getAllBlogPosts } from '@/lib/contentful';
import type { BlogPost } from '@/lib/contentful';
import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Asset } from 'contentful';

export default async function BlogPage() {
  const posts: BlogPost[] = await getAllBlogPosts();

  return (
    <>
      <Header />
      <main className="font-sans text-gray-800">
        <section className="bg-gray-100 py-16 md:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold font-oswald text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-10">
              Stay informed with insights from our legal experts
            </p>
            <div className="mx-auto w-12 h-1 bg-[#D4AF37]"></div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <p className="text-gray-600 text-center font-inter">No blog posts found.</p>
            ) : (
              <div className="grid gap-12 md:grid-cols-1">
                {posts.map((post) => {
                  const { title, slug, summary, featuredImage } = post.fields;
                  
                  // THE FIX: Explicitly check for fields to create a robust type guard.
                  const typedImage = featuredImage as Asset<undefined, string> | undefined;
                  const imageUrl = typedImage?.fields?.file?.url;
                  const imageAlt = typedImage?.fields?.title ?? `Featured image for ${title}`;


                  return (
                    <article 
                      key={post.sys.id} 
                      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden"
                    >
                      {imageUrl && (
                        <Link href={`/blog/${slug}`}>
                          <div className="relative h-64 w-full">
                            <Image
                              src={`https:${imageUrl}`}
                              alt={imageAlt || `Featured image for ${title}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Link>
                      )}

                      <div className="p-8">
                        <h2 className="text-2xl font-bold font-oswald text-gray-900 mb-4">
                          <Link 
                            href={`/blog/${slug}`}
                            className="hover:text-[#D4AF37] transition-colors"
                          >
                            {title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-6 font-inter">{summary}</p>
                        
                        <Link
                          href={`/blog/${slug}`}
                          className="inline-flex items-center text-[#D4AF37] hover:text-black font-medium font-inter transition-colors"
                        >
                          Read more →
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}