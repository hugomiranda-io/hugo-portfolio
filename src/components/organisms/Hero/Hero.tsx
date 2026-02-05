import "./Hero.scss";
import { Logo, Text } from "@components";
import { PROFILE_DATA } from "@data";

export default function Hero() {
 return (
  <>
   <div className="flex flex-col">
    <div className="flex flex-row gap-md mt-2xl mb-2xl">
     <Logo size="xl" color="strong" />
     <div className="flex flex-col justify-center">
      <h2 className="heading text-strong">{PROFILE_DATA.name}</h2>
      <h3 className="heading text-muted">{PROFILE_DATA.job}</h3>
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
