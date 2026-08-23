import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Video,
  Camera,
} from "lucide-react";

export interface ServiceItem {
  name: string;
  blurb: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  accent: "navy" | "coral" | "mint";
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "design",
    title: "Design Services",
    tagline: "Identity systems that make brands instantly recognizable.",
    icon: Palette,
    accent: "coral",
    items: [
      {
        name: "Brand Identity",
        blurb: "Logos, colour systems and guidelines built to last.",
      },
      {
        name: "Social Media Management",
        blurb: "Consistent, on-brand presence across every platform.",
      },
      {
        name: "Packaging Design",
        blurb: "Boxes, labels and unboxing that feel premium.",
      },
    ],
  },
  {
    id: "video",
    title: "Video Services",
    tagline: "Story-driven video built for attention and action.",
    icon: Video,
    accent: "navy",
    items: [
      {
        name: "Video Editing",
        blurb: "Clean, punchy cuts for reels, YouTube and ads.",
      },
      {
        name: "Motion Graphics",
        blurb: "Animated titles, logos and explainer sequences.",
      },
      {
        name: "Videography",
        blurb: "On-location filming for brand, product and event.",
      },
    ],
  },
  {
    id: "photography",
    title: "Photography & Content Production",
    tagline: "High-impact imagery shot to sell and to scroll-stop.",
    icon: Camera,
    accent: "mint",
    items: [
      { name: "Product Photography", blurb: "Clean, conversion-ready product shots." },
      { name: "Food & Menu Photography", blurb: "Mouth-watering shots for menus and delivery apps." },
      { name: "Lifestyle Photography", blurb: "Real-world context that builds trust." },
      { name: "Brand Photography", blurb: "Founder, team and workplace imagery." },
      { name: "Commercial Photography", blurb: "Campaign-ready visuals for ads and print." },
      { name: "Social Media Content Shoots", blurb: "Batch content built for feeds and reels." },
      { name: "Restaurant & Hospitality Photography", blurb: "Interiors, dishes and ambience that convert." },
    ],
  },
];
