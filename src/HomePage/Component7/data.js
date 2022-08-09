import Video from "../../Assets/Images/Equipe1.svg";
import Video1 from "../../Assets/Images/Conseillons.svg";
import Video2 from "../../Assets/Images/Optimisons.svg";
import Video3 from "../../Assets/Images/Mesurons.svg";

import {
  AiFillEdit as Besoins,
  AiFillDashboard as Planification,
  AiFillSetting as Maintenance,
  AiFillControl as Test,
  AiFillRocket as Miseenplace,
  AiTwotoneTool as Dev,
} from "react-icons/ai";
import "./Projet.css";
export const data = [
  {
    image: <Besoins className="Engage4" />,
    titre: "01.Analyse des besoins",
    details:
      "D'abord, nous commençons par analyser attentivement vos besoins et vos exigences, ensuite nous vous proposons la solution la plus pertinente possible, enfin nous élaborons ensemble un cahier des charges (CDC) qui décrit toutes vos attentes.",
  },
  {
    image: <Planification className="Engage4" />,
    titre: "02.Conception et Planification",
    details:
      "Ensuite, nous démarrons cette phase par la désignation des technologies Web adéquates à votre projet. Ensuite, nous décomposons le projet en tâches afin de maîtriser son avancement, enfin nous élaborons un document « Planning » qui ordonnancera toutes les tâches dans le temps.",
  },
  {
    image: <Dev className="Engage4" />,
    titre: "03.Développement et Réalisation",
    details:
      "C’est à partir de cette phase que votre projet commence à se concrétiser, l’équipe technique chargée de la programmation et de la configuration, développe les premiers composants et consolide les résultats, en respectant les spécifications et les contraintes de vos exigences.",
  },
];

export const data1 = [
  {
    image: <Test className="Engage4" />,
    titre: "04.Tests et Validations",
    details:
      "Dans cette phase, notre priorité est d’assembler tous les composants réalisés et les tester unitairement, avant de passer au test général qui garantira le bon fonctionnement du produit final et la qualité que vous attendez.",
  },
  {
    image: <Miseenplace className="Engage4" />,
    titre: "05.Mise en place et livraison",
    details:
      "Enfin, votre appréciation du résultat final, nous permettra de mettre en place le produit dans son environnement de production, pour vous permettre d’en profiter et de mettre vos stratégies en évidence.",
  },
  {
    image: <Maintenance className="Engage4" />,
    titre: "06.Maintenance et Mise à jour",
    details:
      "Notre engagement ne se limite pas au déploiement du livrable, mais il s’étale à toute éventuelle maintenance (corrective, évolutive, et préventive). Cependant, nous vous garantissons une disponibilité immédiate pour une assistance en ligne ou sur place.",
  },
];
