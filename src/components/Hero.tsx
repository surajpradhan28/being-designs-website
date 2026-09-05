import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

      {/* Decorative side blobs + pattern — fill the empty gutters beside the
          narrow video card on wide viewports. Purely decorative, hidden on
          smaller screens where there's no side space to fill. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
      >
        <div className="bg-[radial-gradient(closest-side,theme(colors.coral.400),transparent)] absolute top-16 left-[6%] h-72 w-72 rounded-full opacity-20 blur-3xl" />
        <div className="bg-[radial-gradient(closest-side,theme(colors.navy.300),transparent)] absolute top-56 right-[8%] h-80 w-80 rounded-full opacity-25 blur-3xl" />
        <div className="bg-[radial-gradient(closest-side,theme(colors.navy.200),transparent)] absolute bottom-0 left-[12%] h-64 w-64 rounded-full opacity-25 blur-3xl" />
        <div
          className="absolute inset-x-0 top-10 bottom-10 [mask-image:radial-gradient(65%_60%_at_50%_45%,black,transparent)] opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(theme(colors.navy.300) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        {/* Visually-hidden h1: keeps a real heading for accessibility/SEO now that the
            headline is no longer shown on screen — the video conveys it visually. */}
        <h1 className="sr-only">
          Your one-stop creative studio for brands that want to stand out.
        </h1>

        {/* Animated banner — brand mark + service highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:mt-14"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
