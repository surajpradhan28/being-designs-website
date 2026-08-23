import { motion } from "framer-motion";
import { ArrowRight, Palette, Video, Camera, Sparkles } from "lucide-react";
import Logo from "./Logo";

const floatCards = [
  {
    icon: Palette,
    title: "Brand Identity",
    subtitle: "Logo · Colour · System",
    className: "left-2 top-4 sm:left-6 sm:top-8",
    duration: 6,
    delay: 0,
  },
  {
    icon: Camera,
    title: "Product Shoots",
    subtitle: "Photo · Video",
    className: "right-0 top-24 sm:right-2 sm:top-28",
    duration: 7,
    delay: 0.4,
  },
  {
    icon: Video,
    title: "Reels & Ads",
    subtitle: "Edit · Motion",
    className: "left-6 bottom-6 sm:left-10 sm:bottom-10",
    duration: 6.5,
    delay: 0.8,
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16">
      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="bg-[radial-gradient(60%_50%_at_50%_0%,theme(colors.navy.100),transparent)] pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-24">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="bg-navy-900/5 text-navy-700 ring-navy-900/10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide ring-1 sm:text-sm">
            <Sparkles size={14} className="text-coral-500" />
            CREATIVE DESIGN STUDIO
          </span>

          <h1 className="text-navy-950 mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Your one-stop creative studio for brands that{" "}
            <span className="text-navy-500">want to stand out.</span>
          </h1>

          <p className="text-navy-700 mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
            Branding, product shoots, video editing, social content and packaging — no fluff, no
            flashy effects, just creative that works.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
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

          <div className="text-navy-600 mt-10 flex items-center gap-3 text-sm">
            <span className="text-navy-900 font-bold">5 services.</span>
            <span className="bg-navy-300 h-1 w-1 rounded-full" />
            <span>1 studio, built by creators &amp; business owners.</span>
          </div>
        </motion.div>

        {/* Right: animated banner visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[440px] lg:h-[480px]"
        >
          {/* Rotating ring */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="border-navy-300/70 absolute h-56 w-56 rounded-full border border-dashed sm:h-64 sm:w-64"
          />
          <div
            aria-hidden="true"
            className="bg-[radial-gradient(closest-side,theme(colors.navy.100),transparent)] absolute h-72 w-72 rounded-full sm:h-80 sm:w-80"
          />

          {/* Central animated logo mark */}
          <div className="bg-navy-900 shadow-card relative flex h-32 w-32 items-center justify-center rounded-[2rem] sm:h-36 sm:w-36">
            <Logo size={64} animated />
          </div>

          {/* Floating service cards */}
          {floatCards.map(({ icon: Icon, title, subtitle, className, duration, delay }) => (
            <motion.div
              key={title}
              className={`shadow-card ring-navy-900/5 absolute flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ${className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="bg-navy-50 text-navy-700 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                <Icon size={18} />
              </span>
              <span className="text-left">
                <span className="text-navy-900 block text-xs font-bold">{title}</span>
                <span className="text-navy-500 block text-[11px]">{subtitle}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
