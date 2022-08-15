import React from "react";
import Alpha from "../Assets/Images/Alpha.svg";
import "./Pres.css";
import "@fontsource/poppins";
import { Link } from "react-router-dom";
export const Pres = (dataa) => {
  const { img, header, texte } = dataa;
  return (
    <div className="Pres">
      <span>{img}</span>
      <p className="h30">Smart-Snake Technology</p>
      <p className="h31">{header}</p>
      <p className="h32">{texte}</p>
      <Link to="/Projet" className="Click">
        <span>Join us now</span>
      </Link>
    </div>
  );
};
/*<div className="Pres">
      <img className="Alpha" src={Alpha} alt="Alpha" />
      <span className="h30">Smart-Snake Technology</span>
      <p className="h31">Manage HR To Work Efficiently </p>
      <p className="h32">
        We can help companies to manage HR to work efficiently to reach the goal
        effectively
      </p>
      <Link to="/Projet" className="Click">
        Join us now
      </Link>
    </div> */
