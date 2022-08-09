import React, { useState } from "react";
import "./Client.css";
import { data } from "./data";
import { BsCircle as Cercle } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Client = () => {
  const [donnée, setD] = useState(data);
  return (
    <div className="Client">
      <div className="Données">
        {donnée.map((item, i) => {
          const { image, icon, titre, details } = item;
          {
            return (
              <>
                <div key={i} className="Donnée">
                  {image}
                  <div className="Galerie">
                    {icon}
                    <span>{titre}</span>
                    <span>{details}</span>
                    <div className="plusinfos">
                      <span>Plus D'Infos</span>
                    </div>
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
