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
  const [selectedTagGroup, setSelectedTagGroup] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('publishedDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Create a quick lookup map for tag IDs to names
  const tagMap = useMemo(() => new Map(allTags.map(tag => [tag.sys.id, tag])), [allTags]);

  // Parse tags into groups based on a ":" delimiter
  const tagGroups = useMemo(() => {
    const groups = new Map<string, Tag[]>();
    allTags.forEach(tag => {
      const [groupName, ...rest] = tag.name.split(': ');
      if (rest.length > 0) {
        if (!groups.has(groupName)) {
          groups.set(groupName, []);
        }
        groups.get(groupName)!.push(tag);
      }
    });
    return groups;
  }, [allTags]);

  const postTypes = useMemo(() => [...new Set(posts.map(post => post.fields.postType).filter(Boolean))], [posts]);

  // --- CORE FILTERING & SORTING LOGIC ---

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // Filter by post type
    if (selectedType) {
      filtered = filtered.filter(post => post.fields.postType === selectedType);
    }

    // Filter by selected tag
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => {
        const postTagIds = new Set(post.metadata?.tags.map(t => t.sys.id));
        return selectedTags.every(tagId => postTagIds.has(tagId));
      });
    }

    // Filter by search query (case-insensitive)
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

    // Sort the results
    const sorted = [...filtered].sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'title':
          comparison = a.fields.title.localeCompare(b.fields.title);
          break;
        case 'author':
          const authorA = a.fields.author?.fields?.name || '';
          const authorB = b.fields.author?.fields?.name || '';
          comparison = authorA.localeCompare(authorB);
          break;
        case 'publishedDate':
        default:
          // THE FIX: Use `sys.createdAt` as a fallback if `publishedDate` is missing.
          const dateA = new Date(a.fields.publishedDate || a.sys.createdAt);
          const dateB = new Date(b.fields.publishedDate || b.sys.createdAt);
          comparison = dateB.getTime() - dateA.getTime();
          break;
      }
      // Apply sort direction
      return comparison * (sortDirection === 'asc' ? 1 : -1);
    });
    return sorted;
  }, [posts, searchQuery, selectedTags, selectedType, sortBy, sortDirection]);

  // --- EVENT HANDLERS ---
  
  const handleTagSelect = (tagId: string) => {
    if (!selectedTags.includes(tagId)) {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleTagDeselect = (tagId: string) => {
    setSelectedTags(selectedTags.filter(id => id !== tagId));
  };
  
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSelectedType('');
    setSelectedTagGroup('');
  };
  
  return (
    <>
      {/* Interactive Controls */}
      <div className="space-y-6 mb-12 p-6 border border-gray-200 rounded-lg bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search Bar */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 font-inter">Search</label>
            <input type="text" id="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search content..." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
          </div>
          {/* Sort Controls */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 font-inter">Sort by</label>
            <div className="flex items-center gap-2">
              <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
                <option value="publishedDate">Date</option>
                <option value="title">Title (A-Z)</option>
                <option value="author">Author (A-Z)</option>
              </select>
              <button
                onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50"
                aria-label={`Sort direction: ${sortDirection === 'asc' ? 'Ascending' : 'Descending'}`}
              >
                {sortDirection === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
        {/* Tag Group & Tag Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="tag-group" className="block text-sm font-medium text-gray-700 font-inter">Tag Group</label>
            <select id="tag-group" value={selectedTagGroup} onChange={(e) => setSelectedTagGroup(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
              <option value="">Select a group...</option>
              {[...tagGroups.keys()].map(group => <option key={group} value={group}>{group}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 font-inter">Tag</label>
            <select id="tags" value="" onChange={(e) => handleTagSelect(e.target.value)} disabled={!selectedTagGroup} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 disabled:bg-gray-100">
              <option value="">Select a tag...</option>
              {(tagGroups.get(selectedTagGroup) || []).map(tag => <option key={tag.sys.id} value={tag.sys.id}>{tag.name.split(': ')[1]}</option>)}
            </select>
          </div>
        </div>
        {/* Display Active Filters */}
        {(selectedTags.length > 0 || searchQuery || selectedType) && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 font-inter mb-2">Active Filters:</h4>
            <div className="flex flex-wrap items-center gap-2">
              {selectedTags.map(tagId => (
                <button key={tagId} onClick={() => handleTagDeselect(tagId)} className="flex items-center gap-1 px-2.5 py-1 text-sm rounded-full bg-[#D4AF37] text-white">
                  <span>{tagMap.get(tagId)?.name}</span>
                  <span className="font-bold">×</span>
                </button>
              ))}
              <button onClick={handleClearFilters} className="text-sm text-gray-600 hover:text-black hover:underline font-inter">Clear All</button>
            </div>
          </div>
        )}
      </div>

      {/* Post List */}
      {filteredAndSortedPosts.length === 0 ? (
        <p className="text-gray-600 text-center font-inter">No blog posts found.</p>
      ) : (
        <div className="grid gap-12 md:grid-cols-1">
          {filteredAndSortedPosts.map((post) => {
            const { title, slug, summary, featuredImage, publishedDate, author, postType } = post.fields;
            const imageUrl = featuredImage?.fields?.file?.url;
            const authorName = author?.fields?.name || 'Anonymous';
            const postTags = (post.metadata?.tags || []).map(tagLink => tagMap.get(tagLink.sys.id)).filter((tag): tag is Tag => !!tag);

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
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 font-inter">
                    {postType && <span className="font-bold uppercase text-[#D4AF37]">{postType}</span>}
                    <span>{new Date(publishedDate || post.sys.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>by {authorName}</span>
                  </div>

                  <h2 className="text-2xl font-bold font-oswald text-gray-900 mb-4">
                    <Link href={`/blog/${slug}`} className="hover:text-[#D4AF37] transition-colors">{title}</Link>
                  </h2>

                  <p className="text-gray-600 mb-6 font-inter">{summary}</p>

                  {postTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {postTags.map(tag => (
                        <span key={tag.sys.id} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full font-inter">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link href={`/blog/${slug}`} className="inline-flex items-center text-[#D4AF37] hover:text-black font-medium font-inter transition-colors">Read more →</Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}