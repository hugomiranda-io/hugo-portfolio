import type React from "react";
import { Icon } from "@components/index";
import "./Cta.css";

type CommonProps = {
  label?: string;
  children?: React.ReactNode;
  variant?: "primary" | "soft";
  leftIcon?: React.ComponentType;
  rightIcon?: React.ComponentType;
  className?: string;
};

type ButtonElementProps = {
  as?: "button";
  href?: never;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className"
>;

type AnchorElementProps = {
  as: "a";
  href: string;
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className" | "href"
>;

type CtaProps = CommonProps & (ButtonElementProps | AnchorElementProps);

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
  const mergedClassName = ["btn", `btn-${variant}`, className]
    .filter(Boolean)
    .join(" ");
  const iconClassName = variant === "primary" ? "theme" : "high";

  const innerContent = (
    <>
      {LeftIcon ? (
        <Icon icon={LeftIcon} size="sm" priority={iconClassName} />
      ) : null}
      <span className="btn__label">{content}</span>
      {RightIcon ? (
        <Icon icon={RightIcon} size="sm" priority={iconClassName} />
      ) : null}
    </>
  );

  if (as === "a") {
    const { href, ...anchorProps } = rest as AnchorElementProps;
    return (
      <a className={mergedClassName} href={href} {...anchorProps}>
        {innerContent}
      </a>
    );
  } else {
    const { type = "button", ...buttonProps } =
      rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button className={mergedClassName} type={type} {...buttonProps}>
        {innerContent}
      </button>
    );
  }
}
