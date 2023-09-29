import { Reveal } from "./Reveal";
import imgMoulinNight from "../assets/img/moulin-night.jpg";
import { VscPerson } from "react-icons/vsc";
import { MdOutlineBed } from "react-icons/md";
import { LuBedSingle } from "react-icons/lu";
import { LuShowerHead } from "react-icons/lu";
import { PiSwimmingPool } from "react-icons/pi";
import { LuParkingSquare } from "react-icons/lu";
import { GiWaterfall } from "react-icons/gi";
import Carousel from "./Carousel";
import Slideshow from "./Slideshow";
import imagesMoulin from "./ImagesMoulin";
import imagesBergerie from "./ImagesBergerie";

const Presentation = () => {
  /*   function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const imgMoulin = importAll(
    require.context("../assets/img/img-moulin", false, /\.(png|jpe?g|svg)$/)
  );
  const imgBergerie = importAll(
    require.context(`../assets/img/img-bergerie`, false, /\.(png|jpe?g|svg)$/)
  ); */
  return (
    <div className="overview">
      <div className="intro">
        <p className="overview-text">
          Découvrez un havre de paix en Corse, niché au cœur d'une nature
          préservée. Deux logements disponibles, loués à des périodes
          différentes pour assurer une tranquillité totale à nos locataires. Un
          logement peut acceuilir jusqu'à 9 personnes et l'autre jusqu'à 4
          personnes. Nous vous garantissons calme et détente avec une rivière à
          quelques pas du Moulin dans laquelle vous pourrez vous rafraîchir...
        </p>
        <img src={imgMoulinNight} alt="" className=" circle-img skeleton" />
      </div>

      <h2 className="presentation-title">Nos logements</h2>

      <div className="accomodations">
        <Reveal>
          <div className="accomodation">
            <div className="accomodation-text-container">
              <h2 className="accomodation-title">Le Moulin Casta</h2>
              <div>
                <h4>Disponible du 15 juin au 15 septembre</h4>
                <h5 className="availability-title">
                  Réservations uniquement du samedi au samedi
                </h5>
              </div>
              <ul className="amenities-moulin">
                <li>
                  <VscPerson />
                  <h5>9 voyageurs</h5>
                </li>
                <li>
                  <MdOutlineBed /> <h5>3 lits doubles</h5>
                </li>
                <li>
                  <LuBedSingle /> <h5>3 lits simples</h5>
                </li>
                <li>
                  <LuShowerHead /> <h5>2 salles de bains</h5>
                </li>
                <li>
                  <PiSwimmingPool /> <h5>1 piscine</h5>
                </li>
                <li>
                  <LuParkingSquare /> <h5>Parking</h5>
                </li>
                <li>
                  <GiWaterfall /> <h5>Rivière</h5>
                </li>
              </ul>
              <p>
                Le Moulin Casta est un logement de 200m² sur 2 étages avec accès
                privatif à la piscine, au jardin et un grand balcon vous offrant
                une vue imprenable sur la nature Corse. Nous vous garantissons
                une tranquilité comme nul part ailleurs.
              </p>
            </div>
            <Slideshow
              accommodation="moulin"
              images={imagesMoulin.slice(0, 5)}
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="accomodation bergerie">
            <div className="accomodation-text-container">
              <h2 className="accomodation-title">La Bergerie du Moulin</h2>
              <h4>
                Disponible du 15 avril au 15 juin & du 15 septembre au 15
                novembre.
              </h4>
              <ul className="amenities-bergerie">
                <li>
                  <VscPerson />
                  <h5>4 voyageurs</h5>
                </li>
                <li>
                  <MdOutlineBed /> <h5>2 lits doubles</h5>
                </li>
                <li>
                  <LuShowerHead /> <h5>1 salle de bain</h5>
                </li>
                <li>
                  <LuParkingSquare /> <h5>Parking</h5>
                </li>
                <li>
                  <GiWaterfall /> <h5>Rivière</h5>
                </li>
              </ul>
              <p>
                La Bergerie du Moulin est un logement de 55m² au rez-de-chaussée
                du moulin avec une chambre équipée d'une salle de bain et une
                pièce à vivre avec 2 lits simples. Vous aurez accès à un jardin
                et à la rivière qui est à deux pas.
              </p>
            </div>
            <Slideshow
              accommodation="moulin"
              images={imagesBergerie.slice(0, 5)}
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Presentation;
