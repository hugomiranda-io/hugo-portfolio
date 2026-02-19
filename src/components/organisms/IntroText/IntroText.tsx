import { Download } from "lucide-react";

import { Cta, Heading, Text } from "@components";
import { PROFILE_DATA } from "@data";

export default function IntroText() {
 const cvPath = "/cv/CV_HugoMiranda_DevFrontEnd_UiDesigner.pdf";

 return (
  <div className="flex flex-col gap-lg">
   <Heading as="h1" label="Mon Parcours" />
   <div className="flex flex-col gap-xs">
    {PROFILE_DATA.longDescription.map((paragraph, index) => (
     <Text key={index} as="p" text={paragraph} color="muted" />
    ))}
    <div className="pt-lg">
     <Cta
      label="Download mon cv"
      leftIcon={Download}
      as="a"
      href={cvPath}
      download="CV_HugoMiranda_DevFrontEnd_UiDesigner.pdf"
     />
    </div>
   </div>
  </div>
 );
}
