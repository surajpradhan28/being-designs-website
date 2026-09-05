import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVideo from "../assets/hero/hero-logo-animation.mp4";
import heroPoster from "../assets/hero/hero-logo-poster.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Dark banner: headline copy + video, side by side */}
      <div className="bg-navy-950 relative isolate overflow-hidden">
        {/* Ambient glow behind the video */}
        <div
          aria-hidden="true"
          className="bg-[radial-gradient(55%_60%_at_75%_45%,theme(colors.navy.700),transparent)] pointer-events-none absolute inset-0 -z-10"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-24">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.2rem]">
              Your one-stop creative studio for brands that{" "}
              <span className="text-navy-400">want to stand out.</span>
            </h1>

            <p className="text-navy-200 mt-6 max-w-md text-base leading-relaxed sm:text-lg">
              Branding, product shoots, video editing, social content and packaging.
            </p>
          </motion.div>

          {/* Right: animated banner — brand mark + service highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
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
      </div>

      {/* CTAs on the default page background below the dark banner */}
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col gap-3.5 sm:flex-row sm:items-center"
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
