import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for small businesses and startups getting started with cloud.",
    features: [
      "Up to 5 cloud instances",
      "100 GB cloud storage",
      "Basic monitoring & alerts",
      "Email support (24h response)",
      "SSL certificates included",
      "Weekly automated backups",
    ],
    cta: "Get in Touch",
    highlighted: false,
  },
  {
    name: "Professional",
    desc: "For growing businesses that need robust infrastructure and support.",
    features: [
      "Up to 25 cloud instances",
      "1 TB cloud storage",
      "Advanced monitoring & APM",
      "Priority support (4h response)",
      "Load balancing & CDN",
      "Daily automated backups",
      "Migration assistance included",
      "Custom domain management",
    ],
    cta: "Get in Touch",
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "Tailored solutions for large organizations with complex requirements.",
    features: [
      "Unlimited cloud instances",
      "Unlimited storage",
      "Full observability suite",
      "Dedicated account manager",
      "24/7 premium support (1h SLA)",
      "Real-time replication & DR",
      "Compliance consulting (SOC2, HIPAA)",
      "Custom SLA agreements",
      "On-site training & workshops",
    ],
    cta: "Contact for Custom Pricing",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Pricing</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Transparent <span className="gradient-text">Plans</span> for Every Scale
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All plans are customized to your needs. Contact us for a personalized quote — no hidden fees, no surprises.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 100}>
                <div
                  className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col ${
                    plan.highlighted
                      ? "glass glow-blue border-primary/30"
                      : "glass"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-primary-foreground">
                      <Star className="w-3 h-3" /> Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-display mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="text-2xl font-bold font-display gradient-text mb-6">
                    Custom Pricing
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Link to="/contact">
                      {plan.cta} <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style note */}
      <section className="py-16 lg:py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
              Need a <span className="gradient-text">custom solution?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Our cloud architects will design a bespoke infrastructure plan optimized for your workloads and budget.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90"
            >
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
