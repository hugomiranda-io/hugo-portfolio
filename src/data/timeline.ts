import type { ReactNode } from "react";
import type { TimelineItemProps } from "@types";

type CareerTimelineItemData = Omit<
  Extract<TimelineItemProps, { variant: "career" }>,
  "children"
> & { content: ReactNode };

type EducationTimelineItemData = Extract<
  TimelineItemProps,
  { variant: "education" }
>;

export const TIMELINE_DATA: {
  career: CareerTimelineItemData[];
  education: EducationTimelineItemData[];
} = {
  career: [
    {
      variant: "career",
      startPeriod: 2019,
      endPeriod: 2025,
      title: "Développeur Front-End & UI Designer",
      organization: "Aliznet",
      location: "Neuilly-sur-Seine, France",
      value: 1,
      content: "Content Item 1 content",
    },
    {
      variant: "career",
      startPeriod: 2019,
      endPeriod: 2019,
      title: "Développeur web & UI Designer",
      organization: "Skapa",
      location: "Paris, France",
      value: 2,
      content: "Content Item 2 content",
    },
    {
      variant: "career",
      startPeriod: 2015,
      endPeriod: 2019,
      title: "Collaborateur polyvalent",
      organization: "U Express",
      location: "Vincennes, France",
      value: 3,
      content: "Content Item 3 content",
    },
  ],
  education: [
    {
      variant: "education",
      endPeriod: 2008,
      title: "Licence Technologies et design de multimédia",
      organization: "Instituto Politecnico de Viseu",
      location: "Viseu, Portugal",
    },
    {
      variant: "education",
      endPeriod: 2019,
      title: "Formation - Développeur intégrateur web",
      organization: "IFOCOP",
      location: "Paris, France",
    },
  ],
};
