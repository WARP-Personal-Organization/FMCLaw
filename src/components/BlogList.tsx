// src/components/BlogList.tsx
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { type BlogPost } from '@/lib/contentful';
import { type Tag } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

interface BlogListProps {
  posts: BlogPost[];
  allTags: Tag[];
}

export default function BlogList({ posts, allTags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('publishedDate');

  // Create a quick lookup map for tag IDs to names
  const tagMap = useMemo(() => new Map(allTags.map(tag => [tag.sys.id, tag.name])), [allTags]);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // 1. Filter by selected tag
    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.metadata?.tags.some(tagLink => tagLink.sys.id === selectedTag)
      );
    }

    // 2. Filter by search query (case-insensitive)
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(post => {
        // THE FIX: Provide a fallback of '' for any field that might be undefined.
        // This prevents the '.toLowerCase()' error on posts with missing data.
        const title = (post.fields.title || '').toLowerCase();
        const summary = (post.fields.summary || '').toLowerCase();
        // Also ensure the rich text body has a fallback before converting to plain text.
        const body = documentToPlainTextString(post.fields.body || '').toLowerCase();

        return title.includes(lowercasedQuery) || 
               summary.includes(lowercasedQuery) || 
               body.includes(lowercasedQuery);
      });
    }

    // 3. Sort the results
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.fields.title.localeCompare(b.fields.title);
        case 'author':
          const authorA = a.fields.author?.fields?.name || '';
          const authorB = b.fields.author?.fields?.name || '';
          return authorA.localeCompare(authorB);
        case 'publishedDate':
        default:
          return new Date(b.fields.publishedDate).getTime() - new Date(a.fields.publishedDate).getTime();
      }
    });

    return sorted;
  }, [posts, searchQuery, selectedTag, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTag('');
  };
  
  return (
    <>
      {/* Interactive Controls */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        {/* Search Bar */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 font-inter">Search</label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, summary, or content..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37] sm:text-sm p-2"
          />
        </div>
        
        {/* Sort Dropdown */}
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 font-inter">Sort by</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37] sm:text-sm p-2"
          >
            <option value="publishedDate">Newest</option>
            <option value="title">Title (A-Z)</option>
            <option value="author">Author (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Tag Filters */}
      <div className="mb-12 flex flex-wrap items-center gap-2">
        <span className="font-medium font-inter mr-2">Filter by Tag:</span>
        <button
          onClick={() => setSelectedTag('')}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedTag === '' ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag.sys.id}
            onClick={() => setSelectedTag(tag.sys.id)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedTag === tag.sys.id ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {tag.name}
          </button>
        ))}

        {(searchQuery || selectedTag) && (
          <button
            onClick={handleClearFilters}
            className="ml-2 text-sm text-gray-600 hover:text-black hover:underline font-inter"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Post List */}
      {filteredAndSortedPosts.length === 0 ? (
        <p className="text-gray-600 text-center font-inter">No blog posts found.</p>
      ) : (
        <div className="grid gap-12 md:grid-cols-1">
          {filteredAndSortedPosts.map((post) => {
            const { title, slug, summary, featuredImage } = post.fields;
            const imageUrl = featuredImage?.fields.file?.url;
            const postTags = (post.metadata?.tags || []).map(tagLink => tagMap.get(tagLink.sys.id)).filter(Boolean);

            return (
              <article 
                key={post.sys.id} 
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden"
              >
                {imageUrl && (
                  <Link href={`/blog/${slug}`}>
                    <div className="relative h-64 w-full">
                      <Image src={`https:${imageUrl}`} alt={featuredImage?.fields.title || ''} fill className="object-cover" />
                    </div>
                  </Link>
                )}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {postTags.map(tagName => (
                      <span key={tagName} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full font-inter">
                        {tagName}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold font-oswald text-gray-900 mb-4">
                    <Link href={`/blog/${slug}`} className="hover:text-[#D4AF37] transition-colors">{title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6 font-inter">{summary}</p>
                  <Link href={`/blog/${slug}`} className="inline-flex items-center text-[#D4AF37] hover:text-black font-medium font-inter transition-colors">
                    Read more →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}