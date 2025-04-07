"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    checkIfMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 shadow-md"
          : "fixed top-0 left-0 right-0 z-50"
      }
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.6)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        transition: "all 300ms",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: isScrolled ? "#211f60" : "#211f60",
            }}
            className="dark:text-[#ffc602]"
          >
            ISG.TV
          </span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="glass-button h-10 w-10 rounded-md flex items-center justify-center"
              style={{
                color: isScrolled ? undefined : "#211f60",
              }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        ) : (
          <nav className="flex items-center gap-8">
            <div
              className="rounded-full px-6 py-2 flex items-center gap-6 border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(8px)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <button
                onClick={() => scrollToSection("who-we-are")}
                className="transition-colors"
                style={{
                  color: isScrolled ? "rgba(15, 23, 42, 0.8)" : "#211f60",
                }}
              >
                Who We Are
              </button>
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="transition-colors"
                style={{
                  color: isScrolled ? "rgba(15, 23, 42, 0.8)" : "#211f60",
                }}
              >
                What We Do
              </button>
              <button
                onClick={() => scrollToSection("work-with-us")}
                className="transition-colors"
                style={{
                  color: isScrolled ? "rgba(15, 23, 42, 0.8)" : "#211f60",
                }}
              >
                Work With Us
              </button>
              <button
                onClick={() => scrollToSection("partner-with-us")}
                className="transition-colors"
                style={{
                  color: isScrolled ? "rgba(15, 23, 42, 0.8)" : "#211f60",
                }}
              >
                Partner With Us
              </button>
            </div>
            <ThemeToggle />
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 border-t"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("who-we-are")}
              className="py-2 transition-colors"
              style={{ color: "rgba(15, 23, 42, 0.8)" }}
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="py-2 transition-colors"
              style={{ color: "rgba(15, 23, 42, 0.8)" }}
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("work-with-us")}
              className="py-2 transition-colors"
              style={{ color: "rgba(15, 23, 42, 0.8)" }}
            >
              Work With Us
            </button>
            <button
              onClick={() => scrollToSection("partner-with-us")}
              className="py-2 transition-colors"
              style={{ color: "rgba(15, 23, 42, 0.8)" }}
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
