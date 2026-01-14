import "./Timeline.scss";

import { Accordion as AccordionRadix } from "@radix-ui/react-accordion";

import { Heading, MarkdownContent, TimelineItem } from "@components";

import type { TimelineItemProps } from "@types";
import type { ReactNode } from "react";

type CareerTimelineItem = Omit<Extract<TimelineItemProps, { variant: "career" }>, "children"> & {
 contentHtml?: string;
 content?: ReactNode;
};

type EducationTimelineItem = Extract<TimelineItemProps, { variant: "education" }>;

type TimelineProps = {
 career: CareerTimelineItem[];
 education: EducationTimelineItem[];
};

export default function Timeline({ career, education }: TimelineProps) {
 const careerItems = career;
 const educationItems = education;

 return (
  <>
   <div className="flex flex-col gap-lg">
    <Heading as="H3" label="Expériences" />
    <AccordionRadix type="single" collapsible className="timeline">
     {careerItems.map(({ contentHtml, content, ...item }) => (
      <TimelineItem
       key={item.id ?? `${item.organization}-${item.title}-${item.startPeriod}-${item.endPeriod}`}
       {...item}
      >
       {contentHtml ? <MarkdownContent contentHtml={contentHtml} /> : content}
      </TimelineItem>
     ))}
    </AccordionRadix>
   </div>

   <div className="flex flex-col gap-lg">
    <Heading as="H3" label="Formations" />
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
