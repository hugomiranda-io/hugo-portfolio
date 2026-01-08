import type { ReactNode } from "react";

export type MarkdownContentProps =
 | {
    contentHtml: string;
    children?: never;
   }
 | {
    contentHtml?: never;
    children: ReactNode;
   };
