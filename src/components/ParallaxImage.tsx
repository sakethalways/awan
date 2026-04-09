import { useRef, useEffect } from "react";
import { gsap, isMobile, prefersReducedMotion } from "@/hooks/useGsap";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  intensity?: number; // 0–1, how strong the parallax travels
  overlay?: boolean;
}

const ParallaxImage = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  intensity = 0.25,
  overlay = true,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !imgRef.current) return;
    if (prefersReducedMotion() || isMobile()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -intensity * 50 },
        {
          yPercent: intensity * 50,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative overflow-hidden", className)}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "absolute inset-0 w-full h-[120%] object-cover will-change-transform",
          imgClassName
        )}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default ParallaxImage;
