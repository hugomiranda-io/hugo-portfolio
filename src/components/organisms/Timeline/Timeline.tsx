import "./Timeline.css";
import { TimelineItem, Heading } from "@components";
import { Accordion as AccordionRadix } from "@radix-ui/react-accordion";

export default function Timeline() {
  return (
    <>
      <div className="flex flex-col gap-lg">
        <Heading as="H3" label="Expériences" />
        <AccordionRadix type="single" collapsible className="timeline">
          <TimelineItem
            variant="career"
            startPeriod={2019}
            endPeriod={2025}
            title="Développeur Front-End & UI Designer"
            organization="Aliznet"
            location="Neuilly-sur-Seine, France"
            value={1}
          >
            Content Item 1
          </TimelineItem>

          <TimelineItem
            variant="career"
            startPeriod={2019}
            endPeriod={2019}
            title="Développeur web & UI Designer"
            organization="Skapa"
            location="Paris, France"
            value={2}
          >
            Content Item 2
          </TimelineItem>

          <TimelineItem
            variant="career"
            startPeriod={2015}
            endPeriod={2019}
            title="Collaborateur polyvalent"
            organization="U Express"
            location="Vincennes, France"
            value={3}
          >
            Content Item 3
          </TimelineItem>
        </AccordionRadix>
      </div>

      <div className="flex flex-col gap-lg">
        <Heading as="H3" label="Formations" />
        <TimelineItem
          variant="education"
          endPeriod={2008}
          title="Licence Technologies et design de multimédia"
          organization="Instituto Politecnico de Viseu"
          location="Viseu, Portugal"
        />
        <TimelineItem
          variant="education"
          endPeriod={2019}
          title="Formation - Développeur intégrateur web"
          organization="IFOCOP"
          location="Paris, France"
        />
      </div>
    </>
  );
}
