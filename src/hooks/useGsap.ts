import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Detect reduced motion / small screens to gracefully simplify animations.
 */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isMobile = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

/**
 * useGsapContext: cleanly scopes a GSAP setup to a ref and disposes on unmount.
 * Pass a callback that receives the root element. Inside, register ScrollTriggers freely.
 */
export const useGsapContext = <T extends HTMLElement = HTMLDivElement>(
  setup: (root: T) => void,
  deps: unknown[] = []
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => setup(ref.current as T), ref);
    // Recompute trigger positions once mounted (images loading etc.)
    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
};

export { gsap, ScrollTrigger };
