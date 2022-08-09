import React, { useState } from "react";
import "./Engagement.css";
import { data } from "./data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Engagement = () => {
  const [donnée, setD] = useState(data);
  return (
    <div className="Engagement">
      <div className="Header2">
        <span>
          <span className="stroke">Notre</span> Engagement
        </span>
      </div>
      <div className="Comps">
        <span className="Textes">
          <h3 className="Texts">est la clé de notre réussite</h3>
          Dans les gènes de l’entreprise, le client est au centre de nos
          préoccupations. Nous concevons des solutions pour lui, avec lui et…
          grâce à un engagement fort de notre équipe.
        </span>
      </div>
      <div className="DATAS">
        {donnée.map((item, i) => {
          const { image, titre, details } = item;
          {
            return (
              <div key={i} className="DATA">
                {image}
                <span>{titre}</span>
                <span>{details}</span>
                <div className="plusinfos">
                  <span>Plus D'Infos</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Engagement;
