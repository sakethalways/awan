import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import CounterAnimation from "@/components/CounterAnimation";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Northwind Logistics",
    initials: "SM",
    rating: 5,
    text: "AWAN re-architected our legacy fleet platform on the cloud and the results were immediate — 40% faster deployments and a noticeable drop in incidents. Their team felt like an extension of ours from day one.",
  },
  {
    name: "David Okafor",
    role: "VP Engineering",
    company: "Helios Fintech",
    initials: "DO",
    rating: 5,
    text: "We needed a partner who understood both compliance and modern engineering. AWAN delivered a secure data platform on time and well under our risk thresholds. Easily the smoothest vendor engagement we've had.",
  },
  {
    name: "Priya Raghavan",
    role: "Head of Digital",
    company: "Meridian Retail Group",
    initials: "PR",
    rating: 5,
    text: "Their AI personalization work lifted our conversion rate by 28% in the first quarter. What stood out most was how clearly they communicated trade-offs — no jargon, just outcomes.",
  },
  {
    name: "Marcus Lindberg",
    role: "CIO",
    company: "Brightline Manufacturing",
    initials: "ML",
    rating: 5,
    text: "AWAN handled a complex SAP-to-cloud migration for us with zero downtime. They genuinely cared about getting it right, not just getting it done. We've since expanded the relationship across three business units.",
  },
  {
    name: "Elena Kovács",
    role: "Director of Operations",
    company: "Aurora Health Systems",
    initials: "EK",
    rating: 5,
    text: "From discovery through go-live, the AWAN team brought rigor, empathy, and real expertise. Our clinicians now spend less time fighting software and more time with patients. That's the impact we were hoping for.",
  },
  {
    name: "James Whitfield",
    role: "Founder & CEO",
    company: "Lattice Robotics",
    initials: "JW",
    rating: 5,
    text: "As a fast-moving startup we needed senior engineering muscle without the overhead. AWAN plugged in seamlessly and shipped production-ready code from week one. They're now our default first call.",
  },
];

const clients = [
  "Northwind Logistics",
  "Helios Fintech",
  "Meridian Retail",
  "Brightline Mfg.",
  "Aurora Health",
  "Lattice Robotics",
  "Cobalt Energy",
  "Vanta Capital",
];

const Clients = () => {
  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 relative">
      {/* HEADER — gradient on mobile, image on desktop */}
      <section className="pt-12 sm:pt-16 lg:pt-24 pb-20 sm:pb-32 lg:pb-48 relative overflow-hidden">
        {/* Mobile — gradient mesh */}
        <div className="absolute inset-0 lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/15" />
          <div className="absolute top-0 left-0 w-[65%] h-[55%] bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-[60%] h-[50%] bg-gradient-to-tl from-accent/15 via-transparent to-transparent rounded-full blur-[80px]" />
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        {/* Desktop — image with parallax */}
        <ParallaxImage
          src="/igor-omilaev-gVQLAbGVB6Q-unsplash.jpg"
          alt="Human and AI"
          className="absolute -top-[10%] left-0 right-0 h-[120%] opacity-80 hidden lg:block"
          imgClassName="object-[center_35%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)]"
          intensity={0.2}
          overlay={false}
        />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-background/50 via-background/25 to-background/50" />
        <div className="absolute top-0 left-0 right-0 h-32 hidden lg:block bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 hidden lg:block bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
                Our Clients
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-display mb-4 sm:mb-6">
                Trusted by teams who{" "}
                <span className="gradient-text">build what's next.</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                From global enterprises to ambitious startups, organizations partner
                with AWAN Solutions to turn complex technology challenges into
                measurable business outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Reveal stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 50, suffix: "+", label: "Clients Served" },
              { value: 98, suffix: "%", label: "Client Retention" },
              { value: 200, suffix: "+", label: "Projects Delivered" },
              { value: 15, suffix: "+", label: "Industries Covered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold font-display gradient-text mb-2">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Client tiles */}
      <section className="py-12 lg:py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <Reveal>
            <p className="text-center text-accent text-sm font-semibold uppercase tracking-wider mb-8">
              A few of the teams we work with
            </p>
          </Reveal>
          <Reveal
            stagger
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {clients.map((c) => (
              <div
                key={c}
                className="glass rounded-2xl px-4 py-6 flex items-center justify-center gap-2.5 group hover:bg-card/80 hover:-translate-y-1 transition-all"
              >
                <Building2 className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground/85">
                  {c}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* REVIEWS — masonry-ish staggered grid */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              What They Say
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              Real words from <span className="gradient-text">real partners</span>
            </h2>
          </Reveal>

          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`glass rounded-3xl p-6 lg:p-7 h-full flex flex-col group hover:bg-card/80 hover:-translate-y-1 transition-all duration-500 ${
                  i % 2 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <Quote className="w-8 h-8 text-accent/60 mb-4 group-hover:scale-110 group-hover:text-accent transition-all" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{r.text}"
                </p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">
                      {r.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {r.role} · {r.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
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
              Want to be our{" "}
              <span className="gradient-text-warm">next success story?</span>
            </h2>
            <p className="text-foreground/85 max-w-lg mx-auto mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              Let's talk about what you're building — and how AWAN Solutions can
              help you get there faster.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90 shadow-lg shadow-primary/30"
            >
              <Link to="/contact">
                Start a Conversation <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Clients;
