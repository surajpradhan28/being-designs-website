import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo, { Wordmark } from "./Logo";
import { navLinks } from "../data/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "shadow-soft bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Being Designs home">
          <Logo size={30} />
          <Wordmark className="text-lg sm:text-xl" />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-navy-700 hover:text-navy-900 text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="bg-navy-900 shadow-soft hover:bg-navy-800 hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Start a Project
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </a>

        <button
          type="button"
          className="border-navy-200 text-navy-900 inline-flex items-center justify-center rounded-full border p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-navy-100 overflow-hidden border-t bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-navy-800 hover:bg-navy-50 block rounded-lg px-3 py-3 text-base font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="bg-navy-900 flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-white"
                >
                  Start a Project
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
