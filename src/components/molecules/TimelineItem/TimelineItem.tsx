import type React from "react";
import "./TimelineItem.css";
import {
  AccordionItem as AccordionItemRadix,
  AccordionTrigger as AccordionTriggerRadix,
  AccordionContent as AccordionContentRadix,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Icon } from "@components";

type CommonProps = {
  title: string;
  organization: string;
  location: string;
};

type CareerElementProps = {
  type: "career";
  startDate: number;
  endDate: number;
  children: React.ReactNode;
  value: number;
};

type EducationElementProps = {
  type: "education";
  startDate?: never;
  endDate: number;
  children?: never;
  value?: never;
};

export type TimelineItemProps = CommonProps &
  (CareerElementProps | EducationElementProps);

export default function TimelineItem(props: TimelineItemProps) {
  if (props.type === "career") {
    const {
      type,
      startDate,
      endDate,
      title,
      organization,
      location,
      children,
      value,
    } = props;

    return (
      <AccordionItemRadix
        value={`item-` + value}
        className={`timeline-item timeline-item--${type}`}
      >
        <AccordionTriggerRadix className="timeline-item__trigger">
          <div className="timeline-item__dates">
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
          <div className="timeline-item__details">
            <span className="font-weight-500">{title}</span>
            <div className="timeline-item__agency">
              <span>{organization}</span>
              <span className="text-low-contrast">{location}</span>
            </div>
          </div>
          <div className="timeline-item__icon">
            <Icon icon={ChevronDown} size="md" priority="high" />
          </div>
        </AccordionTriggerRadix>
        <AccordionContentRadix className="accordion-content">
          <div className="p-md">{children}</div>
        </AccordionContentRadix>
      </AccordionItemRadix>
    );
  } else {
    const { type, endDate, title, organization, location } = props;

    return (
      <div className={`timeline-item timeline-item--${type}`}>
        <div className="timeline-item__trigger">
          <div className="timeline-item__dates">
            <span>{endDate}</span>
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
    );
  }
}
