import { Github, Figma, Dribbble } from "lucide-react";

import type { TileProps } from "@types";

export const KEYSOCIALS_DATA: TileProps[] = [
 {
  as: "a",
  externalLink: true,
  href: "https://github.com/hugocsmiranda",
  title: "Github",
  description: "Projets",
  icon: Github,
 },
 {
  as: "a",
  externalLink: true,
  href: "https://www.figma.com/@hugomiranda",
  title: "Figma",
  description: "Community page",
  icon: Figma,
 },
 {
  as: "a",
  externalLink: true,
  href: "https://dribbble.com/hugocsmiranda",
  title: "Dribbble",
  description: "Créations",
  icon: Dribbble,
 },
];
