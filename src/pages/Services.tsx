import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Briefcase,
  Code2,
  Brain,
  Cloud,
  ShieldCheck,
  Layers,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";

const services = [
  {
    icon: Briefcase,
    title: "Business Transformation",
    tagline: "Aligning Technology with Business Strategy for Lasting Impact",
    desc: "We help organizations reimagine how they operate — aligning people, processes, and technology to unlock new efficiencies, accelerate growth, and build resilience.",
    image: "/ales-nesetril-Im7lZjxeLhg-unsplash.jpg",
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
    image: "/boitumelo-o_tcYADlSt8-unsplash.jpg",
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
    image: "/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg",
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
    image: "/hazel-z-FocSgUZ10JM-unsplash.jpg",
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
    image: "/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
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
    image: "/zheng-yang-Mh5y8htZ3SM-unsplash.jpg",
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
    image: "/possessed-photography-g29arbbvPjo-unsplash.jpg",
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
    <div className="pt-20 sm:pt-24 lg:pt-28 relative">
      {/* HEADER with parallax bg */}
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-36 relative overflow-hidden">
        <ParallaxImage
          src="/richard-horvath-cPccYbPrF-A-unsplash.jpg"
          alt="Abstract"
          className="absolute inset-0 w-full h-full opacity-25"
          intensity={0.25}
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal className="max-w-3xl mx-auto">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-display mb-4 sm:mb-5">
              Integrated Solutions for{" "}
              <span className="gradient-text">End-to-End Transformation</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              AWAN Solutions delivers a comprehensive portfolio of consulting,
              engineering, cloud, cybersecurity, and managed services — designed to
              help organizations transform, scale, and operate with confidence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — alternating image / text layout */}
      <section className="pb-14 sm:pb-20 lg:pb-28">
        <div className="container mx-auto px-4 space-y-14 sm:space-y-20 lg:space-y-28">
          {services.map((service, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={service.title}
                className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* IMAGE */}
                <div
                  className={`lg:col-span-6 relative h-[220px] sm:h-[340px] lg:h-[420px] ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <ParallaxImage
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full rounded-3xl border border-glass-border shadow-2xl"
                    intensity={0.2}
                    overlay={false}
                  />
                </div>

                {/* TEXT */}
                <Reveal
                  className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}
                  direction={reversed ? "left" : "right"}
                >
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h2>
                  <p className="text-accent font-medium text-base mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2.5 mb-7">
                    {service.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground/85">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90"
                  >
                    <Link to="/contact">
                      Get Started <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            );
          })}
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
              Ready to get started?{" "}
              <span className="gradient-text-warm">Let's talk.</span>
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
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
