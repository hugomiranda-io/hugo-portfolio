import type { HeadingProps } from "@types";
import "./Heading.css";

export default function Heading(props: HeadingProps) {
 const { as, label, contrast = "high" } = props;

 const mergedClassName = ["heading", `text-${contrast}-contrast`].filter(Boolean).join(" ");

 if (as === "H1") {
  return <h1 className={mergedClassName}>{label}</h1>;
 } else if (as === "H2") {
  return <h2 className={mergedClassName}>{label}</h2>;
 } else if (as === "H3") {
  return <h3 className={mergedClassName}>{label}</h3>;
 } else if (as === "H4") {
  return <h4 className={mergedClassName}>{label}</h4>;
 } else if (as === "H5") {
  return <h5 className={mergedClassName}>{label}</h5>;
 } else if (as === "H6") {
  return <h6 className={mergedClassName}>{label}</h6>;
 } else {
  return <p className={mergedClassName}>{label}</p>;
 }
}
