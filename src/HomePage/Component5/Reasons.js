import React from "react";
import "./Reasons.css";
import Reason from "../../Assets/Images/Reasens.png";
import Reason1 from "../../Assets/Images/Reasens1.png";
import Reason2 from "../../Assets/Images/Reasens2.png";
import Reason3 from "../../Assets/Images/Reasens3.png";
import { TiTickOutline as Tick } from "react-icons/ti";
import { BiAperture as Bi } from "react-icons/bi";
import { AiFillApple as Ai } from "react-icons/ai";
import { AiFillSignal as Fi } from "react-icons/ai";

const Reasons = () => {
  return (
    <div className="Reasons">
      <div className="Left-r">
        <img src={Reason3} alt="" />
        <img src={Reason1} alt="" />
        <img src={Reason2} alt="" />
        <img src={Reason} alt="" />
      </div>
      <div className="right-r">
        <span> Some Reasons</span>
        <div>
          <span className="stroke">Pourquoi</span>
          <span> Nous Choisir?</span>
        </div>
        <div className="details-r">
          <div>
            <Tick />
            <span>Top ranking agency</span>
          </div>
          <div>
            <Tick />
            <span>Work is done by an expert team</span>
          </div>
          <div>
            <Tick />
            <span>100% trusted, 24/7 support </span>
          </div>
          <div>
            <Tick />
            <span>World wide service, Market analysis</span>
          </div>
          <div>
            <Tick />
            <span>Top features</span>
          </div>
        </div>
        <span style={{ fontweight: "normal", color: "gray" }}>
          Our Partners
        </span>
        <div className="partners">
          <Bi />
          <Ai />
          <Fi />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
