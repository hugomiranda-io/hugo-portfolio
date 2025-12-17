import type React from "react";
import "./CareerItem.css";
import {
  AccordionItem as AccordionItemRadix,
  AccordionHeader as AccordionHeaderRadix,
  AccordionTrigger as AccordionTriggerRadix,
  AccordionContent as AccordionContentRadix,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Icon } from "@components";

type CareerItemProps = {
  startDate: number;
  endDate: number;
  post: string;
  company: string;
  location: string;
  children: React.ReactNode;
  value: number;
};

export default function CareerItem(props: CareerItemProps) {
  const { startDate, endDate, post, company, location, children, value } =
    props;
  return (
    <AccordionItemRadix value={`item-` + value} className="career-item">
      <AccordionHeaderRadix className="career-item__header">
        <AccordionTriggerRadix className="career-item__trigger">
          <div className="career-item__dates">
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
          <div className="career-item__details">
            <span className="font-weight-500">{post}</span>
            <div className="career-item__agency">
              <span>{company}</span>
              <span className="text-low-contrast">{location}</span>
            </div>
          </div>
          <div className="career-item__icon">
            <Icon icon={ChevronDown} size="md" priority="high" />
          </div>
        </AccordionTriggerRadix>
      </AccordionHeaderRadix>
      <AccordionContentRadix className="accordion-content">
        {children}
      </AccordionContentRadix>
    </AccordionItemRadix>
  );
}
