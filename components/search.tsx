"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export default function Search({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const searchContent = post.title + post.description;
    return searchContent.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        className="w-full px-4 py-2 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <ul className="space-y-8">
          {filteredPosts.map(({ id, date, title, description, tags }) => (
            <li key={id}>
              <Link
                href={`/posts/${id}`}
                className="text-2xl font-semibold hover:underline"
              >
                {title}
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {description}
              </p>
              <small className="text-gray-500">
                {new Date(date).toLocaleDateString()}
              </small>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags?.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
