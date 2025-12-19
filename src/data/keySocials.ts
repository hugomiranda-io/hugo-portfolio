import type { TileProps } from "@types";
import { Github, Figma, Dribbble } from "lucide-react";

export const KEYSOCIALS_DATA: TileProps[] = [
  {
    as: "a",
    href: "https://github.com/hugocsmiranda",
    title: "Github",
    description: "Mes projets",
    icon: Github,
  },
  {
    as: "a",
    href: "https://www.figma.com/@hugomiranda",
    title: "Figma",
    description: "Ma page community",
    icon: Figma,
  },
  {
    as: "a",
    href: "https://dribbble.com/hugocsmiranda",
    title: "Dribbble",
    description: "Mes créations",
    icon: Dribbble,
  },
];
