import logoMarkNavy from "../assets/logo-mark.png";
import logoMarkWhite from "../assets/logo-mark-white.png";

interface LogoProps {
  /** Rendered height in px. Width follows the mark's natural aspect ratio. */
  size?: number;
  /** Use the white cut for dark backgrounds (e.g. the footer). */
  variant?: "navy" | "white";
  className?: string;
}

// Natural aspect ratio (width / height) of the source mark asset.
const MARK_ASPECT = 640 / 335;

/**
 * The "be." brand mark. Sourced from the Being Designs logo artwork —
 * see src/assets/logo-mark.png (light backgrounds) and
 * src/assets/logo-mark-white.png (dark backgrounds, e.g. the footer).
 */
export default function Logo({ size = 32, variant = "navy", className = "" }: LogoProps) {
  const src = variant === "white" ? logoMarkWhite : logoMarkNavy;

  return (
    <img
      src={src}
      alt=""
      // Decorative: the wrapping link already carries an accessible name
      // ("Being Designs home"), so this image is hidden from screen readers.
      aria-hidden="true"
      width={Math.round(size * MARK_ASPECT)}
      height={size}
      className={`block ${className}`}
      style={{ height: size, width: "auto" }}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-navy-900 font-extrabold tracking-tight ${className}`}>
      Being <span className="text-coral-500">Designs</span>
    </span>
  );
}
