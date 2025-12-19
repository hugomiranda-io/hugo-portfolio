import { Cta, Icon } from "@components";
import { Mail, Earth } from "lucide-react";
import "./Footer.css";
import { FOOTERSOCIALS_DATA } from "@data";

export default function Footer() {
  return (
    <footer className="surface-subtle pt-3xl pb-3xl">
      <div className="container-app mx-auto container-grid">
        <div id="contact" className="contact-card">
          <div className="contact-card__header">
            <Icon icon={Mail} size="lg" priority="high" />
            <h4 className="heading">Contact</h4>
          </div>
          <div className="contact-card__body ">
            <p className="text-low-contrast ">
              Je suis toujours ouvert aux échanges — projets, collaborations ou
              simples idées. Écrivez-moi !
            </p>
            <Cta as="a" href="mailTo:contact@contact.com" variant="primary">
              Contact
            </Cta>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card__header">
            <Icon icon={Earth} size="lg" priority="high" />
            <h4 className="heading">Présence en ligne</h4>
          </div>
          <div className="contact-card__body ">
            {FOOTERSOCIALS_DATA.map((item) => (
              <Cta variant="soft" target="_blank" {...item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
