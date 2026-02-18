import type { ReactNode } from "react";

export type CommonProps = {
 id?: string;
 title: string;
 organization: string;
 location: string;
};

export type TimelineContent = {
 type: "paragraph" | "list-dot" | "list-badge";
 title?: string;
 values: string[];
};

export type CareerElementProps = {
 variant: "career";
 startPeriod: number;
 endPeriod: number;
 children: ReactNode;
};

export type EducationElementProps = {
 variant: "education";
 startPeriod?: never;
 endPeriod: number;
 children?: never;
 value?: never;
};

export type TimelineItemProps = CommonProps & (CareerElementProps | EducationElementProps);

export type CareerTimelineDataItem = Omit<CommonProps & CareerElementProps, "children"> & {
 description: TimelineContent[];
};

export type EducationTimelineDataItem = CommonProps & EducationElementProps;

export type TimelineData = {
 career: CareerTimelineDataItem[];
 education: EducationTimelineDataItem[];
};
