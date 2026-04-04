import { Link } from "react-router-dom";
import {
  ArrowRight, Check, Briefcase, Code2, Brain, Cloud, ShieldCheck, Layers, Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Briefcase,
    title: "Business Transformation",
    tagline: "Aligning Technology with Business Strategy for Lasting Impact",
    desc: "We help organizations reimagine how they operate — aligning people, processes, and technology to unlock new efficiencies, accelerate growth, and build resilience.",
    color: "from-primary to-primary/60",
    capabilities: [
      "IT Strategy & Consulting",
      "Customer Experience (CX)",
      "Change Management",
      "Business Process Services",
      "Finance & Risk Management",
      "Supply Chain & Operations",
    ],
  },
  {
    icon: Code2,
    title: "Digital Engineering",
    tagline: "Engineering the Digital Experiences of Tomorrow",
    desc: "From intelligent automation to IoT-connected ecosystems, our digital engineering practice helps you build modern, scalable, and resilient applications with agile methodologies and DevSecOps principles.",
    color: "from-secondary to-secondary/60",
    capabilities: [
      "Application Development",
      "Intelligent Automation (RPA)",
      "IoT & Edge Solutions",
      "Quality Engineering",
      "Site Reliability Engineering (SRE)",
      "DevSecOps",
    ],
  },
  {
    icon: Brain,
    title: "AI & GenAI",
    tagline: "Unlock Intelligence. Automate Decisions. Scale Outcomes.",
    desc: "We help organizations harness the full potential of artificial intelligence — from foundational ML models to cutting-edge Generative AI, grounded in responsible, production-ready implementations.",
    color: "from-accent to-accent/60",
    capabilities: [
      "Generative AI Solutions & LLMs",
      "AI & Machine Learning (MLOps)",
      "Data Analytics & Insights",
      "Data Engineering",
      "AI Strategy & Readiness",
      "Conversational AI & NLP",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    tagline: "Migrate, Modernize, and Maximize Your Cloud Investment",
    desc: "Our cloud practice helps organizations move from legacy infrastructure to agile, cost-efficient, and secure cloud environments across AWS, Azure, and GCP — with minimal disruption.",
    color: "from-primary to-secondary",
    capabilities: [
      "Cloud Strategy & Migration",
      "Cloud Engineering & Architecture",
      "Data & Analytics Cloud",
      "Cloud Security & Governance",
      "FinOps & Cloud Cost Optimization",
      "Cloud Platform Tools & Ecosystems",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    tagline: "Protect What Matters. Govern with Confidence.",
    desc: "AWAN delivers a proactive, layered cybersecurity practice covering your entire attack surface — from cloud infrastructure and application security to identity, governance, and compliance.",
    color: "from-secondary to-accent",
    capabilities: [
      "Cloud Security",
      "Application Security",
      "Identity & Access Management (IAM)",
      "Threat Detection & Response (SOC)",
      "Governance, Risk & Compliance (GRC)",
      "Vulnerability Management",
    ],
  },
  {
    icon: Layers,
    title: "Platform Modernization",
    tagline: "Modernize Legacy. Build for What's Next.",
    desc: "Our platform modernization practice helps you transition seamlessly to modern, composable architectures — without disrupting business continuity or sacrificing stability.",
    color: "from-accent to-primary",
    capabilities: [
      "Legacy Application Modernization",
      "Platform Engineering",
      "Low-Code / No-Code Solutions",
      "SAP Services",
      "Microsoft & Oracle Modernization",
      "API & Integration Modernization",
    ],
  },
  {
    icon: Headphones,
    title: "Managed Services",
    tagline: "Run Better. Focus on What Matters Most.",
    desc: "Free your teams from the operational burden of managing complex IT environments. AWAN provides proactive, SLA-backed managed services across applications, infrastructure, and processes.",
    color: "from-primary to-accent",
    capabilities: [
      "Application Support & Maintenance",
      "Infrastructure Support",
      "24/7 NOC & Monitoring",
      "Process Outsourcing (KPO)",
      "IT Service Desk",
      "Disaster Recovery & BCP",
    ],
  },
];

const Services = () => {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Integrated Solutions for <span className="gradient-text">End-to-End Transformation</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AWAN Solutions delivers a comprehensive portfolio of consulting, engineering, cloud, cybersecurity, and managed services — designed to help organizations transform, scale, and operate with confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 space-y-10">
          {services.map((service, idx) => (
            <AnimatedSection key={service.title}>
              <div className="glass rounded-2xl p-6 lg:p-10 group hover:bg-card/80 transition-all duration-500 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity`} />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    {/* Left: Icon + Info */}
                    <div className="lg:flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                          <service.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">0{idx + 1}</span>
                          <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground">{service.title}</h2>
                        </div>
                      </div>
                      <p className="text-primary font-medium text-sm mb-3">{service.tagline}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                      >
                        <Link to="/contact">
                          Get Started <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>

                    {/* Right: Capabilities */}
                    <div className="lg:flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Capabilities</p>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-start gap-2.5 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-foreground/80">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
              Ready to get started? <span className="gradient-text">Let's talk.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Partner with AWAN Solutions to turn your technology ambitions into measurable outcomes — from strategy through to scale.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 hover:opacity-90"
            >
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
