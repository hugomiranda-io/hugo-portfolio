import type { TextLevel, TextProps, TextValue } from "@types";
import type { ReactNode } from "react";
import "./Text.scss";

const textLevels: TextLevel[] = ["p", "span"];
type TextEntriesObject = { text: ReactNode[] };

function normalizeTextLevel(value: string): TextLevel {
 const normalized = value.toLowerCase();
 return (textLevels.includes(normalized as TextLevel) ? normalized : "span") as TextLevel;
}

function isTextEntriesObject(value?: TextValue): value is TextEntriesObject {
 if (!value || typeof value !== "object") {
  return false;
 }

 if (!("text" in value)) {
  return false;
 }

 const record = value as { text?: unknown };
 return Array.isArray(record.text);
}

function resolveTextEntries(value?: TextValue): ReactNode[] | null {
 if (!value) {
  return null;
 }

 if (Array.isArray(value)) {
  return value;
 }

 if (isTextEntriesObject(value)) {
  return value.text;
 }

 return null;
}

export default function Text(props: TextProps) {
 const {
  as,
  fontSize = "default",
  text,
  children,
  fontWeight = "regular",
  color = "strong",
  className,
  ...rest
 } = props;

 const resolvedAs = normalizeTextLevel(as);
 const entries = children ? null : resolveTextEntries(text);
 const content: ReactNode =
  children ?? (entries ? null : isTextEntriesObject(text) ? null : (text ?? null));

 const mergedClassName = [
  "text",
  fontSize === "small" && "text-small",
  fontWeight === "strong" && "text-strong",
  `text-${color}`,
  className,
 ]
  .filter(Boolean)
  .join(" ");

 const sharedProps = { className: mergedClassName, ...rest };

 if (entries) {
  return (
   <>
    {entries.map((entry, index) =>
     resolvedAs === "p" ? (
      <p key={index} {...sharedProps}>
       {entry}
      </p>
     ) : (
      <span key={index} {...sharedProps}>
       {entry}
      </span>
     ),
    )}
   </>
  );
 }

 switch (resolvedAs) {
  case "p":
   return <p {...sharedProps}>{content}</p>;
  default:
   return <span {...sharedProps}>{content}</span>;
 }
}
