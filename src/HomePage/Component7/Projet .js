import React, { useEffect, useState } from "react";
import "./Projet.css";
import { data, data1 } from "./data";

import Reason from "../../Assets/Images/Reasens.png";
import Reason1 from "../../Assets/Images/Reasens1.png";
import Reason2 from "../../Assets/Images/Reasens2.png";
import Reason3 from "../../Assets/Images/Reasens3.png";

const Home = () => {
  const [donnée, setD] = useState(data);
  const [donnée1, setD1] = useState(data1);
  return (
    <div>
      <div className="blan">
        <div className="right-p">
          <div className="QSn">
            <h1>
              Comment
              <span className="strokes"> gérons-nous</span> votre projet ?
            </h1>
            <p>
              Le but ultime de notre agence web Smart-Snake Technology est de
              satisfaire tous nos clients en leur offrant un service
              exceptionnel alliant efficacité, efficience et pertitence et qui
              respecte le triptyque Coût – Délai – Qualité . Afin de réussir
              notre mission, nous nous engageons fortement à respecter la bonne
              conduite de gestion des projets web en modèle évolutif :
            </p>
          </div>
        </div>
        <div className="Left-p">
          <img src={Reason3} alt="" />
          <img src={Reason1} alt="" />
          <img src={Reason2} alt="" />
          <img src={Reason} alt="" />
        </div>
      </div>
      <div className="position">
        <div className="données1">
          {donnée.map((item, i) => {
            const { image, titre, details } = item;
            {
              return (
                <>
                  <div key={i} className="donnée1">
                    {image}
                    <div className="galerie1">
                      <span>{titre}</span>
                      <span>{details}</span>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className="données1">
          {donnée1.map((item, i) => {
            const { image, titre, details } = item;
            {
              return (
                <>
                  <div key={i} className="donnée1">
                    {image}
                    <div className="galerie1">
                      <span>{titre}</span>
                      <span>{details}</span>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
