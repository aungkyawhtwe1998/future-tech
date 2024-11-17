"use client";
import { useEffect, useRef, useState, RefObject } from "react";

// Hook for detecting element visibility
export function useOnScreen(
  ref: RefObject<Element>,
  rootMargin = "0px",
  threshold = 0.1
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const hasAnimated = useRef(false); // Use a ref to track animation state

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsIntersecting(true); // Trigger the animation
          hasAnimated.current = true; // Prevent further animations
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin, threshold]); // hasAnimated doesn't need to be in the dependency array

  return isIntersecting;
}

// FadeIn Component
export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref, "-50px");

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// SlideUp Component
export const SlideUp = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref, "-50px");

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// ZoomIn Component
export const ZoomIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref, "-50px");

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
