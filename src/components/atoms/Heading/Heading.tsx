import type { HeadingLevel, HeadingProps } from "@types";
import "./Heading.scss";

const headingLevels: HeadingLevel[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

function normalizeHeadingLevel(value: string): HeadingLevel {
 const normalized = value.toLowerCase();
 return (headingLevels.includes(normalized as HeadingLevel) ? normalized : "h6") as HeadingLevel;
}

export default function Heading(props: HeadingProps) {
 const {
  as,
  fontSize,
  label,
  children,
  fontWeight = "strong",
  color = "strong",
  className,
  ...rest
 } = props;

 const resolvedAs = normalizeHeadingLevel(as);
 const resolvedSize = fontSize ? normalizeHeadingLevel(fontSize) : null;
 const content = children ?? label;

 const mergedClassName = [
  "heading",
  resolvedSize && `heading--${resolvedSize.slice(1)}`,
  fontWeight === "regular" && "heading--regular",
  `text-${color}`,
  className,
 ]
  .filter(Boolean)
  .join(" ");

 const sharedProps = { className: mergedClassName, ...rest };

 switch (resolvedAs) {
  case "h1":
   return <h1 {...sharedProps}>{content}</h1>;
  case "h2":
   return <h2 {...sharedProps}>{content}</h2>;
  case "h3":
   return <h3 {...sharedProps}>{content}</h3>;
  case "h4":
   return <h4 {...sharedProps}>{content}</h4>;
  case "h5":
   return <h5 {...sharedProps}>{content}</h5>;
  default:
   return <h6 {...sharedProps}>{content}</h6>;
 }
}
