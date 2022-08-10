import React from "react";
import "./Desc.css";

import { CgArrowLongRight } from "react-icons/cg";
import pc from "../../../Assets/Images/telecom2.png";
import pc1 from "../../../Assets/Images/Togg.png";
import { Link } from "react-router-dom";
const Desc = () => {
  return (
    <div className="Desc">
      <div className="Desc1"></div>
      <div className="Desc2"></div>
      <div className="Desc3"></div>
      <div className="Head1">
        <span>
          <span className="stroke111">What</span> We
        </span>
      </div>

      <div className="Components11">
        <span className="images">
          <img className="pc11" src={pc} alt="back" />
        </span>
        <span className="Texte11">
          <h3 className="Text11">Smart-Snake Technology</h3>
          SST est une agence de Développement informatique au Maroc, spécialisée
          dans la conception et le développement mobile sur Android et IOS, la
          création des sites Web, Applications de gestion (Web/Desktop),
          Systèmes d’informations ERP, Cyber Security….
        </span>
      </div>
      <div className="Components111">
        <span className="Texte111">
          Notre équipe est composée de développeurs web, développeurs mobiles,
          testeurs, designers, Analyseurs et chefs de projet, tous experts et
          fiers par les projets qu’ils ont réalisés. Nous mettons à votre
          disposition notre expertise, passion, et savoir-faire afin de vous
          aider à développer votre stratégie digitale, renforcer votre
          compétitivité, et améliorer votre visibilité.
        </span>
        <span className="images">
          <img className="pc111" src={pc1} alt="back" />
        </span>
      </div>
      <div className="cus">
        <span className="cus1">
          Que vous soyez une grande entreprise ou une startup innovante qui
          cherche à mettre en ligne une solution digitale,
        </span>
        <span className="cus2">
          Contactez-nous ! Nous serons très heureux de vous accompagner.
        </span>
        <span className="cus3">
          <span>Nous Contactez </span>
          <Link to="/Contact-us">
            <CgArrowLongRight className="taille" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Desc;
