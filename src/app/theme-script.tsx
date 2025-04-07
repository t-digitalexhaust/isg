"use client";

import { useEffect } from "react";

export default function ThemeScript() {
  useEffect(() => {
    // Initialize theme on client side
    const savedTheme = localStorage.getItem("theme") || "light";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme === "system" ? systemTheme : savedTheme;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
  }, []);

  return null;
}
