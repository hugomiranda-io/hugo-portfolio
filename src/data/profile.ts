import { Blocks, Code, Component, Ear, Handshake, ScrollText } from "lucide-react";

import type { ProfileData, TileProps } from "@types";

const HERO_TEXT = [
 "Je conçois et développe des interfaces web modernes, accessibles et performantes qui allient esthétique et rigueur technique.",
 "Expert React, TypeScript, design d'interfaces et accessibilité WCAG, j'accompagne vos projets avec une attention constante portée au respect des maquettes, à la qualité du code et aux bonnes pratiques UX.",
];

const INTRO_TEXT = [
 "Développeur front-end et UI designer depuis plus de 5 ans, j'ai construit mon expertise à la croisée du design et du code.",
 "Cette double compétence me permet d'intervenir sur l'ensemble du cycle de création : du prototype Figma aux composants React en production, en passant par les design systems et l'optimisation de l'accessibilité.",
 "Formé au design multimédia puis au développement web, j'accompagne aujourd'hui des projets exigeants avec un souci constant de qualité, de performance et d'expérience utilisateur.",
];

const STACK_FRONT_END = [
 "HTML5",
 "CSS3",
 "Sass/SCSS",
 "JavaScript (ES6+)",
 "TypeScript",
 "React.js",
 "Next.js",
 "Astro.js",
 "Salesforce Lightning",
 "Node.js",
 "Webpack",
 "Vite",
];

const STACK_UI_DESIGN = [
 "Figma",
 "Sketch",
 "Design Systems",
 "Prototypage",
 "Wireframing",
 "Responsive Design",
 "Mobile-First",
 "Accessibilité WCAG",
];

const STACK_INTEGRATION_API = ["REST API", "JSON", "GraphQL", "CMS", "Headless CMS", "npm", "Yarn"];

const STACK_TOOLS_METHODOLOGIES = [
 "Git",
 "GitHub",
 "GitLab",
 "Agile/Scrum",
 "CI/CD",
 "Performance Web",
 "SEO",
 "Tests cross-browser",
 "Documentation technique",
];

const STACK_SOFT_SKILLS = [
 "Collaboration équipes pluridisciplinaires ",
 "Revue de code",
 "Communication client",
 "Gestion de projet",
];

export const PROFILE_DATA: ProfileData = {
 name: "Hugo Miranda",
 job: "Développeur Front-End & Ui Designer",
 shortDescription: HERO_TEXT,
 longDescription: INTRO_TEXT,
 techStack: [
  { title: "Stack front-end", data: STACK_FRONT_END },
  { title: "Stack ui-design", data: STACK_UI_DESIGN },
  { title: "Integration & APIs", data: STACK_INTEGRATION_API },
  { title: "Tools & Methodologies", data: STACK_TOOLS_METHODOLOGIES },
  { title: "Soft Skills", data: STACK_SOFT_SKILLS },
 ],
};

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
