import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVideo from "../assets/hero/hero-banner-animation.mp4";
import heroPoster from "../assets/hero/hero-banner-poster.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Full-bleed banner video — headline, service highlights, and the be.
          logo mark are all baked into the animation itself. */}
      <div className="bg-navy-950 relative isolate overflow-hidden">
        <h1 className="sr-only">
          Your one-stop creative studio for brands that want to stand out.
        </h1>
        <p className="sr-only">
          Branding, product shoots, video editing, social content and packaging.
        </p>

        <video
          className="block h-auto w-full"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* CTAs on the default page background below the banner */}
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
