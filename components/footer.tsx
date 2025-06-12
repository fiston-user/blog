import Link from "next/link";
import NewsletterForm from "./newsletter-form";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 border-t">
      <div className="container mx-auto px-4">
        <NewsletterForm />
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/feed.xml" className="hover:underline">
              RSS Feed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
