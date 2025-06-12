import { getPostData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Comments from "@/components/comments";
import rehypePrettyCode from "rehype-pretty-code";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = await getPostData(id);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getPostData(id);

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypePrettyCode],
    },
  };

  return (
    <article className="prose lg:prose-xl dark:prose-invert">
      <h1>{post.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500 text-sm mb-0">
          Published on {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm no-underline hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <MDXRemote source={post.content} options={options} />
      <Comments />
    </article>
  );
}
