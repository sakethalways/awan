import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Brain,
  Cloud,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import WhyAwan from "@/components/WhyAwan";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import CounterAnimation from "@/components/CounterAnimation";
import ServicesGrid from "@/components/ServicesGrid";

const services = [
  {
    icon: Briefcase,
    title: "Business Transformation",
    desc: "Aligning people, processes, and technology to unlock new efficiencies and accelerate growth.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Code2,
    title: "Digital Engineering",
    desc: "Modern, scalable, and resilient applications built with agile and DevSecOps principles.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Brain,
    title: "AI & GenAI",
    desc: "From foundational ML to cutting-edge Generative AI — responsible, production-ready.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    desc: "Migrate, modernize, and maximize your cloud investment across AWS, Azure, and GCP.",
    color: "from-primary to-secondary",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Proactive, layered cybersecurity covering your entire attack surface — security as enabler.",
    color: "from-secondary to-accent",
  },
  {
    icon: Layers,
    title: "Platform Modernization",
    desc: "Transition to modern, composable architectures without disrupting business continuity.",
    color: "from-accent to-primary",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Technology Professionals" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "%", label: "Outcome-Focused" },
];

const Index = () => {
  return (
    <div className="relative">
      {/* Hero (new) */}
      <Hero />

      {/* Services Preview */}
      <section className="py-14 sm:py-20 lg:py-28 relative">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-8 sm:mb-14 max-w-2xl mx-auto">
            <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
              End-to-End Solutions That{" "}
              <span className="gradient-text">Scale</span>
            </h2>
            <p className="text-muted-foreground">
              From strategy to execution, we handle every aspect of your digital
              transformation journey.
            </p>
          </Reveal>

          <ServicesGrid services={services} />
        </div>
      </section>

      {/* WHY AWAN — image background + scroll-driven flip card */}
      <WhyAwan />

      {/* Stats — plain background */}
      <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden border-y border-border">
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              The Numbers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              A track record built on{" "}
              <span className="gradient-text">delivery</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                className="text-center"
                direction="scale"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display gradient-text mb-2">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-bleed background with masked fade edges */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <ParallaxImage
          src="/sander-weeteling-KABfjuSOx74-unsplash.jpg"
          alt="Fiber optics"
          className="absolute -top-[15%] left-0 right-0 h-[130%] opacity-60"
          imgClassName="[mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]"
          intensity={0.25}
          overlay={false}
        />
        {/* Side scrim only — top/bottom are handled by the mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/85" />
        {/* Background-color blends at the very top + bottom edges so the mask
            fade lands on solid color */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <Reveal direction="scale">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-5 drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
                Ready to <span className="gradient-text-warm">Transform</span> Your
                Business?
              </h2>
              <p className="text-foreground/85 max-w-xl mx-auto mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                Partner with AWAN Solutions to turn your technology ambitions into
                measurable outcomes — from strategy through to scale.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90 shadow-lg shadow-primary/30"
              >
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
