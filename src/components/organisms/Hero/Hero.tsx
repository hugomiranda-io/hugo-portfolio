import "./Hero.css";

export default function Hero() {
 return (
  <>
   <div className="flex flex-col">
    <div className="flex flex-col mt-2xl mb-2xl">
     <h2 className="heading text-high-contrast">Hugo Miranda</h2>
     <h3 className="heading text-low-contrast">Développeur Front-End & Ui Designer</h3>
    </div>
    <div className="flex flex-col gap-xl">
     <p className="text-low-contrast">
      Développeur front-end & UI Designer créant des expériences digitales engageantes, accessibles
      et orientées résultats.
     </p>
     <p className="text-low-contrast">
      Je fais le lien entre esthétique et performance, en concevant des solutions web qui répondent
      à de vrais besoins. Grâce à mon expertise en intégration front-end, design system et
      accessibilité, je construis des produits à la fois élégants, efficaces et durables.
     </p>
    </div>
   </div>
  </>
 );
}
