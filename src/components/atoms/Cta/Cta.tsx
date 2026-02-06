import { Icon } from "@components";

import "./Cta.scss";

import type { CtaProps } from "@types";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

function mergeExternalRel(rel?: string) {
 const tokens = new Set((rel ?? "").split(/\s+/).filter(Boolean));
 tokens.add("noopener");
 tokens.add("noreferrer");
 return Array.from(tokens).join(" ");
}

export default function Cta(props: CtaProps) {
 const {
  label,
  children,
  variant = "primary",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  as = "button",
  externalLink = false,
  wide = false,
  ...rest
 } = props;

 const content = children ?? label;
 const mergedClassName = ["btn", `btn-${variant}`, wide && "btn__wide", className]
  .filter(Boolean)
  .join(" ");
 const iconClassName = variant === "primary" ? "inverse" : "strong";

 const innerContent = (
  <>
   {LeftIcon ? <Icon icon={LeftIcon} size="sm" color={iconClassName} /> : null}
   <span className="btn__label">{content}</span>
   {RightIcon ? <Icon icon={RightIcon} size="sm" color={iconClassName} /> : null}
  </>
 );

 if (as === "a") {
  const { href, rel, target, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
   href: string;
   rel?: string;
   target?: string;
  };
  const resolvedRel = externalLink ? mergeExternalRel(rel) : rel;
  const resolvedTarget = externalLink ? "_blank" : target;
  return (
   <a
    className={mergedClassName}
    href={href}
    rel={resolvedRel}
    target={resolvedTarget}
    {...anchorProps}
   >
    {innerContent}
   </a>
  );
 } else {
  const { type = "button", ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
   <button className={mergedClassName} type={type} {...buttonProps}>
    {innerContent}
   </button>
  );
 }
}
