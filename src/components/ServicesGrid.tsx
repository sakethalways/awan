import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { gsap, isMobile, prefersReducedMotion } from "@/hooks/useGsap";

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

  /* ---------- Scroll-linked 3D unfold ---------- */
  useEffect(() => {
    if (!gridRef.current || prefersReducedMotion()) return;

    const cards = gsap.utils.toArray<HTMLElement>(".service-card", gridRef.current);

    // Column count at desktop: 3. Each card knows its column index
    // so left cards tilt from -60°, middle from 0°, right from +60°.
    const getColIndex = (card: HTMLElement): number => {
      const idx = cards.indexOf(card);
      return idx % 3; // 0 = left, 1 = middle, 2 = right
    };

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        const col = getColIndex(card);
        // rotateY: -60 for left, 0 for middle, +60 for right — creates a
        // "folding open" effect as cards unfold from angled 3D into flat grid.
        const fromRotateY = col === 0 ? -60 : col === 2 ? 60 : 0;
        const fromRotateX = col === 1 ? -25 : 0; // middle card tips forward slightly

        gsap.fromTo(
          card,
          {
            opacity: 0,
            rotateY: fromRotateY,
            rotateX: fromRotateX,
            z: -400,
            scale: 0.75,
            y: 50,
          },
          {
            opacity: 1,
            rotateY: 0,
            rotateX: 0,
            z: 0,
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 110%",
              end: "top 40%",
              scrub: 1.2,
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [services]);

  /* ---------- Magnetic cursor tilt on hover (desktop only) ---------- */
  useEffect(() => {
    if (!gridRef.current || isMobile() || prefersReducedMotion()) return;

    const cards = gsap.utils.toArray<HTMLElement>(".service-card", gridRef.current);

    const listeners: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        // Normalize mouse to -0.5 … 0.5 relative to card center
        const mx = (e.clientX - rect.left) / rect.width - 0.5;
        const my = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateY: mx * 14, // tilt horizontally
          rotateX: -my * 14, // tilt vertically (invert so top tilts back)
          transformPerspective: 900,
          transformOrigin: "center center",
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const leave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      listeners.push({ el: card, move, leave });
    });

    return () => {
      listeners.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [services]);

  return (
    <div
      ref={gridRef}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
      style={{ perspective: "1500px" }}
    >
      {services.map((service) => (
        <div
          key={service.title}
          className="service-card group relative glass rounded-2xl p-6 lg:p-7 hover:bg-card/80 transition-[background] duration-500 h-full will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative z-10">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              style={{ transform: "translateZ(30px)" }}
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
