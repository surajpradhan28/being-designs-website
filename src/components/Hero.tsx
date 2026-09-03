import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVideo from "../assets/hero/hero-logo-animation.mp4";
import heroPoster from "../assets/hero/hero-logo-poster.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16">
      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="bg-[radial-gradient(60%_50%_at_50%_0%,theme(colors.navy.100),transparent)] pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
      />

      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        {/* Visually-hidden h1: keeps a real heading for accessibility/SEO now that the
            headline is no longer shown on screen — the video conveys it visually. */}
        <h1 className="sr-only">
          Your one-stop creative studio for brands that want to stand out.
        </h1>

        {/* Badge, CTAs, stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <span className="bg-navy-900/5 text-navy-700 ring-navy-900/10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide ring-1 sm:text-sm">
            <Sparkles size={14} className="text-coral-500" />
            CREATIVE DESIGN STUDIO
          </span>

          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="border-navy-900 text-navy-900 hover:bg-navy-900 inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-colors hover:text-white sm:text-base"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="bg-navy-900 shadow-card hover:bg-navy-800 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:text-base"
            >
              Start Your Project
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>

          <div className="text-navy-600 mt-8 flex items-center gap-3 text-sm">
            <span className="text-navy-900 font-bold">5 services.</span>
            <span className="bg-navy-300 h-1 w-1 rounded-full" />
            <span>1 studio, built by creators &amp; business owners.</span>
          </div>
        </motion.div>

        {/* Full-width animated banner — brand mark + service highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto mt-10 w-full lg:mt-14"
        >
          <div className="shadow-card overflow-hidden rounded-[2rem]">
            <video
              className="block h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              poster={heroPoster}
              aria-label="Being Designs: brand identity, product shoots, and reels & ads"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
