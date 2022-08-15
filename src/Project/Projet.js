import React from "react";
import { Pres } from "../ComponentsAlpha/Pres";
import Desc from "./Components/Page";
import Alpha from "../Assets/Images/Alpha.svg";
export const Project = () => {
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
