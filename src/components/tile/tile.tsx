import type React from "react";
import "./tile.css";

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
    icon: Icon,
    as = "div",
    ...rest
  } = props;

  const mergedClassName = ["tile", className].filter(Boolean).join(" ");

  if (as === "a") {
    const anchorProps = rest as AnchorTileElementProps;
    return (
      <a className={mergedClassName} {...anchorProps}>
        <div className="tile__container">
          <div className="tile__icon">
            <Icon />
          </div>
          <div className="flex flex-col p-md">
            <div className="text-hight-contrast font-weight-500">{title}</div>
            <div className="text-low-contrast">{description}</div>
          </div>
        </div>
      </a>
    );
  } else {
    const divProps = rest as DivElementProps;
    return (
      <div className={mergedClassName} {...divProps}>
        <div className="tile__container">
          <div className="tile__icon">
            <Icon />
          </div>
          <div className="flex flex-col p-md">
            <div className="text-hight-contrast font-weight-500">{title}</div>
            <div className="text-low-contrast">{description}</div>
          </div>
        </div>
      </div>
    );
  }
}
