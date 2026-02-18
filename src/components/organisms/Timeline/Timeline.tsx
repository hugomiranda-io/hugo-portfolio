import { Accordion as AccordionRadix } from "@radix-ui/react-accordion";

import { Heading, List, Text, TimelineItem } from "@components";
import type { CareerTimelineDataItem, EducationTimelineDataItem, TimelineContent } from "@types";

type TimelineProps = {
 career: CareerTimelineDataItem[];
 education: EducationTimelineDataItem[];
};

export default function Timeline({ career, education }: TimelineProps) {
 const careerItems = career;
 const educationItems = education;

 const renderContentBlock = (content: TimelineContent, index: number) => {
  return (
   <div key={index} className="flex flex-col gap-sm">
    {content.title ? <Heading as="h3" label={content.title} /> : null}
    {content.type === "paragraph" ? (
     content.values.map((value, valueIndex) => (
      <Text key={`${index}-${valueIndex}`} as="p" color="muted" text={value} />
     ))
    ) : (
     <List
      items={content.values}
      variant={content.type === "list-dot" ? "dot" : "badge"}
      color="muted"
     />
    )}
   </div>
  );
 };

 return (
  <>
   <div className="flex flex-col gap-lg">
    <Heading as="h3" label="Expériences" />
    <AccordionRadix type="single" collapsible className="flex flex-col gap-md">
     {careerItems.map(({ description, ...item }) => (
      <TimelineItem
       key={item.id ?? `${item.organization}-${item.title}-${item.startPeriod}-${item.endPeriod}`}
       {...item}
      >
       {description.map(renderContentBlock)}
      </TimelineItem>
     ))}
    </AccordionRadix>
   </div>

   <div className="flex flex-col gap-lg">
    <Heading as="h3" label="Formations" />
    {educationItems.map((item) => (
     <TimelineItem
      key={item.id ?? `${item.organization}-${item.title}-${item.endPeriod}`}
      {...item}
     />
    ))}
   </div>
  </>
 );
}
