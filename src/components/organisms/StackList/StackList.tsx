import { Heading, List } from "@components";
import type { ProfileData } from "@types";

type StackListProps = {
 data: ProfileData["techStack"];
};

export default function StackList({ data }: StackListProps) {
 return (
  <div className="flex flex-col gap-lg py-md">
   <Heading as="h2" label="Compétences" />
   <div className="flex flex-col gap-md">
    {data.map((item) => (
     <div className="flex flex-col gap-xs" key={item.title}>
      <Heading as="h3" label={item.title} color="muted" />
      <List items={item.data} variant="badge" />
     </div>
    ))}
   </div>
  </div>
 );
}
