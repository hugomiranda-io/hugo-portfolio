import { Github, Figma, Dribbble } from "lucide-react";

import type { TileProps } from "@types";

export const KEYSOCIALS_DATA: TileProps[] = [
 {
  as: "a",
  externalLink: true,
  href: "https://github.com/hugomiranda-io",
  title: "Github",
  description: "Projets",
  icon: Github,
 },
 {
  as: "a",
  externalLink: true,
  href: "https://www.figma.com/@hugomiranda_io",
  title: "Figma",
  description: "Community page",
  icon: Figma,
 },
 {
  as: "a",
  externalLink: true,
  href: "https://dribbble.com/hugomiranda-io",
  title: "Dribbble",
  description: "Créations",
  icon: Dribbble,
 },
];
