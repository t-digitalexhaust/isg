"use client";

import { useState, useEffect } from "react";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div
      className="fixed bottom-8 right-8 z-40 fade-in"
      style={{
        transition: "all 300ms",
      }}
    >
      <button
        className="glass-button h-11 px-8 rounded-md font-semibold"
        onClick={() => {
          const interviewForm = document.getElementById("interview-form");
          if (interviewForm) interviewForm.classList.remove("hidden");
        }}
      >
        I Want to Interview
      </button>
    </div>
  );
}
