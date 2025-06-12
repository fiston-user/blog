import { getSortedPostsData } from "@/lib/posts";

const site_url =
  process.env.NODE_ENV === "production"
    ? "https://your-production-domain.com"
    : "http://localhost:3000";

export async function GET() {
  const allPosts = getSortedPostsData();
  const staticPages = [
    { url: `${site_url}/`, lastModified: new Date().toISOString() },
    { url: `${site_url}/about`, lastModified: new Date().toISOString() },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
    </url>
    `;
    })
    .join("")}
  ${allPosts
    .map((post) => {
      return `
    <url>
      <loc>${site_url}/posts/${post.id}</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
    </url>
    `;
    })
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
