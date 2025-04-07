"use client";

import Link from "next/link";
import ThemeScript from "../theme-script";

export default function TestingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] flex flex-col items-center justify-center p-4">
      <ThemeScript />

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#211f60] dark:text-[#ffc602]">
          Testing Page
        </h1>

        <p className="text-lg mb-8 leading-relaxed">
          This is a simple testing page for Indigo Fiber Solutions. Our company
          provides outsourced Sales and Marketing services for ISPs. We manage
          the complete marketing sales process for internet services and help
          ISPs increase sales in targeted geographical areas. Our mission is to
          deliver exceptional performance that expands your market reach and
          grows your residential and small business customer base.
        </p>

        <button
          className="glass-button h-11 px-8 rounded-md font-medium"
          onClick={() => alert("Button clicked!")}
        >
          Click Me
        </button>

        <div className="mt-8">
          <Link
            href="/"
            className="text-[#211f60] dark:text-[#ffc602] hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
