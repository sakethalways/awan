import { Link } from "react-router-dom";
import { Target, Eye, ArrowRight, Award, Users, Heart, Zap, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";

const values = [
  { icon: Shield, title: "Accountability & Ownership", desc: "We honor our commitments and consistently deliver exceptional results — no excuses, no shortcuts." },
  { icon: Heart, title: "Client Centricity", desc: "Our clients are at the heart of everything we do — every decision, every design, every delivery." },
  { icon: Star, title: "Exceptional Performance", desc: "We strive for excellence every day, pushing for the best possible outcomes for every client." },
  { icon: Zap, title: "Innovation & Speed", desc: "We combine digital innovation with speed and agility — always keeping outcomes at the center." },
];

const capabilities = [
  { title: "Digital Engineering", desc: "Building platforms and applications that adapt to evolving business demands." },
  { title: "Cloud Transformation", desc: "Designing and managing secure, scalable cloud environments end-to-end." },
  { title: "AI & Data", desc: "Turning raw data into insight and insight into competitive advantage." },
  { title: "Managed Services", desc: "Continuous support and operations so your teams can focus on growth." },
  { title: "Cybersecurity", desc: "Proactive security and governance frameworks built for modern threats." },
  { title: "Business Transformation", desc: "Strategy, change management, and process redesign that sticks." },
];

const About = () => {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">About AWAN Solutions</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
                Built to Transform. <span className="gradient-text">Driven to Deliver.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We partner with organizations to turn complex technology challenges into clear, scalable, and lasting digital outcomes — combining strategic depth with hands-on execution.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Who We Are</p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
                Accelerating business through <span className="gradient-text">intelligent technology</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AWAN Solutions is a digital business and technology services firm dedicated to helping organizations — from agile startups to large enterprises — move faster, operate smarter, and grow with confidence. We bring together deep technical expertise and a results-first mindset to solve the challenges that matter most.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our strength lies in blending world-class digital capabilities with a genuine commitment to our clients and communities. We don't just deliver projects — we build long-term partnerships grounded in trust, transparency, and measurable impact.
              </p>
              <div className="glass rounded-xl p-6 border-l-4 border-primary">
                <p className="text-foreground/80 italic">
                  "Our culture of innovation — and our relentless focus on solving real challenges for the organizations we serve — is what drives everything we do at AWAN Solutions."
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">— Leadership, AWAN Solutions</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 100, suffix: "+", label: "Technology Professionals" },
              { value: 10, suffix: "+", label: "Years Enterprise Experience" },
              { value: 50, suffix: "+", label: "Clients Served" },
              { value: 100, suffix: "%", label: "Outcome-Focused" },
            ].map((stat, i) => (
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

      {/* What We Do Best */}
      <section className="py-16 lg:py-20 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">What We Do Best</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display">
                Deep expertise. Proven technology. <span className="gradient-text">Real impact.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 80}>
                <div className="glass rounded-xl p-6 h-full group hover:bg-card/80 transition-all">
                  <h3 className="font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">How We Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display">
                Our values drive <span className="gradient-text">every engagement</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 80}>
                <div className="glass rounded-xl p-6 text-center h-full group hover:bg-card/80 transition-all">
                  <v.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Purpose</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display">
                Mission & <span className="gradient-text">Vision</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To persistently refine capabilities and enable long-term organizational success through technology and people-centric solutions that create real, lasting value." },
              { icon: Eye, title: "Our Vision", text: "To be recognized as an impactful, inventive, and reliable partner — delivering competitive, operational, and technology-driven transformation to clients worldwide." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="glass rounded-2xl p-8 h-full group hover:bg-card/80 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
              Ready to <span className="gradient-text">transform your business?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Partner with AWAN Solutions to turn your technology ambitions into measurable outcomes — from strategy through to scale.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
