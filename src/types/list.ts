import type { ReactNode } from "react";

export type ListItemsProps = Record<string, ReactNode> | ReactNode[];

export type ListProps = {
 items: ListItemsProps;
 variant: "dot" | "badge";
};
