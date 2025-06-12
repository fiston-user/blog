import RSS from "rss";
import { getSortedPostsData } from "@/lib/posts";

const site_url =
  process.env.NODE_ENV === "production"
    ? "https://your-production-domain.com"
    : "http://localhost:3000";

export async function GET() {
  const allPosts = getSortedPostsData();

  const feedOptions = {
    title: "MyBlog | RSS Feed",
    description: "Welcome to my blog!",
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    image_url: `${site_url}/logo.png`, // Optional
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, MyBlog`,
  };

  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${site_url}/posts/${post.id}`,
      date: post.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
