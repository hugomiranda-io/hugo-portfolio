import "./IntroText.scss";
import { Text } from "@components";
import { INTROTEXT_DATA } from "@data";

export default function IntroText() {
 return (
  <div className="flex flex-col gap-xs">
   {INTROTEXT_DATA.text.map((paragraph, index) => (
    <Text key={index} as="p" text={paragraph} color="muted" />
   ))}
  </div>
 );
}
