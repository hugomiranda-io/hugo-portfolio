import { Icon } from "@components";
import "./Tile.css";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import type { TileProps } from "@types";

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
        <div className="text-high-contrast font-weight-500">{title}</div>
        <div className="text-low-contrast">{description}</div>
      </div>
    </div>
  );

  if (as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href?: string;
    };
    return (
      <a className={mergedClassName} {...anchorProps}>
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
