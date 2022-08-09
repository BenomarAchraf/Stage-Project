import Engage1 from "../../Assets/Images/Engage1.png";
import Engage2 from "../../Assets/Images/Engage2.png";
import Engage3 from "../../Assets/Images/Engage3.png";
import "./Engagement.css";
export const data = [
  {
    image: <img src={Engage1} className="Engage1" alt="Engage1" />,
    titre: "Concevoir des solutions opérationnelles et fiables",
    details:
      "Nous nous attachons à avoir une vue globale tant qu'on organisationnelle technique. L’humain est au cœur du système d’information.",
  },
  {
    image: <img src={Engage2} className="Engage1" alt="Engage2" />,
    titre: "Proposer du “sur-mesure”",
    details:
      "En intégrant les spécificités de nos clients et en analysant la meilleure adéquation besoin/solution (technologie…).",
  },
  {
    image: <img src={Engage3} className="Engage1" alt="Engage3" />,
    titre: "Accompagner durablement nos clients",
    details:
      "En étant réactif vis à vis des difficultés rencontrées, à l’écoute de nouveaux besoins via une organisation et des outils internes fiables.",
  },
];
