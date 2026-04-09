import { ReactNode, useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "@/hooks/useGsap";

interface Props {
  children: ReactNode;
  className?: string;
  y?: number;
  direction?: "up" | "left" | "right" | "scale";
  stagger?: boolean;
}

const Reveal = ({
  children,
  className = "",
  y = 30,
  direction = "up",
  stagger = false,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (stagger) {
        // Each child gets its own scroll-linked animation
        const kids = ref.current!.children;
        Array.from(kids).forEach((child) => {
          const from: gsap.TweenVars = { opacity: 0, y: 25 };
          gsap.fromTo(child, from, {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: child as Element,
              start: "top 100%",
              end: "top 80%",
              scrub: true,
            },
          });
        });
      } else {
        const from: gsap.TweenVars = { opacity: 0 };
        if (direction === "up") from.y = y;
        if (direction === "left") from.x = -y;
        if (direction === "right") from.x = y;
        if (direction === "scale") {
          from.scale = 0.92;
          from.y = 15;
        }

        gsap.fromTo(ref.current, from, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 100%",
            end: "top 80%",
            scrub: true,
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [y, direction, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
