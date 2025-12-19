import type { CtaProps } from "@types";

type FooterSocialLink = Extract<CtaProps, { as: "a" }>;

export const FOOTERSOCIALS_DATA: FooterSocialLink[] = [
  {
    as: "a",
    href: "https://www.linkedin.com/in/hugocsmiranda/",
    label: "LinkedIn",
  },
  {
    as: "a",
    href: "https://github.com/hugocsmiranda",
    label: "Github",
  },
  {
    as: "a",
    href: "https://www.figma.com/@hugomiranda",
    label: "Figma",
  },
  {
    as: "a",
    href: "https://dribbble.com/hugocsmiranda",
    label: "Dribbble",
  },
  {
    as: "a",
    href: "https://www.instagram.com/hugocsmir/",
    label: "Instagram",
  },
];
