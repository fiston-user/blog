import { getSortedPostsData } from "@/lib/posts";
import Search from "@/components/search";

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <section className="pt-12">
      <h2 className="text-4xl font-bold tracking-tighter mb-8">Blog</h2>
      <Search posts={allPostsData} />
    </section>
  );
}
