import Link from "next/link";

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-8">
      {posts.map(({ id, date, title, description, tags }) => (
        <li key={id}>
          <Link
            href={`/posts/${id}`}
            className="text-2xl font-semibold hover:underline"
          >
            {title}
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
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
  );
}
