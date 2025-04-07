"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";

interface StackedCardsProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function StackedCards({ items }: StackedCardsProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Simple scroll handler that doesn't hijack scrolling
  useEffect(() => {
    if (!inView) {
      // Reset when not in view
      setActiveIndex(-1);
      return;
    }

    // When in view, start showing cards
    const timer = setTimeout(() => {
      setActiveIndex(0);
    }, 300);

    return () => clearTimeout(timer);
  }, [inView]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!inView) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && activeIndex < items.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.key === "ArrowUp" && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, inView, items.length]);

  // Auto-advance cards when in view, but pause when hovering
  useEffect(() => {
    if (!inView || activeIndex >= items.length - 1 || isHovering) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2500); // 2.5 seconds between cards

    return () => clearTimeout(timer);
  }, [activeIndex, inView, items.length, isHovering]);

  return (
    <div ref={ref} className="relative h-[500px] mb-8">
      {/* Card container */}
      <div
        className="relative h-full w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {items.map((item, index) => {
          // Calculate if this card should be visible
          const isVisible = index <= activeIndex && activeIndex >= 0;

          // Calculate position based on active index
          const position = isVisible ? activeIndex - index : 0;
          const zIndex = items.length - position;

          return (
            <div
              key={index}
              className="glass-card p-6 absolute left-0 w-full"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? `translateY(${position * 40}px) scale(${
                      1 - position * 0.05
                    })`
                  : "translateY(100px) scale(0.9)",
                zIndex: zIndex,
                top: 0,
                height: "auto",
                minHeight: "350px",
                visibility: isVisible ? "visible" : "hidden",
                transition: "all 500ms ease-out",
              }}
            >
              <h4 className="text-xl font-medium mb-4 text-[#211f60] dark:text-[#ffc602]">
                {item.title}
              </h4>
              <div className="text-base overflow-auto max-h-[280px]">
                {item.content}
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual indicator for card progress */}
      {activeIndex >= 0 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index <= activeIndex
                  ? "bg-[#211f60] dark:bg-[#ffc602]"
                  : "bg-[#211f60]/30 dark:bg-[#ffc602]/30"
              }`}
            />
          ))}
        </div>
      )}

      {/* Navigation buttons */}
      {activeIndex >= 0 && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
            disabled={activeIndex <= 0}
            className="glass-button w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30"
            aria-label="Previous card"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) => Math.min(prev + 1, items.length - 1))
            }
            disabled={activeIndex >= items.length - 1}
            className="glass-button w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30"
            aria-label="Next card"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
