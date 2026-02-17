import { Heading, List } from "@components";
import type { ProfileData } from "@types";

type StackListProps = {
 data: ProfileData["techStack"];
};

export default function StackList({ data }: StackListProps) {
 return (
  <div className="flex flex-col gap-sm py-md">
   {data.map((item) => (
    <div className="flex flex-col gap-sm py-md" key={item.title}>
     <Heading as="h3" label={item.title} />
     <List items={item.data} variant="badge" />
    </div>
   ))}
  </div>
 );
}
