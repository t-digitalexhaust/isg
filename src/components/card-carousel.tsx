"use client";

import type React from "react";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardCarouselProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function CardCarousel({ items }: CardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return (
    <div className="relative" ref={carouselRef}>
      <div
        className="overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative transition-all duration-500 ease-in-out h-[400px] md:h-[350px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full glass-card p-6 transition-all duration-500 ease-in-out ${
                index === activeIndex
                  ? "opacity-100 translate-x-0 z-10"
                  : index < activeIndex
                  ? "opacity-0 -translate-x-full z-0"
                  : "opacity-0 translate-x-full z-0"
              }`}
            >
              <h4 className="text-xl font-medium mb-4 text-primary dark:text-secondary">
                {item.title}
              </h4>
              <div className="text-base text-foreground dark:text-foreground overflow-auto h-[calc(100%-3rem)]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-primary dark:bg-secondary scale-125"
                  : "bg-primary/30 dark:bg-secondary/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="glass"
            size="icon"
            onClick={goToPrev}
            className="h-8 w-8"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            onClick={goToNext}
            className="h-8 w-8"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
