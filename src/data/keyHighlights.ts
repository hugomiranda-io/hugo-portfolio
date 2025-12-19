import type { TileProps } from "@types";
import {
  Blocks,
  Code,
  Component,
  Ear,
  Handshake,
  ScrollText,
} from "lucide-react";

export const KEYHIGHLIGHTS_DATA: TileProps[] = [
  {
    title: "+5 Ans",
    description: "Expérience",
    icon: Handshake,
  },
  {
    title: "Design & Code",
    description: "Double compétence",
    icon: Blocks,
  },
  {
    title: "À l'écoute",
    description: "Disponibilité",
    icon: Ear,
  },
  {
    title: "Stack JS",
    description: "Front-end",
    icon: Code,
  },
  {
    title: "Figma",
    description: "Ui design",
    icon: Component,
  },
  {
    as: "a",
    href: "/profile",
    title: "Parcours",
    description: "En savoir plus",
    icon: ScrollText,
  },
];
