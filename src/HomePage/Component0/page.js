import React, { useEffect, useState } from "react";
import "./design.css";
import { data } from "./data";
import anime from "../../Assets/Images/laptop1.svg";
import anime1 from "../../Assets/Images/sky2.svg";
import anime2 from "../../Assets/Images/cercle1.svg";
import anime3 from "../../Assets/Images/plan4.svg";
import anime4 from "../../Assets/Images/icon.svg";
import pc from "../../Assets/Images/PC1.svg";
import { AiFillFacebook as Ai } from "react-icons/ai";
import {
  BsInstagram as Instagram,
  BsTwitter as Twitter,
  BsLinkedin as Linkedin,
} from "react-icons/bs";
import Reason from "../../Assets/Images/Reasens.png";
import Reason1 from "../../Assets/Images/Reasens1.png";
import Reason2 from "../../Assets/Images/Reasens2.png";
import Reason3 from "../../Assets/Images/Reasens3.png";
import { BsFillArrowRightCircleFill as Sahm } from "react-icons/bs";
import { Link } from "react-router-dom";
const Home = () => {
  const [index, setIndex] = useState(0);
  const [back, setback] = useState(data[index]);

  /* useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % 3);
      setback(data[index]);
    }, 50000);
  });*/

  return (
    <div>
      <div className="Affiche">
        <div className={back.class}>
          <h1>DIGITAL </h1>
          <h1> SOLUTIONS</h1>
          <p>{back.text}</p>
        </div>
        <img
          className="image"
          src={anime}
          onClick={() => console.log(back.url)}
          alt="back"
        />
        <img
          className="image1"
          src={anime1}
          onClick={() => console.log(back.url)}
          alt="back"
        />
        <img
          className="image2"
          src={anime2}
          onClick={() => console.log(back.url)}
          alt="back"
        />
        <img
          className="image3"
          src={anime3}
          onClick={() => console.log(back.url)}
          alt="back"
        />
        <div className="hero-btns">
          <Link to="/sign-up" className="btn-mobile">
            <button className="btn1">LOREM IPSUMA</button>
          </Link>
          <Link to="/sign-up" className="btn-mobile">
            <button className="btn btn--outline btn--large">GET STARTED</button>
          </Link>
        </div>
      </div>
      <div className="blank">
        <div className="right-r-h">
          <div className="QSN">
            <h1>
              <span className="strokes">Qui Sommes</span> Nous?
            </h1>
            <p>
              Smart-Snake Technology est une agence spécialisée dans le domaine
              du développement web & mobile, le référencement naturel SEO,
              l'intégration des ERP et CRM, le développement des
              intranet/extranet, et le marketing digital avancé. Son portfolio
              compte des centaines de projets d'envergure réalisés partout au
              Maroc et en offshore.
            </p>
          </div>
        </div>
        <div className="Left-r-h">
          <img src={Reason3} alt="" />
          <img src={Reason1} alt="" />
          <img src={Reason2} alt="" />
          <img src={Reason} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
