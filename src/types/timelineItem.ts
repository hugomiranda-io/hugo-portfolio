import type { ReactNode } from "react";

export type CommonProps = {
  title: string;
  organization: string;
  location: string;
};

export type CareerElementProps = {
  variant: "career";
  startPeriod: number;
  endPeriod: number;
  children: ReactNode;
  value: number;
};

export type EducationElementProps = {
  variant: "education";
  startPeriod?: never;
  endPeriod: number;
  children?: never;
  value?: never;
};

export type TimelineItemProps = CommonProps &
  (CareerElementProps | EducationElementProps);
