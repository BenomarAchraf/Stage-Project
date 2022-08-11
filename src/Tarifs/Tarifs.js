import React, { useState } from "react";
import "./Tarifs.css";
import Lider from "./Slider/Slider";
import { Data } from "./Data";
import { Data1 } from "./Data1";

import { FcPrevious, FcNext } from "react-icons/fc";

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
  };

  /* <div className="Tarifs">
      <div className="First">Pack Site Vitrine</div>
      <div className="Vitrine">
        <Lider data={data} />
      </div>
    </div>*/

  const [data, setData] = useState(Data);
  const [data1, setData1] = useState(Data1);

  return (
    <div className="aze">
      <Slider
        className="azin"
        {...settings}
        prevArrow={<FcPrevious />}
        nextArrow={<FcNext />}
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
  );
};

export default Tarifs;
