import "./IntroText.scss";
import { Download } from "lucide-react";

import { Cta, List, Text } from "@components";
import { PROFILE_DATA } from "@data";

export default function IntroText() {
 const cvPath = "/cv/CV_HugoMiranda_DevFrontEnd_UiDesigner.pdf";

 const list = ["ReactJs", "TypeScript", "HTML", "Css/Scss"];

 return (
  <div className="flex flex-col gap-xl">
   <div className="flex flex-col gap-xs">
    {PROFILE_DATA.longDescription.map((paragraph, index) => (
     <Text key={index} as="p" text={paragraph} color="muted" />
    ))}
    <div className="py-lg">
     <Cta
      label="Download mon cv"
      leftIcon={Download}
      as="a"
      href={cvPath}
      download="CV_HugoMiranda_DevFrontEnd_UiDesigner.pdf"
     />
    </div>
    <List items={list} variant="badge" />
   </div>
  </div>
 );
}
