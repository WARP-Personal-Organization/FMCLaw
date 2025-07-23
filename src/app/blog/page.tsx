// src/app/blog/page.tsx
import { getAllBlogPosts } from '@/lib/contentful';
import type { BlogPost } from '@/lib/contentful';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
              <div className="grid gap-8 md:grid-cols-1">
                {posts.map((post) => {
                  const { title, slug, summary } = post.fields;

                  return (
                    <article 
                      key={post.sys.id} 
                      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8 bg-white"
                    >
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