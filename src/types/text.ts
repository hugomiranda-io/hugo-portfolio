import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type TextLevel = "span" | "p";

export type TextValue = ReactNode | ReactNode[] | { text: ReactNode[] };

export type TextProps = Omit<ComponentPropsWithoutRef<TextLevel>, "color" | "size"> & {
 as: TextLevel;
 fontSize?: "default" | "small";
 text?: TextValue;
 children?: ReactNode;
 fontWeight?: "regular" | "strong";
 color?: "muted" | "strong";
};
