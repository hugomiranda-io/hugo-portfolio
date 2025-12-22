import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentType, ReactNode } from "react";

type CommonProps = {
 label?: string;
 children?: ReactNode;
 variant?: "primary" | "soft";
 leftIcon?: ComponentType;
 rightIcon?: ComponentType;
 className?: string;
};

type ButtonElementProps = {
 as?: "button";
 href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

type AnchorElementProps = {
 as: "a";
 href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href">;

export type CtaProps = CommonProps & (ButtonElementProps | AnchorElementProps);
