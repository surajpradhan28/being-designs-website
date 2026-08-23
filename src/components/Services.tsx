import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { serviceCategories, type ServiceCategory } from "../data/services";

const accentStyles: Record<
  ServiceCategory["accent"],
  { badge: string; dot: string; ring: string }
> = {
  navy: {
    badge: "bg-navy-900 text-white",
    dot: "bg-navy-600",
    ring: "hover:ring-navy-300",
  },
  coral: {
    badge: "bg-coral-500 text-white",
    dot: "bg-coral-500",
    ring: "hover:ring-coral-300",
  },
  mint: {
    badge: "bg-mint-500 text-white",
    dot: "bg-mint-500",
    ring: "hover:ring-mint-300",
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-coral-500 text-xs font-bold tracking-widest uppercase">
            What we do
          </span>
          <h2 className="text-navy-950 mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Services built to make your brand stand out
          </h2>
          <p className="text-navy-600 mt-4 text-base leading-relaxed sm:text-lg">
            From identity to the final edit — everything a growing brand needs, under one roof.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {serviceCategories.map((category, index) => {
            const accent = accentStyles[category.accent];
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="border-navy-100 bg-canvas rounded-3xl border p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
                  <div>
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent.badge}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="text-navy-950 mt-4 text-xl font-extrabold sm:text-2xl">
                      {category.title}
                    </h3>
                    <p className="text-navy-600 mt-2 text-sm leading-relaxed sm:text-base">
                      {category.tagline}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className={`group ring-navy-900/5 hover:shadow-soft flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 transition-shadow ${accent.ring}`}
                      >
                        <span
                          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent.dot} text-white`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>
                          <span className="text-navy-900 block text-sm font-bold">{item.name}</span>
                          <span className="text-navy-500 mt-0.5 block text-xs leading-relaxed">
                            {item.blurb}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
