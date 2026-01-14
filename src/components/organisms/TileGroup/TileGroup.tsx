import "./TileGroup.scss";

import { Tile } from "@components";

import type { TileGroupProps } from "@types";

export default function TileGroup(props: TileGroupProps) {
 const { data, title } = props;

 return (
  <div className="flex flex-col gap-md">
   {title && <h3 className="heading">{title}</h3>}
   <div className="container-grid">
    {data.map((item) => (
     <Tile key={`key-highlight-${item.href ?? item.title}`} {...item} />
    ))}
   </div>
  </div>
 );
}
