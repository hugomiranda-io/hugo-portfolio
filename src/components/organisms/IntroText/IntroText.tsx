import "./IntroText.scss";
import { Download } from "lucide-react";

import { Cta, Text } from "@components";
import { INTROTEXT_DATA } from "@data";

export default function IntroText() {
 const cvPath = "/cv/CV_HugoMiranda_DevFrontEnd_UiDesigner.pdf";

 return (
  <>
   <div className="flex flex-col gap-xs">
    {INTROTEXT_DATA.text.map((paragraph, index) => (
     <Text key={index} as="p" text={paragraph} color="muted" />
    ))}
   </div>
   <Cta
    label="Download Cv"
    leftIcon={Download}
    as="a"
    href={cvPath}
    download="CV_HugoMiranda_DevFrontEnd_UiDesigner.pdf"
   />
  </>
 );
}
