import "./TimelineItem.css";
import {
 AccordionItem as AccordionItemRadix,
 AccordionTrigger as AccordionTriggerRadix,
 AccordionContent as AccordionContentRadix,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { Icon } from "@components";

import type { TimelineItemProps } from "@types";

export default function TimelineItem(props: TimelineItemProps) {
 if (props.variant === "career") {
  const { id, variant, startPeriod, endPeriod, title, organization, location, children } = props;
  const accordionValue = id
   ? `item-${id}`
   : `item-${organization}-${title}-${startPeriod}-${endPeriod}`;

  return (
   <AccordionItemRadix value={accordionValue} className={`timeline-item timeline-item--${variant}`}>
    <AccordionTriggerRadix className="timeline-item__trigger">
     <div className="timeline-item__info">
      <div className="timeline-item__period">
       <span>{startPeriod}</span>
       <span>{endPeriod}</span>
      </div>
      <div className="timeline-item__details">
       <span className="font-weight-500">{title}</span>
       <div className="timeline-item__agency">
        <span>{organization}</span>
        <span className="text-low-contrast">{location}</span>
       </div>
      </div>
     </div>
     <div className="timeline-item__icon">
      <Icon icon={ChevronDown} size="md" priority="high" />
     </div>
    </AccordionTriggerRadix>
    <AccordionContentRadix className="accordion-content">
     <div className="p-md timeline-item__content">{children}</div>
    </AccordionContentRadix>
   </AccordionItemRadix>
  );
 } else {
  const { variant, endPeriod, title, organization, location } = props;

  return (
   <div className={`timeline-item timeline-item--${variant}`}>
    <div className="timeline-item__trigger">
     <div className="timeline-item__info">
      <div className="timeline-item__period">
       <span>{endPeriod}</span>
      </div>
      <div className="timeline-item__details">
       <span className="font-weight-500">{title}</span>
       <div className="timeline-item__agency">
        <span>{organization}</span>
        <span className="text-low-contrast">{location}</span>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
 }
}
