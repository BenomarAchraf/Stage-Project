import Equipe from "../../Assets/Images/Equipe.png";
import Client from "../../Assets/Images/client.png";
import Engagement from "../../Assets/Images/Engagement.png";
import "./Client.css";
import { BsBriefcase as Engage1, BsCircle as cercle } from "react-icons/bs";
import { GiDoubleRingedOrb as Equipe1 } from "react-icons/gi";
import { GoOrganization as Equipe2 } from "react-icons/go";
import { GrSync as Client1 } from "react-icons/gr";

export const data = [
  {
    image: <img src={Equipe} className="Engage2" alt="Engage1" />,
    icon: <Equipe2 />,
    titre: "Equipe",
    details:
      "Notre équipe est composée des jeunes développeurs, dynamique, polyvalente et créative ayant comme mission la satisfaction des besoins de nos clients et nos partenaires",
  },
  {
    image: <img src={Client} className="Engage2" alt="Engage1" />,
    icon: <Client1 />,
    titre: "Clients",
    details:
      "Nous attachons une importance fondamentale à la qualité de notre service, à la qualité de nos produits et au contact privilégié que nous entretenons avec nos utilisateurs..",
  },
  {
    image: <img src={Engagement} className="Engage3" alt="Engage1" />,
    icon: <Engage1 />,
    titre: "Engagement",
    details:
      "Notre engagement assurer la conformité, l'évolutivité et la pérennité de nos solutions dans une véritable approche métier et inscrire notre démarche dans l'accompagnement de proximité de nos clients au quotidien.",
  },
];
