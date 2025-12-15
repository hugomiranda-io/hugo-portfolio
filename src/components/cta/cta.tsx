import type React from "react";
import "./cta.css";

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

  if (as === "a") {
    const { href, ...anchorProps } = rest as AnchorElementProps;
    return (
      <a className={mergedClassName} href={href} {...anchorProps}>
        {LeftIcon ? <LeftIcon /> : null}
        <span className="btn__label">{content}</span>
        {RightIcon ? <RightIcon /> : null}
      </a>
    );
  } else {
    const { type = "button", ...buttonProps } =
      rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button className={mergedClassName} type={type} {...buttonProps}>
        {LeftIcon ? <LeftIcon /> : null}
        <span className="btn__label">{content}</span>
        {RightIcon ? <RightIcon /> : null}
      </button>
    );
  }
}
