import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { strengths } from "../data/about";

export default function About() {
  return (
    <section id="about" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-16 lg:px-10">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="text-coral-400 text-xs font-bold tracking-widest uppercase">
            We help businesses
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            Being Designs is your one-stop creative studio for brands that want to{" "}
            <span className="text-navy-300">stand out.</span>
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <Users size={18} />
            </span>
            <p className="text-navy-100 text-sm font-semibold">
              Founded by creators &amp; business owners.
            </p>
          </div>

          <p className="mt-8 text-xl leading-snug font-extrabold text-white sm:text-2xl">
            No fluff. No flashy effects.
            <br />
            Just content that works.
          </p>
        </motion.div>

        {/* Right: five strengths */}
        <div>
          <p className="text-navy-300 mb-6 text-sm font-bold tracking-widest uppercase">
            We do five things really well
          </p>
          <ol className="space-y-4">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.li
                  key={strength.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                  className="flex items-start gap-5 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08] sm:p-6"
                >
                  <span className="font-display text-2xl font-extrabold text-white/15 sm:text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="bg-navy-800 text-coral-400 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-base font-bold text-white sm:text-lg">
                      {strength.title}
                    </span>
                    <span className="text-navy-200 mt-1 block text-sm leading-relaxed">
                      {strength.description}
                    </span>
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
