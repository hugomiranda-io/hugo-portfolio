export type TechStackCategory = {
 title: string;
 data: readonly string[];
};

export type ProfileData = {
 name: string;
 job: string;
 shortDescription: readonly string[];
 longDescription: readonly string[];
 techStack: readonly TechStackCategory[];
};
