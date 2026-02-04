import type { CtaProps } from "@types";

type FooterSocialLink = Extract<CtaProps, { as: "a" }>;

export const FOOTERSOCIALS_DATA: FooterSocialLink[] = [
 {
  as: "a",
  externalLink: true,
  href: "https://www.linkedin.com/in/hugomiranda-io",
  label: "LinkedIn",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://github.com/hugomiranda-io",
  label: "Github",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://www.figma.com/@hugomiranda_io",
  label: "Figma",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://dribbble.com/hugomiranda-io",
  label: "Dribbble",
 },
 {
  as: "a",
  externalLink: true,
  href: "https://www.instagram.com/hugomiranda_io",
  label: "Instagram",
 },
];
