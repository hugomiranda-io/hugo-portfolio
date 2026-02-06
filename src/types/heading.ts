import type { HTMLAttributes, ReactNode } from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, "color" | "size"> & {
 as: HeadingLevel;
 fontSize?: HeadingLevel;
 label?: string;
 children?: ReactNode;
 fontWeight?: "normal" | "bold";
 color?: "muted" | "strong";
};
