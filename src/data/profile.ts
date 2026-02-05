import { Blocks, Code, Component, Ear, Handshake, ScrollText } from "lucide-react";

import type { TileProps } from "@types";

const HERO_TEXT = [
 "Je conçois et développe des interfaces web modernes, accessibles et performantes qui allient esthétique et rigueur technique.",
 "Expert React, TypeScript, design d'interfaces et accessibilité WCAG, j'accompagne vos projets avec une attention constante portée au respect des maquettes, à la qualité du code et aux bonnes pratiques UX.",
];

const INTRO_TEXT = [
 "Développeur front-end et UI designer depuis plus de 5 ans, j'ai construit mon expertise à la croisée du design et du code.",
 "Cette double compétence me permet d'intervenir sur l'ensemble du cycle de création : du prototype Figma aux composants React en production, en passant par les design systems et l'optimisation de l'accessibilité.",
 "Formé au design multimédia puis au développement web, j'accompagne aujourd'hui des projets exigeants avec un souci constant de qualité, de performance et d'expérience utilisateur.",
];

export const PROFILE_DATA = {
 name: "Hugo Miranda",
 job: "Développeur Front-End & Ui Designer",
 shortDescription: HERO_TEXT,
 longDescription: INTRO_TEXT,
} as const;

export const KEYHIGHLIGHTS_DATA: TileProps[] = [
 {
  title: "+5 Ans",
  description: "Expérience",
  icon: Handshake,
 },
 {
  title: "Design & Code",
  description: "Compétence",
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
