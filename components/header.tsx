"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle-button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold">
          MyBlog
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-lg hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:underline">
              About
            </Link>
          </nav>
          <ThemeToggleButton />
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="text-lg hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
