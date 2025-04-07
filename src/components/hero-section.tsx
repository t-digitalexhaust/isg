"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 500;
      const translateY = scrollY * 0.5;

      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const whoWeAreSection = document.getElementById("who-we-are");
    if (whoWeAreSection) {
      const offsetTop =
        whoWeAreSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#ffc602] dark:bg-[#211f60]">
      <div
        className="absolute inset-0 bg-[#ffc602]/20 dark:bg-[#211f60]/30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 198, 2, 0.2) 100%)`,
        }}
      />
      <div
        ref={heroRef}
        className="container mx-auto px-4 text-center z-10 transition-all duration-300"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#211f60] dark:text-[#ffc602]">
          Indigo Fiber Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#211f60]/80 dark:text-[#ffc602]/80">
          <span className="hidden md:inline">
            Specialized outsourced sales & marketing services for ISPs
          </span>
          <span className="md:hidden">Sales & marketing for ISPs</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="glass-button h-11 px-8 rounded-md font-medium"
            onClick={() => {
              const interviewForm = document.getElementById("interview-form");
              if (interviewForm) interviewForm.classList.remove("hidden");
            }}
          >
            I Want to Interview
          </button>
          <button
            className="glass-button h-11 px-8 rounded-md font-medium"
            onClick={() => {
              const partnerSection = document.getElementById("partner-with-us");
              if (partnerSection) {
                const offsetTop =
                  partnerSection.getBoundingClientRect().top +
                  window.pageYOffset;
                window.scrollTo({
                  top: offsetTop - 100,
                  behavior: "smooth",
                });
              }
            }}
          >
            Partner With Us
          </button>
        </div>
      </div>
      <button
        className="glass-button absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce h-10 w-10 rounded-full flex items-center justify-center"
        onClick={scrollToNextSection}
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
