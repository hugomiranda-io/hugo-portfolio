import { Mail, Earth } from "lucide-react";

import { Cta, Icon, Logo } from "@components";
import "./Footer.scss";
import { FOOTERSOCIALS_DATA } from "@data";

export default function Footer() {
 return (
  <footer className="surface-subtle pt-5xl pb-3xl">
   <div className="container-app mx-auto container-grid">
    <div id="contact" className="contact-card">
     <div className="contact-card__header">
      <Icon icon={Mail} size="lg" color="strong" />
      <h4 className="heading">Contact</h4>
     </div>
     <div className="contact-card__body ">
      <p className="text-low-contrast ">
       Je suis toujours ouvert aux échanges — projets, collaborations ou simples idées. Écrivez-moi
       !
      </p>
      <Cta as="a" href="mailto:contact@contact.com" variant="primary">
       Contact
      </Cta>
     </div>
    </div>
    <div className="contact-card">
     <div className="contact-card__header">
      <Icon icon={Earth} size="lg" color="strong" />
      <h4 className="heading">Présence en ligne</h4>
     </div>
     <div className="contact-card__body ">
      {FOOTERSOCIALS_DATA.map((item) => (
       <Cta key={"button-" + item.label} variant="soft" externalLink {...item} />
      ))}
     </div>
    </div>
   </div>
   <div className="container-app mx-auto flex pt-5xl items-center justify-center gap-sm">
    <Logo color="strong" size="xl" />
   </div>
  </footer>
 );
}
