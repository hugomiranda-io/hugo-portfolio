import "./IntroText.css";

import { INTROTEXT_DATA } from "@data";

export default function IntroText() {
 return (
  <div className="flex flex-col gap-xs">
   {INTROTEXT_DATA.text.map((paragraph, index) => (
    <p className="text-low-contrast" key={index}>
     {paragraph}
    </p>
   ))}
  </div>
 );
}
