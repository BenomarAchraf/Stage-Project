import Equipe from "../../Assets/Images/Equipe.png";
import Video from "../../Assets/Images/Equipe1.svg";
import Video1 from "../../Assets/Images/Conseillons.svg";
import Video2 from "../../Assets/Images/Optimisons.svg";
import Video3 from "../../Assets/Images/Mesurons.svg";

import "./Equipe.css";

export const data = [
  {
    image: <img src={Video} className="Engage2" alt="Engage1" />,
    titre: "01.Nous analysons",
  },
  {
    image: <img src={Video1} className="Engage2" alt="Engage1" />,
    titre: "02.Nous Conseillons",
  },
  {
    image: <img src={Video2} className="Engage2" alt="Engage1" />,
    titre: "03.Nous Optimisons",
  },
  {
    image: <img src={Video3} className="Engage2" alt="Engage1" />,
    titre: "04.Nous Mesurons",
  },
];
