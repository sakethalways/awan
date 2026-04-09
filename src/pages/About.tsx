import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import CounterAnimation from "@/components/CounterAnimation";
import { gsap, isMobile, prefersReducedMotion } from "@/hooks/useGsap";

const values = [
  {
    icon: Shield,
    title: "Accountability & Ownership",
    desc: "We honor our commitments and consistently deliver exceptional results — no excuses, no shortcuts.",
  },
  {
    icon: Heart,
    title: "Client Centricity",
    desc: "Our clients are at the heart of everything we do — every decision, every design, every delivery.",
  },
  {
    icon: Star,
    title: "Exceptional Performance",
    desc: "We strive for excellence every day, pushing for the best possible outcomes for every client.",
  },
  {
    icon: Zap,
    title: "Innovation & Speed",
    desc: "We combine digital innovation with speed and agility — always keeping outcomes at the center.",
  },
];

const capabilities = [
  {
    title: "Digital Engineering",
    desc: "Building platforms and applications that adapt to evolving business demands.",
  },
  {
    title: "Cloud Transformation",
    desc: "Designing and managing secure, scalable cloud environments end-to-end.",
  },
  {
    title: "AI & Data",
    desc: "Turning raw data into insight and insight into competitive advantage.",
  },
  {
    title: "Managed Services",
    desc: "Continuous support and operations so your teams can focus on growth.",
  },
  {
    title: "Cybersecurity",
    desc: "Proactive security and governance frameworks built for modern threats.",
  },
  {
    title: "Business Transformation",
    desc: "Strategy, change management, and process redesign that sticks.",
  },
];

const About = () => {
  const capBgRef = useRef<HTMLDivElement>(null);
  const capSectionRef = useRef<HTMLElement>(null);
  const valuesGridRef = useRef<HTMLDivElement>(null);
  const purposeGridRef = useRef<HTMLDivElement>(null);

  // Capabilities bg parallax
  useEffect(() => {
    if (!capBgRef.current || !capSectionRef.current) return;
    if (isMobile() || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        capBgRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: capSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, capSectionRef);

    return () => ctx.revert();
  }, []);

  // How We Work — cards spread from center to their positions
  useEffect(() => {
    if (!valuesGridRef.current || prefersReducedMotion()) return;

    const cards = gsap.utils.toArray<HTMLElement>(".value-card", valuesGridRef.current);
    if (cards.length === 0) return;

    // Calculate center position of the grid
    const ctx = gsap.context(() => {
      // Measure each card's offset from the grid center
      const grid = valuesGridRef.current!;
      const gridRect = grid.getBoundingClientRect();
      const gridCenterX = gridRect.width / 2;
      const gridCenterY = gridRect.height / 2;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left - gridRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top - gridRect.top + cardRect.height / 2;

        // How far to move from center to reach this card's position
        const offsetX = gridCenterX - cardCenterX;
        const offsetY = gridCenterY - cardCenterY;

        gsap.fromTo(
          card,
          { opacity: 0, x: offsetX, y: offsetY, scale: 0.7 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: grid,
              start: "top 100%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    }, valuesGridRef);

    return () => ctx.revert();
  }, []);

  // Mission & Vision — slide from opposite sides, in sync
  useEffect(() => {
    if (!purposeGridRef.current || prefersReducedMotion()) return;

    const cards = gsap.utils.toArray<HTMLElement>(".purpose-card", purposeGridRef.current);
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i === 0 ? -80 : 80, scale: 0.85 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: purposeGridRef.current,
              start: "top 105%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      });
    }, purposeGridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 relative">
      {/* HERO — full-bleed background with masked fade edges */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <ParallaxImage
          src="/about.jpg"
          alt="About AWAN"
          className="absolute -top-[15%] left-0 right-0 h-[130%] opacity-60"
          imgClassName="[mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]"
          intensity={0.25}
          overlay={false}
        />
        {/* Side scrim — top/bottom handled by mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/40" />
        {/* Background-color blends so the masked fade lands on solid color */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal className="max-w-3xl mx-auto">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              About AWAN Solutions
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6 leading-[1.08] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
              Built to Transform.
              <br />
              <span className="gradient-text">Driven to Deliver.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-foreground/85 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              We partner with organizations to turn complex technology challenges
              into clear, scalable, and lasting digital outcomes — combining
              strategic depth with hands-on execution.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg shadow-primary/30"
            >
              <Link to="/contact">
                Work With Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE — text block on warm card */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="glass-warm rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 max-w-5xl mx-auto relative overflow-hidden noise-overlay">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
              <div className="relative">
                <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                  Who We Are
                </p>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display mb-3 sm:mb-4">
                  Accelerating business through{" "}
                  <span className="gradient-text">intelligent technology</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                  AWAN Solutions is a digital business and technology services firm
                  dedicated to helping organizations — from agile startups to large
                  enterprises — move faster, operate smarter, and grow with
                  confidence.
                </p>
                <p className="hidden sm:block text-muted-foreground leading-relaxed mb-6">
                  Our strength lies in blending world-class digital capabilities with
                  a genuine commitment to our clients and communities. We don't just
                  deliver projects — we build long-term partnerships grounded in
                  trust, transparency, and measurable impact.
                </p>
                <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-accent">
                  <p className="text-sm sm:text-base text-foreground/85 italic leading-relaxed">
                    "Our culture of innovation — and our relentless focus on solving
                    real challenges for the organizations we serve — is what drives
                    everything we do at AWAN Solutions."
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 font-medium">
                    — Leadership, AWAN Solutions
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS with parallax bg */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <ParallaxImage
          src="/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"
          alt="Network"
          className="absolute inset-0 w-full h-full opacity-25"
          intensity={0.3}
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 100, suffix: "+", label: "Technology Professionals" },
              { value: 10, suffix: "+", label: "Years Enterprise Experience" },
              { value: 50, suffix: "+", label: "Clients Served" },
              { value: 100, suffix: "%", label: "Outcome-Focused" },
            ].map((stat, i) => (
              <Reveal
                key={stat.label}
                direction="scale"
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold font-display gradient-text mb-2">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — gradient bg on mobile, image bg on desktop */}
      <section ref={capSectionRef} className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        {/* Mobile — gradient mesh background */}
        <div className="absolute inset-0 lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/15" />
          <div className="absolute top-0 right-0 w-[70%] h-[60%] bg-gradient-to-bl from-secondary/15 via-transparent to-transparent rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-gradient-to-tr from-accent/15 via-transparent to-transparent rounded-full blur-[80px]" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        {/* Desktop — image background with parallax */}
        <div
          ref={capBgRef}
          className="absolute -top-[15%] left-0 right-0 h-[130%] will-change-transform hidden lg:block"
          style={{
            backgroundImage:
              "url('/Blue%20and%20Purple%20Modern%20Computer%20Presentation_page-0001.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-background/80 via-background/45 to-background/25" />
        <div className="absolute top-0 left-0 right-0 h-44 hidden lg:block bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-44 hidden lg:block bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              What We Do Best
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
              Deep expertise. Proven technology.
              <br />
              <span className="gradient-text">Real impact.</span>
            </h2>
          </Reveal>

          <Reveal className="max-w-2xl">
            <div className="bg-card/40 backdrop-blur-2xl border border-glass-border rounded-2xl p-6 sm:p-8 space-y-5">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-0.5">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              Our values drive{" "}
              <span className="gradient-text">every engagement</span>
            </h2>
          </Reveal>

          <div ref={valuesGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card glass rounded-2xl p-6 text-center h-full group hover:bg-card/80 hover:-translate-y-1 transition-[background,transform] duration-500"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              Our Purpose
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              Mission & <span className="gradient-text-warm">Vision</span>
            </h2>
          </Reveal>
          <div ref={purposeGridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To persistently refine capabilities and enable long-term organizational success through technology and people-centric solutions that create real, lasting value.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be recognized as an impactful, inventive, and reliable partner — delivering competitive, operational, and technology-driven transformation to clients worldwide.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="purpose-card glass rounded-3xl p-8 lg:p-10 h-full group hover:bg-card/80 transition-[background] duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-bleed background with masked fade edges */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <ParallaxImage
          src="/sander-weeteling-KABfjuSOx74-unsplash.jpg"
          alt="Fiber optics"
          className="absolute -top-[15%] left-0 right-0 h-[130%] opacity-60"
          imgClassName="[mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]"
          intensity={0.25}
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/85" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4 drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
              Ready to{" "}
              <span className="gradient-text-warm">transform your business?</span>
            </h2>
            <p className="text-foreground/85 max-w-lg mx-auto mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              Partner with AWAN Solutions to turn your technology ambitions into
              measurable outcomes — from strategy through to scale.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90 shadow-lg shadow-primary/30"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
