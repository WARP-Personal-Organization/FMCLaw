// src/app/blog/page.tsx
import { getAllBlogPosts, getAllTags } from '@/lib/contentful';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from '@/components/BlogList'; // Import the new component

export default async function BlogPage() {
  // Fetch all data once on the server
  const [posts, allTags] = await Promise.all([
    getAllBlogPosts(),
    getAllTags()
  ]);

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
            {/* Pass all data to the client component for interactive filtering */}
            <BlogList posts={posts} allTags={allTags} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}