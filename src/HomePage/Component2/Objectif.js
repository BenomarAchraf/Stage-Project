import React from "react";
import "./Objectif.css";
import image from "../../Assets/Images/NeonLeft.png";
import image1 from "../../Assets/Images/NeonRight.png";
import pc from "../../Assets/Images/tech2.png";
const Objectif = () => {
  return (
    <div className="Objectif">
      <div className="Header1">
        <span>
          <span className="stroke">Notre</span> Objectif
        </span>
      </div>
      <div className="Components">
        <span className="images">
          <img className="pc1" src={pc} alt="back" />
        </span>
        <span className="Texte">
          <h3 className="Text">le meilleur des nouvelles technologies</h3>
          Nous proposons une large palette de prestations destinées à fournir
          aussi bien des solutions clé en main que sur-mesure. Notre approche
          globale de l’informatique nous permet d’envisager une relation de
          longue durée avec nos clients par des prestations de responsable
          informatique externalisés.
        </span>
      </div>
    </div>
  );
};

export default Objectif;
