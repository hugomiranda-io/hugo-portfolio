import { Mail, Earth } from "lucide-react";

import { Cta, Heading, Icon, Logo, Text } from "@components";
import "./Footer.scss";
import { FOOTERSOCIALS_DATA } from "@data";

export default function Footer() {
 return (
  <footer className="surface-subtle pt-5xl pb-3xl">
   <div className="container-app mx-auto container-grid">
    <div id="contact" className="contact-card">
     <div className="contact-card__header">
      <Icon icon={Mail} size="lg" color="strong" />
      <Heading as="h4">Contact</Heading>
     </div>
     <div className="contact-card__body ">
      <Text as="p" color="muted">
       Je suis toujours ouvert aux échanges — projets, collaborations ou simples idées. Écrivez-moi
       !
      </Text>
      <Cta as="a" href="mailto:contact@contact.com" variant="primary">
       Contact
      </Cta>
     </div>
    </div>
    <div className="contact-card">
     <div className="contact-card__header">
      <Icon icon={Earth} size="lg" color="strong" />
      <Heading as="h4">Présence en ligne</Heading>
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
