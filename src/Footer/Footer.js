import React from "react";
import Logo from "../Assets/Images/LOGO.svg";

import { AiFillFacebook as Ai } from "react-icons/ai";
import {
  BsInstagram as Instagram,
  BsTwitter as Twitter,
  BsLinkedin as Linkedin,
} from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="volo">
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Vous Cherchez une Solution Digitale , Allons y Avec
          Smart-SnakeTechnologie :
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <Link className="c" exact to="/evenement">
          Commencer{" "}
        </Link>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="gpt3__footer-links_div1">
          <h4>Links</h4>
          <p>Services</p>
          <p>Project</p>
          <p>Tarifs</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>SmartSnakeTechnologie</h4>
          <p>About-Us</p>
          <p>Contact-Us</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Nous suivre</h4>
          <div className="display">
            <Ai className="icon" />

            <Instagram className="icon" />

            <Twitter className="icon" />

            <Linkedin className="icon" />
          </div>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2022 SmartSnakeTechnologie. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
