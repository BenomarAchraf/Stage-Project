import React, { useEffect, useState } from "react";
import "./design.css";
import { data } from "./data";
import Cards from "./Component1/Cards";
import Page from "./Component0/page";
import Engagement from "./Component3/Engagement";
import { BsFillArrowRightCircleFill as Sahm } from "react-icons/bs";
import { Link } from "react-router-dom";
import pc from "../Assets/Images/PC1.svg";
import { AiFillFacebook as Ai } from "react-icons/ai";
import {
  BsInstagram as Instagram,
  BsTwitter as Twitter,
  BsLinkedin as Linkedin,
} from "react-icons/bs";
import Objectif from "../HomePage/Component2/Objectif";
import Client from "./Component4/Client";
import Reasons from "./Component5/Reasons";
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
      <div>
        <Page />
      </div>
      <Ai className="icon1" />

      <Instagram className="icon2" />

      <Twitter className="icon3" />

      <Linkedin className="icon4" />
      <div>
        <Link to="/About-us" className="flex">
          <Sahm /> <br /> <br /> <br /> Plus d'infos
        </Link>
      </div>
      <div className="Component2">
        <Objectif />
      </div>
      <div className="Component3">
        <Engagement />
      </div>
      <div className="Component4">
        <Client />
      </div>
      <div className="Component0">
        <Cards />
      </div>
      <div className="d">
        <div className="Component5">
          <Reasons />
        </div>
      </div>
    </div>
  );
};

export default Home;
