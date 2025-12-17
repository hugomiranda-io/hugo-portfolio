import "./Career.css";
import { CareerItem } from "@components";
import { Accordion as AccordionRadix } from "@radix-ui/react-accordion";

export default function Career() {
  return (
    <>
      <AccordionRadix type="single" collapsible className="career">
        <CareerItem
          startDate={2019}
          endDate={2025}
          post="Développeur Front-End & UI Designer"
          company="Aliznet"
          location="Neuilly-sur-Seine, France"
          value={1}
        >
          Content Item 1
        </CareerItem>

        <CareerItem
          startDate={2019}
          endDate={2019}
          post="Développeur web & UI Designer"
          company="Skapa"
          location="Paris, France"
          value={2}
        >
          Content Item 2
        </CareerItem>

        <CareerItem
          startDate={2015}
          endDate={2019}
          post="Collaborateur polyvalent"
          company="U Express"
          location="Vincennes, France"
          value={3}
        >
          Content Item 3
        </CareerItem>
      </AccordionRadix>
    </>
  );
}
