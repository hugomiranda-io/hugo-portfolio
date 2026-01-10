import "./Hero.css";
import { Logo } from "@components";
import { HERO_DATA } from "@data";

export default function Hero() {
 return (
  <>
   <div className="flex flex-col">
    <div className="flex flex-row gap-md mt-2xl mb-2xl">
     <Logo size="xl" color="dark" />
     <div className="flex flex-col justify-center">
      <h2 className="heading text-high-contrast">{HERO_DATA.title}</h2>
      <h3 className="heading text-low-contrast">{HERO_DATA.subtitle}</h3>
     </div>
    </div>
    <div className="flex flex-col gap-xs">
     {HERO_DATA.text.map((paragraph, index) => (
      <p className="text-low-contrast" key={index}>
       {paragraph}
      </p>
     ))}
    </div>
   </div>
  </>
 );
}
