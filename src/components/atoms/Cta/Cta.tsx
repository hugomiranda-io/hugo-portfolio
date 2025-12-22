import { Icon } from "@components";

import type { CtaProps } from "@types";
import "./Cta.css";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export default function Cta(props: CtaProps) {
 const {
  label,
  children,
  variant = "primary",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  as = "button",
  ...rest
 } = props;

 const content = children ?? label;
 const mergedClassName = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");
 const iconClassName = variant === "primary" ? "theme" : "high";

 const innerContent = (
  <>
   {LeftIcon ? <Icon icon={LeftIcon} size="sm" priority={iconClassName} /> : null}
   <span className="btn__label">{content}</span>
   {RightIcon ? <Icon icon={RightIcon} size="sm" priority={iconClassName} /> : null}
  </>
 );

 if (as === "a") {
  const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
   href: string;
  };
  return (
   <a className={mergedClassName} href={href} {...anchorProps}>
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
