import React, { useState, useEffect } from "react";
import "./Services.css";
import { data, cloud } from "./data";
import { Link } from "react-router-dom";
const Cards = () => {
  const [donnée, setD] = useState(data);
  const [donnée1, setD1] = useState(cloud);

  return (
    <div className="pos">
      <div className="Services">
        <div className="Header3">
          <span> Our Services</span>
        </div>
        <div className="Items">
          {donnée.map((item, i) => {
            const { image, titre, details } = item;
            {
              return (
                <div key={i} className="Item">
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
        <div className="Items">
          {donnée1.map((item, i) => {
            const { image, titre, details } = item;
            {
              return (
                <div key={i} className="Item">
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
        <div className="Start">
          <h2> Start your Project ....</h2>
          <Link to="/Project" className="btn-mobile">
            <button className="btn11">Get-Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cards;
