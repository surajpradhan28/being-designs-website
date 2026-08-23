import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

/**
 * Abstract diamond/spark mark used as the Being Designs logo.
 * Renders as a static mark by default; set `animated` for a slow
 * continuous rotation + pulse, used in the hero banner.
 */
export default function Logo({ size = 36, animated = false, className = "" }: LogoProps) {
  const markContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" className="fill-navy-900" />
      <path d="M20 9L23.2 16.8L31 20L23.2 23.2L20 31L16.8 23.2L9 20L16.8 16.8L20 9Z" fill="white" />
    </svg>
  );

  if (!animated) {
    return <span className={className}>{markContent}</span>;
  }

  return (
    <motion.span
      className={className}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      style={{ display: "inline-block" }}
    >
      {markContent}
    </motion.span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-navy-900 font-extrabold tracking-tight ${className}`}>
      Being <span className="text-coral-500">Designs</span>
    </span>
  );
}
