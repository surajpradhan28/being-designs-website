import { ArrowUpRight } from "lucide-react";
import Logo, { Wordmark } from "./Logo";
import { navLinks } from "../data/nav";
import { serviceCategories } from "../data/services";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "./SocialIcons";

const socials = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Being Designs home">
              <Logo size={30} variant="white" />
              <Wordmark className="text-lg !text-white" />
            </a>
            <p className="text-navy-300 mt-4 max-w-xs text-sm leading-relaxed">
              A one-stop creative studio for brands that want to stand out — branding, product
              shoots, video editing, social media and packaging.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-navy-200 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-navy-400 text-xs font-bold tracking-widest uppercase">Studio</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-navy-200 text-sm hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-coral-400 hover:text-coral-300 inline-flex items-center gap-1 text-sm font-semibold"
                >
                  Start a Project
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-navy-400 text-xs font-bold tracking-widest uppercase">Services</p>
            <ul className="mt-4 space-y-3">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <a href="#services" className="text-navy-200 text-sm hover:text-white">
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-navy-400 text-xs">© {year} Being Designs. All rights reserved.</p>
          <p className="text-navy-400 text-xs">Founded by creators &amp; business owners.</p>
        </div>
      </div>
    </footer>
  );
}
