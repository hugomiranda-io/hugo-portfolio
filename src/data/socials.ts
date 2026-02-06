import { Dribbble, Figma, Github, Instagram, Linkedin, MessagesSquare } from "lucide-react";

import type { ComponentType } from "react";

export type LinkItem = {
 label: string;
 href: string;
 description: string;
 icon: ComponentType;
};

export const LINKS: {
 socials: Record<string, LinkItem>;
 contact: Record<string, LinkItem>;
} = {
 socials: {
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
 },
 contact: {
  email: {
   label: "Email",
   href: "mailto:contact@hugomiranda.io",
   description: "Écrivez-moi",
   icon: MessagesSquare,
  },
 },
};
