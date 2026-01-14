import type { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from "react";

type CommonProps = {
 title: string;
 description: string;
 className?: string;
 icon: ComponentType;
 externalLink?: boolean;
};

type AnchorTileElementProps = {
 as: "a";
 href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href">;

type DivElementProps = {
 as?: "div";
 href?: never;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "className" | "href">;

export type TileProps = CommonProps & (AnchorTileElementProps | DivElementProps);
