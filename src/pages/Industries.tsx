import Reveal from "@/components/Reveal";

const industries = [
  {
    image: "/financial%20services.avif",
    title: "Financial Services",
    desc: "Explore our expertise in leveraging cutting-edge technology, from AI to hybrid cloud solutions, to elevate your financial services, ensuring competitiveness and sustainable growth.",
  },
  {
    image: "/telecom-media.jpg",
    title: "Telecom & Media",
    desc: "Explore our innovative approaches, from AI-powered customer experiences to scalable infrastructure, propelling your telecom and media services towards unparalleled success.",
  },
  {
    image: "/Health%20Care.jpg",
    title: "Health Care",
    desc: "Discover our expertise in leveraging AI, data analytics, and hybrid cloud solutions to drive transformative change in healthcare, ensuring healthier futures.",
  },
  {
    image: "/insurance.jpg",
    title: "Insurance",
    desc: "Explore our cutting-edge solutions that enhance risk assessment, claims processing, and customer engagement, shaping the future of insurance services.",
  },
  {
    image: "/Retail%20&%20E-commerce.png",
    title: "Retail & E-commerce",
    desc: "Transform your retail experience with AI-driven personalization, intelligent inventory management, and seamless omnichannel customer journeys.",
  },
  {
    image: "/Manufacturing.avif",
    title: "Manufacturing",
    desc: "Modernize your operations with IoT, predictive maintenance, and smart factory solutions that boost efficiency and reduce downtime.",
  },
  {
    image: "/Public-sector.webp",
    title: "Public Sector",
    desc: "Partner with us to deliver citizen-focused digital services, secure cloud infrastructure, and data-driven decision-making for government agencies.",
  },
  {
    image: "/Energy%20&%20Utilities.webp",
    title: "Energy & Utilities",
    desc: "Accelerate your energy transition with smart grid solutions, sustainability analytics, and next-generation operational technology.",
  },
];

const Industries = () => {
  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 relative">
      {/* INDUSTRIES GRID — with gradient mesh background */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/12" />
          <div className="absolute top-0 right-0 w-[60%] h-[50%] bg-gradient-to-bl from-secondary/18 via-transparent to-transparent rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[55%] h-[45%] bg-gradient-to-tr from-accent/16 via-transparent to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
              Sectors We Serve
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
              Expertise across{" "}
              <span className="gradient-text">every domain</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              From global enterprises to public institutions, we bring deep
              technical expertise tailored to the unique challenges of your
              industry.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group glass rounded-2xl overflow-hidden hover:bg-card/80 hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                {/* Image header */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
