import type { LucideIcon } from "lucide-react";
import { Sparkles, Camera, Film, Share2, Package } from "lucide-react";

export interface Strength {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const strengths: Strength[] = [
  {
    title: "Branding",
    description: "Logo design, identity, and brand systems that connect.",
    icon: Sparkles,
  },
  {
    title: "Product Shoot",
    description: "Photography and videography that sells.",
    icon: Camera,
  },
  {
    title: "Video Editing",
    description: "Clean, story-driven edits for reels, YouTube & ads.",
    icon: Film,
  },
  {
    title: "Social Media",
    description: "Posts & reels designed to get seen & get sales.",
    icon: Share2,
  },
  {
    title: "Packaging",
    description: "Boxes, labels & brand assets that feel premium.",
    icon: Package,
  },
];
