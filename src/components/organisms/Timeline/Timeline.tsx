import "./Timeline.css";
import { Accordion as AccordionRadix } from "@radix-ui/react-accordion";

import { TimelineItem, Heading } from "@components";
import { TIMELINE_DATA } from "@data";

export default function Timeline() {
 return (
  <>
   <div className="flex flex-col gap-lg">
    <Heading as="H3" label="Expériences" />
    <AccordionRadix type="single" collapsible className="timeline">
     {TIMELINE_DATA.career.map(({ content, ...item }) => (
      <TimelineItem key={item.organization} {...item}>
       {content}
      </TimelineItem>
     ))}
    </AccordionRadix>
   </div>

   <div className="flex flex-col gap-lg">
    <Heading as="H3" label="Formations" />
    {TIMELINE_DATA.education.map((item) => (
     <TimelineItem key={item.organization} {...item} />
    ))}
   </div>
  </>
 );
}
