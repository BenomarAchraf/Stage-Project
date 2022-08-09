import React, { useState, useEffect } from "react";
import "./Cards.css";
import { data } from "./Data";

const Cards = () => {
  const [donnée, setD] = useState(data);
  const [index, setIndex] = useState(0);
  const [tab, setTab] = useState([index, (index + 1) % 6, (index + 2) % 6]);

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % 6);
      setTab([index, (index + 1) % 6, (index + 2) % 6]);
    }, 5000);
  });

  const contain = (i) => {
    let j = 0;
    for (j = 0; j < 6; j++) {
      if (tab[j] === i) return true;
    }
    return false;
  };

  return (
    <div className="Cards">
      <div className="Header">
        <span> Our Services</span>
      </div>
      <div className="Categories">
        {donnée.map((item, i) => {
          const { image, titre, details } = item;
          if (contain(i)) {
            return (
              <div key={i} className="Categorie">
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
export default Cards;
