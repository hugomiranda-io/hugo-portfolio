import type React from "react";
import "./CareerItem.css";
import {
  AccordionItem as AccordionItemRadix,
  AccordionHeader as AccordionHeaderRadix,
  AccordionTrigger as AccordionTriggerRadix,
  AccordionContent as AccordionContentRadix,
} from "@radix-ui/react-accordion";

type CareerItemProps = {
  label: string;
  children: React.ReactNode;
  value: number;
};

export default function CareerItem(props: CareerItemProps) {
  const { label, children, value } = props;
  return (
    <AccordionItemRadix value={`item-` + value} className="accordion-item">
      <AccordionHeaderRadix>
        <AccordionTriggerRadix className="accordion-trigger">
          {label}
        </AccordionTriggerRadix>
      </AccordionHeaderRadix>
      <AccordionContentRadix className="accordion-content">
        {children}
      </AccordionContentRadix>
    </AccordionItemRadix>
  );
}
