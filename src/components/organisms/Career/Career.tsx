import "./Career.css";
import { CareerItem } from "@components";
import { Accordion as AccordionRadix } from "@radix-ui/react-accordion";

export default function Career() {
  return (
    <AccordionRadix type="single" collapsible className="accordion">
      <CareerItem label="Item 1" value={1}>
        Content Item 1
      </CareerItem>
      <CareerItem label="Item 2" value={2}>
        Content Item 2
      </CareerItem>
      <CareerItem label="Item 3" value={3}>
        Content Item 3
      </CareerItem>
    </AccordionRadix>
  );
}
