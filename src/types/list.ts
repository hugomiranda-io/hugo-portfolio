import type { ReactNode } from "react";

export type ListItemsProps = Record<string, ReactNode> | ReadonlyArray<ReactNode>;

export type ListProps = {
 items: ListItemsProps;
 variant: "dot" | "badge";
};
