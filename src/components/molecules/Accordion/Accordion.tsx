import * as React from "react";
import "./Accordion.css";
import {
  Accordion as AccordionRadix,
  AccordionItem as AccordionItemRadix,
  AccordionTrigger as AccordionTriggerRadix,
  AccordionContent as AccordionContentRadix,
} from "@radix-ui/react-accordion";

export default function AccordionHugo() {
  return (
    <AccordionRadix type="single" collapsible className="accordion">
      <AccordionItemRadix value="item-1" className="accordion-item">
        <AccordionTriggerRadix className="accordion-trigger">
          What is the main attraction of Switzerland?
        </AccordionTriggerRadix>
        <AccordionContentRadix className="accordion-content">
          The beautiful landscapes and, of course, the flag is a big plus!
        </AccordionContentRadix>
      </AccordionItemRadix>

      <AccordionItemRadix value="item-2" className="accordion-item">
        <AccordionTriggerRadix className="accordion-trigger">
          How can you make holy water?
        </AccordionTriggerRadix>
        <AccordionContentRadix className="accordion-content">
          Just boil the impurities out of it.
        </AccordionContentRadix>
      </AccordionItemRadix>

      <AccordionItemRadix value="item-3" className="accordion-item">
        <AccordionTriggerRadix className="accordion-trigger">
          What do you call a person with no body and no nose?
        </AccordionTriggerRadix>
        <AccordionContentRadix className="accordion-content">
          Nobody knows!
        </AccordionContentRadix>
      </AccordionItemRadix>
    </AccordionRadix>
  );
}
