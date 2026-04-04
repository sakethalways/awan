import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Code2, Brain, Cloud, ShieldCheck, Layers, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";

const ParticleField = lazy(() => import("@/components/ParticleField"));

const services = [
  {
    icon: Briefcase,
    title: "Business Transformation",
    desc: "Aligning people, processes, and technology to unlock new efficiencies, accelerate growth, and build resilience.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Code2,
    title: "Digital Engineering",
    desc: "Modern, scalable, and resilient applications built with agile methodologies and DevSecOps principles.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Brain,
    title: "AI & GenAI",
    desc: "From foundational ML models to cutting-edge Generative AI — responsible, production-ready implementations.",
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
    desc: "Proactive, layered cybersecurity covering your entire attack surface — security as a business enabler.",
    color: "from-secondary to-accent",
  },
  {
    icon: Layers,
    title: "Platform Modernization",
    desc: "Transition seamlessly to modern, composable architectures without disrupting business continuity.",
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
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
              Trusted by 50+ clients worldwide
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 text-balance">
              Built to Transform.
              <br />
              <span className="gradient-text">Driven to Deliver.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Integrated consulting, engineering, cloud, cybersecurity, and managed services — designed to help organizations transform, scale, and operate with confidence.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border bg-card/40 backdrop-blur-sm hover:bg-card/60 font-medium"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">What We Offer</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                End-to-End Solutions That <span className="gradient-text">Scale</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From strategy to execution, we handle every aspect of your digital transformation journey.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 80}>
                <div className="group relative glass rounded-xl p-6 lg:p-8 hover:bg-card/80 transition-all duration-500 h-full">
                  <div className="gradient-border rounded-xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-sm text-primary font-medium hover:gap-2 gap-1 transition-all"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 80} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold font-display gradient-text mb-1">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
              <div className="gradient-border rounded-2xl absolute inset-0" />
              <div className="relative z-10 glass rounded-2xl text-center py-14 px-6 lg:px-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-4">
                  Ready to <span className="gradient-text">Transform</span> Your Business?
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                  Partner with AWAN Solutions to turn your technology ambitions into measurable outcomes — from strategy through to scale.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  <Link to="/contact">
                    Get Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
