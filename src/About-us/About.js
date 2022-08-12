import React from "react";
import { Pres } from "../ComponentsAlpha/Pres";
import Desc from "./Components/Component0/Desc1";
import Alpha from "../Assets/Images/Alpha.svg";
export const About = () => {
  const dataa = {
    img: <img className="Alpha" src={Alpha} alt="Alpha" />,
    header: "Manage HR To Work Efficiently ",
    texte:
      "We can help companies to manage HR to work efficiently to reach the goal effectively",
  };

  return (
    <div>
      <Pres {...dataa} />
      <div className="tech">
        <Desc />
      </div>
    </div>
  );
};
/*Smart-Snake Technology est une agence de Développement informatique au
      Maroc, spécialisée dans la conception et le développement mobile sur
      Android et IOS, la création des sites Web, Applications de gestion
      (Web/Desktop), Systèmes d’informations ERP, Cyber Security….  Notre équipe
      est composée de développeurs web, développeurs mobiles, testeurs,
      designers, Analyseurs et chefs de projet, tous experts et fiers par les
      projets qu’ils ont réalisés. Nous mettons à votre disposition notre
      expertise, passion, et savoir-faire afin de vous aider à développer votre
      stratégie digitale, renforcer votre compétitivité, et améliorer votre
      visibilité.Que vous soyez une grande entreprise ou une startup innovante
      qui cherche à mettre en ligne une solution digitale, Contactez-nous ! Nous
      serons très heureux de vous accompagner.  */
