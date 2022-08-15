import React, { useState, useEffect } from "react";
import "./Page.css";
import { data, cloud } from "./data";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
const Cards = () => {
  const [donnée, setD] = useState(data);
  const [donnée1, setD1] = useState(cloud);

  return (
    <div>
      <div className="pos-P">
        <div className="Services-P">
          <div className="Header3-P">
            <span> Our Recent Project</span>
          </div>
          <div className="Items-P">
            {donnée.map((item, i) => {
              const { image, titre, details, url } = item;
              {
                return (
                  <div key={i} className="Item-P">
                    {image}
                    <span>{titre}</span>
                    <span>{details}</span>
                    <Link to={url}>
                      <div className="plusinfos-P">
                        <span>Plus D'Infos</span>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <div className="Items-P1">
            {donnée1.map((item, i) => {
              const { image, titre, details, url } = item;
              {
                return (
                  <div key={i} className="Item-P">
                    {image}
                    <span>{titre}</span>
                    <span>{details}</span>
                    <Link to={url}>
                      <div className="plusinfos-P">
                        <span>Plus D'Infos</span>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="cus-P">
          <span className="cus1-P">
            Que vous soyez une grande entreprise ou une startup innovante qui
            cherche à mettre en ligne une solution digitale,
          </span>
          <span className="cus2-P">
            Contactez-nous ! Nous serons très heureux de vous accompagner.
          </span>
          <span className="cus3-P">
            <span>Nous Contactez </span>
            <Link to="/Contact-us">
              <CgArrowLongRight className="taille-P" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cards;
