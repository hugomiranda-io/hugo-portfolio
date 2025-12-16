import type React from "react";
import { Icon } from "@components";
import "./Tile.css";

type CommonProps = {
  title: string;
  description?: string;
  className?: string;
  icon: React.ComponentType;
};

type AnchorTileElementProps = {
  as?: "a";
  href?: string;
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className" | "href"
>;

type DivElementProps = {
  as?: "div";
  href?: never;
} & Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children" | "className" | "href"
>;

type TileProps = CommonProps & (AnchorTileElementProps | DivElementProps);

export default function Tile(props: TileProps) {
  const {
    title,
    description,
    className,
    icon: IconTile,
    as = "div",
    ...rest
  } = props;

  const mergedClassName = ["tile", className].filter(Boolean).join(" ");

  const innerContent = (
    <div className="tile__container">
      <div className="tile__icon">
        <Icon icon={IconTile} size="lg" priority="high" />
      </div>
      <div className="flex flex-col p-md">
        <div className="text-hight-contrast font-weight-500">{title}</div>
        <div className="text-low-contrast">{description}</div>
      </div>
    </div>
  );

  if (as === "a") {
    const anchorProps = rest as AnchorTileElementProps;
    return (
      <a className={mergedClassName} {...anchorProps}>
        {innerContent}
      </a>
    );
  } else {
    const divProps = rest as DivElementProps;
    return (
      <div className={mergedClassName} {...divProps}>
        {innerContent}
      </div>
    );
  }
}
