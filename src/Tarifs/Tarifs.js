import React, { useState, useEffect } from "react";
import "./Tarifs.css";
import Lider from "./Slider/Slider";
import "@fontsource/poppins";
import Alpha from "../Assets/Images/Alpha.svg";
import { Data } from "./Data";
import { Data1 } from "./Data1";
import { Pres } from "../ComponentsAlpha/Pres";
import { FcPrevious, FcNext } from "react-icons/fc";

import { CgArrowLongRight } from "react-icons/cg";

import { Link } from "react-router-dom";

import { GiCheckMark as Check } from "react-icons/gi";
import Slider from "react-slick";

const Tarifs = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dataa = {
    img: <img className="Alpha" src={Alpha} alt="Alpha" />,
    header: "Manage HR To Work Efficiently ",
    texte:
      "We can help companies to manage HR to work efficiently to reach the goal effectively",
  };

  /* <div className="Tarifs">
      <div className="First">Pack Site Vitrine</div>
      <div className="Vitrine">
        <Lider data={data} />
      </div>
    </div>*/

  const [data, setData] = useState(Data);
  const [data1, setData1] = useState(Data1);

  const Next = (props) => {
    const { className, onClick } = props;
    return (
      <div id="prev" className={className} onClick={onClick}>
        <FcNext
          style={{
            position: "relative",
            top: "-1rem",
            color: "gray",
            right: "-1.5rem",
            fontSize: "45px",
          }}
        />
      </div>
    );
  };

  const Prev = (props) => {
    const { className, onClick } = props;
    return (
      <div id="prev" className={className} onClick={onClick}>
        <FcPrevious
          style={{
            position: "relative",
            top: "-1rem",
            left: "-1.5rem",
            color: "gray",
            fontSize: "45px",
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <Pres {...dataa} />
      <div className="Packs">
        <span>
          <span className="stroke11">Packs</span> Sites
        </span>
      </div>
      <div className="Ou">
        <div className="Vitrine">
          <span className="Vitrine1">Pack </span>
          <span className="Vitrine1">Site-Vitrine</span>
        </div>
        <div className="Catg">
          <div className="Catg1">
            <Check />
            <span>Pack Premium</span>
          </div>
          <div className="Catg1">
            <Check />
            <span>Pack Business</span>
          </div>
          <div className="Catg1">
            <Check />
            <span>Pack Essentiel</span>
          </div>
        </div>
      </div>
      <div className="Ou1">
        <div className="Vitrine2">
          <span className="Vitrine1">Pack </span>
          <span className="Vitrine1">Site_E-Commerce</span>
        </div>
        <div className="Catg2">
          <div className="Catg1">
            <Check />
            <span>Pack Premium</span>
          </div>
          <div className="Catg1">
            <Check />
            <span>Pack Business</span>
          </div>
          <div className="Catg1">
            <Check />
            <span>Pack Essentiel</span>
          </div>
        </div>
      </div>
      <div className="aze">
        <Slider
          className="azin"
          {...settings}
          prevArrow={<Prev />}
          nextArrow={<Next />}
        >
          {data.map((item, i) => {
            return (
              <div key={i} className="tailleSlider">
                {item}
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="aze1">
        <Slider
          className="azin"
          {...settings}
          prevArrow={<Prev />}
          nextArrow={<Next />}
        >
          {data1.map((item, i) => {
            return (
              <div key={i} className="tailleSlider">
                {item}
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="T-cus">
        <span className="T-cus1">
          Que vous soyez une grande entreprise ou une startup innovante qui
          cherche à mettre en ligne une solution digitale,
        </span>
        <span className="T-cus2">
          Contactez-nous ! Nous serons très heureux de vous accompagner.
        </span>
        <span className="T-cus3">
          <span>Nous Contactez </span>
          <Link to="/Contact-us">
            <CgArrowLongRight className="T-taille" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Tarifs;
