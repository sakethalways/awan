import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/hooks/useGsap";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

interface Props {
  services: Service[];
}

const ServicesGrid = ({ services }: Props) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || prefersReducedMotion()) return;

    const cards = gsap.utils.toArray<HTMLElement>(".service-card", gridRef.current);

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.88, y: 35 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              end: "top 78%",
              scrub: true,
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [services]);

  return (
    <div
      ref={gridRef}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
    >
      {services.map((service) => (
        <div
          key={service.title}
          className="service-card group relative glass rounded-2xl p-6 lg:p-7 hover:bg-card/80 hover:-translate-y-1 transition-[background,transform] duration-500 h-full"
        >
          <div className="relative z-10">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
            >
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
              className="inline-flex items-center text-sm text-accent font-medium gap-1 hover:gap-2 transition-all"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
