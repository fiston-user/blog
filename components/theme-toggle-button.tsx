"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggleButton() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="p-2 rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="h-6 w-6 dark:hidden" />
      <Moon className="h-6 w-6 hidden dark:block" />
    </button>
  );
}
