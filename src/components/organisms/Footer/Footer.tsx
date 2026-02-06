import { Earth, Mail } from "lucide-react";

import { Cta, Heading, Icon, Logo, Text } from "@components";
import "./Footer.scss";
import { LINKS } from "@data";
import { normalizePathname } from "@utils/paths";

type FooterProps = {
 currentPath?: string;
};

export default function Footer(props: FooterProps) {
 const { currentPath } = props;
 const normalizedCurrentPath = normalizePathname(currentPath);
 const showContacts = normalizedCurrentPath !== "/profile";
 const socialLinks = Object.values(LINKS.socials);
 const emailLink = LINKS.contact.email;

 return (
  <footer className="surface-subtle flex flex-col gap-5xl pt-4xl pb-4xl ">
   {showContacts && (
    <div className="container-app mx-auto container-grid footer-contacts">
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
       <Cta as="a" href={emailLink.href} variant="primary" leftIcon={emailLink.icon} wide>
        {emailLink.description}
       </Cta>
      </div>
     </div>
     <div className="contact-card">
      <div className="contact-card__header">
       <Icon icon={Earth} size="lg" color="strong" />
       <Heading as="h4">Présence en ligne</Heading>
      </div>
      <div className="contact-card__body ">
       {socialLinks.map((item) => (
        <Cta
         key={"button-" + item.label}
         variant="soft"
         as="a"
         href={item.href}
         externalLink
         label={item.label}
         leftIcon={item.icon}
         wide
        />
       ))}
      </div>
     </div>
    </div>
   )}
   <div className="container-app mx-auto flex items-center justify-center gap-sm">
    <Logo color="strong" size="xl" />
   </div>
  </footer>
 );
}
