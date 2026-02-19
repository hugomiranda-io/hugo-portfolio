import { Heading, Icon, Text } from "@components";
import "./Tile.scss";
import type { TileProps } from "@types";

import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

function mergeExternalRel(rel?: string) {
 const tokens = new Set((rel ?? "").split(/\s+/).filter(Boolean));
 tokens.add("noopener");
 tokens.add("noreferrer");
 return Array.from(tokens).join(" ");
}

export default function Tile(props: TileProps) {
 const {
  title,
  description,
  className,
  icon: IconTile,
  as = "div",
  externalLink = false,
  hasGroupTitle = false,
  ...rest
 } = props;

 const mergedClassName = ["tile", className].filter(Boolean).join(" ");

 const innerContent = (
  <div className="tile__container">
   <div className="tile__icon">
    <Icon icon={IconTile} size="lg" color="strong" />
   </div>
   <div className="flex flex-col-reverse p-md">
    <Heading as={hasGroupTitle ? "h3" : "h2"} color="muted" fontWeight="normal" label={description} />
    <Text as="p" fontWeight="bold" text={title} />
   </div>
  </div>
 );

 if (as === "a") {
  const { rel, target, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
   href: string;
   rel?: string;
   target?: string;
  };
  const resolvedRel = externalLink ? mergeExternalRel(rel) : rel;
  const resolvedTarget = externalLink ? "_blank" : target;
  return (
   <a className={mergedClassName} rel={resolvedRel} target={resolvedTarget} {...anchorProps}>
    {innerContent}
   </a>
  );
 } else {
  const divProps = rest as HTMLAttributes<HTMLDivElement>;
  return (
   <div className={mergedClassName} {...divProps}>
    {innerContent}
   </div>
  );
 }
}
