"use client";

import { useState, useEffect, useRef } from "react";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0, triggerOnce = false, rootMargin = "0px" } = options;
  const [inView, setInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If we've already triggered once and triggerOnce is true, don't re-observe
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;

        setInView(isIntersecting);

        if (isIntersecting && triggerOnce) {
          setHasTriggered(true);
          // Clean up observer if triggerOnce is true and we've triggered
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current = observer;

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, rootMargin, hasTriggered]);

  // Set up the observer when the ref changes
  useEffect(() => {
    const currentRef = ref.current;
    const currentObserver = observerRef.current;

    if (currentRef && currentObserver) {
      currentObserver.observe(currentRef);
    }

    return () => {
      if (currentRef && currentObserver) {
        currentObserver.unobserve(currentRef);
      }
    };
  }, [ref.current]);

  return [ref, inView] as const;
}
