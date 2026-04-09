import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, prefersReducedMotion } from "@/hooks/useGsap";

const slides = [
  "/richard-horvath-cPccYbPrF-A-unsplash.jpg",
  "/igor-omilaev-gVQLAbGVB6Q-unsplash.jpg",
];

const SLIDE_DURATION = 5000; // ms each slide is visible
const FADE_DURATION = 1.4; // seconds for crossfade

const Hero = () => {
  const root = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ---------- Carousel: crossfade + slow Ken-Burns zoom (desktop only) ---------- */
  useEffect(() => {
    // Skip carousel on mobile — only the first (richard-horvath) image is shown
    const mobileMq = window.matchMedia("(max-width: 1023px)");
    if (mobileMq.matches) return;

    // Initial state — first slide visible, rest hidden
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: 1.1 });
    });

    // Slow zoom on the first slide right away
    if (slideRefs.current[0]) {
      gsap.to(slideRefs.current[0], {
        scale: 1.2,
        duration: (SLIDE_DURATION + FADE_DURATION * 1000) / 1000,
        ease: "none",
      });
    }

    let active = 0;
    const interval = setInterval(() => {
      const next = (active + 1) % slides.length;
      const outEl = slideRefs.current[active];
      const inEl = slideRefs.current[next];
      if (!outEl || !inEl) return;

      gsap.to(outEl, { opacity: 0, duration: FADE_DURATION, ease: "power2.inOut" });
      gsap.fromTo(
        inEl,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          duration: FADE_DURATION,
          ease: "power2.inOut",
          onStart: () => {
            // Begin Ken-Burns zoom for the new slide
            gsap.to(inEl, {
              scale: 1.2,
              duration: (SLIDE_DURATION + FADE_DURATION * 1000) / 1000,
              ease: "none",
            });
          },
        }
      );

      active = next;
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  /* ---------- Text entrance timeline ---------- */
  useEffect(() => {
    if (!root.current) return;

    const mobile = window.matchMedia("(max-width: 1023px)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion() || mobile) {
        gsap.set(
          [
            "[data-hero='title-line']",
            "[data-hero='sub']",
            "[data-hero='cta']",
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(
          "[data-hero='title-line']",
          { y: 50, opacity: 0, duration: 1, stagger: 0.12 }
        )
        .from("[data-hero='sub']", { y: 25, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(
          "[data-hero='cta']",
          { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.5"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-20 pb-10 sm:pb-16 overflow-hidden"
    >
      {/* CAROUSEL — full background. On mobile only the first slide renders. */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={src}
            ref={(el) => (slideRefs.current[i] = el)}
            className={`absolute inset-0 will-change-transform ${
              i === 0 ? "" : "hidden lg:block"
            }`}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Readability scrim — stronger on mobile for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/35 lg:from-background/80 lg:via-background/55 lg:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:via-background/40" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-display leading-[1.08] mb-4 sm:mb-6 text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]">
            <span data-hero="title-line" className="block">
              Built to{" "}
              <span className="gradient-text">Transform.</span>
            </span>
            <span data-hero="title-line" className="block">
              Driven to{" "}
              <span className="gradient-text-warm">Deliver.</span>
            </span>
          </h1>

          <p
            data-hero="sub"
            className="text-sm sm:text-base lg:text-lg text-foreground/85 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] px-2 sm:px-0"
          >
            Integrated consulting, engineering, cloud, cybersecurity, and managed
            services — designed to help organizations transform, scale, and operate
            with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-center">
            <Button
              asChild
              size="sm"
              data-hero="cta"
              className="w-auto sm:!h-11 sm:!px-7 sm:!text-base bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 shadow-lg shadow-primary/30"
            >
              <Link to="/contact">
                Start Your Journey <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              data-hero="cta"
              className="w-auto sm:!h-11 sm:!px-7 sm:!text-base border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:border-accent/40 font-medium text-foreground hover:text-foreground"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Mini stats row */}
          <div
            data-hero="cta"
            className="mt-8 sm:mt-12 grid grid-cols-4 gap-3 sm:gap-8 max-w-xl mx-auto"
          >
            {[
              { v: "50+", l: "Clients" },
              { v: "10+", l: "Years" },
              { v: "200+", l: "Projects" },
              { v: "98%", l: "Retention" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-xl sm:text-3xl font-bold font-display gradient-text">
                  {s.v}
                </div>
                <div className="text-xs text-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
