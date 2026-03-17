import { Icon } from "@components";
import type { CtaProps } from "@types";
import { resolveExternalLinkAttributes } from "@utils/links";

import "./Cta.scss";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

function resolveAriaLabel(value: unknown, fallback?: string): string | undefined {
 if (typeof fallback === "string" && fallback.trim().length > 0) {
  return fallback.trim();
 }

 if (typeof value === "string") {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
 }

 if (typeof value === "number") {
  return `${value}`;
 }

 return undefined;
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
 const contentLabel = resolveAriaLabel(content, label);
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
  const resolved = resolveExternalLinkAttributes({ externalLink, rel, target });
  const ariaLabel =
   (anchorProps as { "aria-label"?: string })["aria-label"] ?? contentLabel ?? "Action";

  return (
   <a
    className={mergedClassName}
    href={href}
    rel={resolved.rel}
    target={resolved.target}
    {...anchorProps}
    aria-label={ariaLabel}
   >
    {innerContent}
   </a>
  );
 } else {
  const { type = "button", ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const ariaLabel =
   (buttonProps as { "aria-label"?: string })["aria-label"] ?? contentLabel ?? "Action";

  return (
   <button className={mergedClassName} type={type} {...buttonProps} aria-label={ariaLabel}>
    {innerContent}
   </button>
  );
 }
}
