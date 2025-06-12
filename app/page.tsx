import { getSortedPostsData } from "@/lib/posts";
import Search from "@/components/search";
import PostList from "@/components/post-list";
import Link from "next/link";

const POSTS_PER_PAGE = 5;

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const allPostsData = getSortedPostsData();
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(allPostsData.length / POSTS_PER_PAGE);

  const paginatedPosts = allPostsData.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="pt-12">
      <h2 className="text-4xl font-bold tracking-tighter mb-8">Blog</h2>
      <Search posts={allPostsData} />
      <PostList posts={paginatedPosts} />
      <div className="flex justify-between mt-8">
        {currentPage > 1 ? (
          <Link
            href={`/?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Previous
          </Link>
        ) : (
          <div />
        )}
        {currentPage < totalPages ? (
          <Link
            href={`/?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Next
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
