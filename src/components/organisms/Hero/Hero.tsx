import { Heading, Logo, Text } from "@components";
import { PROFILE_DATA } from "@data";

export default function Hero() {
 return (
  <>
   <div className="flex flex-col">
    <div className="flex flex-row gap-md mt-2xl mb-2xl">
     <Logo size="xl" color="strong" />
     <div className="flex flex-col justify-center">
      <Heading as="h2" label={PROFILE_DATA.name} />
      <Heading as="h3" color="muted" label={PROFILE_DATA.job} />
     </div>
    </div>
    <div className="flex flex-col gap-xs">
     {PROFILE_DATA.shortDescription.map((paragraph, index) => (
      <Text key={index} as="p" color="muted" text={paragraph} />
     ))}
    </div>
   </div>
  </>
 );
}
