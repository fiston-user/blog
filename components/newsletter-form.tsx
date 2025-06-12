"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Subscribing...");

    // Here you would typically make an API call to your backend
    // or a third-party service like Mailchimp, ConvertKit, etc.
    // For this example, we'll just simulate a success message.

    setTimeout(() => {
      setMessage(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2">
        Subscribe to the newsletter
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Get the latest posts delivered right to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
