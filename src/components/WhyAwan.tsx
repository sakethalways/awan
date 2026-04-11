import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger, isMobile, prefersReducedMotion } from "@/hooks/useGsap";

const valuePoints = [
  "Senior engineering muscle from day one",
  "Outcome-focused, not hours-focused",
  "Cloud-native, AI-ready architecture",
  "Transparent reporting and SLAs",
];

const WhyAwan = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      /* ---------- Background — pronounced parallax drift ---------- */
      if (!isMobile() && !prefersReducedMotion()) {
        gsap.fromTo(
          bgRef.current,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      /* ---------- Depth emerge + blur zoom, scrub 3-stage timeline ----------
         Stage 1 — content emerges from depth with blur (scale 0.5, blur 24px, z -600 → 0)
         Stage 2 — held at rest, fully clear and in focus
         Stage 3 — zooms past the viewer (scale 1.35, blur 18px, z 250 → gone)        */
      if (prefersReducedMotion()) {
        gsap.set(contentRef.current, { opacity: 1, scale: 1, filter: "blur(0px)", z: 0 });
        return;
      }

      if (isMobile()) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 2.5,
        },
      });

      // Stage 1 — emerge from depth
      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          scale: 0.5,
          z: -600,
          y: 80,
          rotateX: 15,
          filter: "blur(24px)",
        },
        {
          opacity: 1,
          scale: 1,
          z: 0,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          duration: 1.4,
        }
      )
        // Stage 2 — hold fully visible at rest
        .to(contentRef.current, {
          opacity: 1,
          scale: 1,
          z: 0,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.4,
        })
        // Stage 3 — zoom forward past the viewer + blur
        .to(contentRef.current, {
          opacity: 0,
          scale: 1.35,
          z: 250,
          y: -60,
          rotateX: -12,
          filter: "blur(18px)",
          ease: "power3.in",
          duration: 1.4,
        });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 lg:py-40 lg:min-h-[140vh] flex items-center"
      style={{ perspective: "1400px" }}
    >
      {/* Full-bleed background — taller than the section so parallax has
          room to travel without exposing edges. Top + bottom are masked
          to fade smoothly into the page background. */}
      <div
        ref={bgRef}
        className="absolute -top-[15%] left-0 right-0 h-[130%] will-change-transform"
        style={{
          backgroundImage: "url(/download.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      />

      {/* Side + readability scrims (no top/bottom darkening — the mask handles fade-out) */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/25 to-background/40" />
      {/* Extra background-color blends at the very top + bottom edges so the
          mask fade lands on solid color, not a half-transparent void */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* CONTENT — no card, sits directly on the background */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            Why AWAN
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 leading-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
            Engineering teams who{" "}
            <span className="gradient-text">ship outcomes</span>, not
            deliverables.
          </h2>
          <p className="text-sm sm:text-base text-foreground/90 mb-6 sm:mb-10 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] max-w-xl mx-auto">
            We pair deep technical expertise with a results-first mindset. Our
            blended teams plug into your organization, ramp fast, and stay
            focused on the metrics that matter to your business.
          </p>
          <div className="flex justify-center mb-10">
            <div className="bg-card/40 backdrop-blur-2xl border border-glass-border rounded-2xl p-6 sm:p-7 text-left">
              <div className="space-y-3">
                {valuePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/95">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg shadow-primary/30"
          >
            <Link to="/about">
              Learn About Us <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyAwan;
