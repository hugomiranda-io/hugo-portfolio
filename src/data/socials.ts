import { Dribbble, Figma, Github, Instagram, Linkedin, MessagesSquare } from "lucide-react";
import type { ComponentType } from "react";

export type LinkItem = {
 label: string;
 href: string;
 description: string;
 icon: ComponentType;
};

export const SOCIAL_LINKS = ["github", "figma", "dribbble", "linkedin", "instagram"] as const;
export type SocialLink = (typeof SOCIAL_LINKS)[number];

export const CONTACT_LINKS = ["email"] as const;
export type ContactLink = (typeof CONTACT_LINKS)[number];

export const FEATURED_SOCIAL_LINKS: readonly SocialLink[] = ["github", "figma", "dribbble"];

const SOCIAL_ITEMS = {
 github: {
  label: "Github",
  href: "https://github.com/hugomiranda-io",
  description: "Projets",
  icon: Github,
 },
 figma: {
  label: "Figma",
  href: "https://www.figma.com/@hugomiranda_io",
  description: "Community page",
  icon: Figma,
 },
 dribbble: {
  label: "Dribbble",
  href: "https://dribbble.com/hugomiranda-io",
  description: "Créations",
  icon: Dribbble,
 },
 linkedin: {
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/hugomiranda-io",
  description: "Réseau pro",
  icon: Linkedin,
 },
 instagram: {
  label: "Instagram",
  href: "https://www.instagram.com/hugomiranda_io",
  description: "Photos",
  icon: Instagram,
 },
} satisfies Record<SocialLink, LinkItem>;

const CONTACT_ITEMS = {
 email: {
  label: "Email",
  href: "mailto:contact@hugomiranda.io",
  description: "Contact",
  icon: MessagesSquare,
 },
} satisfies Record<ContactLink, LinkItem>;

export const LINKS = {
 socials: SOCIAL_ITEMS,
 contact: CONTACT_ITEMS,
} as const;
