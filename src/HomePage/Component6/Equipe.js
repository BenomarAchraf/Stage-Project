import React, { useState } from "react";
import "./Equipe.css";
import { data } from "./data";
import { BsCircle as Cercle } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Client = () => {
  const [donnée, setD] = useState(data);
  return (
    <div className="Equipe">
      <div className="header2">
        <span>
          <span className="stroke">Equipe experte, </span> jeunes et motivés
        </span>
      </div>
      <div className="comps">
        <span className="textes">
          la société Smart-Snake Technology recrute des jeunes polyvalents
          ambitieux par le leur travail aillons un grand esprit d'équipe.
        </span>
      </div>
      <span className="Digital">
        <h2 className="Style">
          Des Solutions Digitals pour Consolider votre Image
        </h2>
      </span>
      <div className="Ligne"></div>
      <div className="données">
        {donnée.map((item, i) => {
          const { image, titre } = item;
          {
            return (
              <>
                <div key={i} className="donnée">
                  {image}
                  <div className="galerie">
                    <span>{titre}</span>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Client;
