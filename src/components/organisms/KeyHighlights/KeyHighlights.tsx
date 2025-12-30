import "./KeyHighlights.css";

import { Tile } from "@components";

import type { KeyHighlightsProps } from "@types";

export default function KeyHighlights(props: KeyHighlightsProps) {
 const { data } = props;

 return (
  <div className="flex flex-col gap-md">
   <div className="container-grid">
    {data.map((item) => (
     <Tile key={`key-highlight-${item.href ?? item.title}`} {...item} />
    ))}
   </div>
  </div>
 );
}
