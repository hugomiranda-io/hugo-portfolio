import type { CtaProps } from "@types";

type FooterSocialLink = Extract<CtaProps, { as: "a" }>;

export const FOOTERSOCIALS_DATA: FooterSocialLink[] = [
 {
  as: "a",
  externalLink: true,
  href: "https://www.linkedin.com/in/hugocsmiranda/",
  label: "LinkedIn",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://github.com/hugocsmiranda",
  label: "Github",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://www.figma.com/@hugomiranda",
  label: "Figma",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://dribbble.com/hugocsmiranda",
  label: "Dribbble",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://www.instagram.com/hugocsmir/",
  label: "Instagram",
 },
];
