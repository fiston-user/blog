import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { getAllTags } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params;
  return {
    title: `Posts tagged with "${decodeURIComponent(tag)}"`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const allPosts = getSortedPostsData();
  const decodedTag = decodeURIComponent(tag);

  const posts = allPosts.filter(
    (post) => post.tags && post.tags.includes(decodedTag)
  );

  if (posts.length === 0) {
    notFound();
  }

  return (
    <section className="pt-12">
      <h2 className="text-4xl font-bold tracking-tighter mb-8">
        Posts tagged with &quot;{decodedTag}&quot;
      </h2>
      <ul className="space-y-8">
        {posts.map(({ id, date, title, description }) => (
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
          </li>
        ))}
      </ul>
    </section>
  );
}
