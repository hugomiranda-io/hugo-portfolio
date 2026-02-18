import type { ListProps } from "@types";
import "./List.scss";

export default function List(props: ListProps) {
 const { items, variant, color = "strong" } = props;
 const entries = Array.isArray(items) ? items : Object.values(items);

 const mergedClassName = ["list", `list--${variant}`, `list--${color}`].join(" ");

 return (
  <ul className={mergedClassName}>
   {entries.map((entry, index) => (
    <li className="list__item" key={index}>
     {entry}
    </li>
   ))}
  </ul>
 );
}
