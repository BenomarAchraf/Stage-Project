import React from "react";
import "./Contactez.css";

import { BsTelephone as Phone } from "react-icons/bs";

import { TbWorld as WebSite } from "react-icons/tb";

import { MdOutlineAlternateEmail as Gmail } from "react-icons/md";

import { TiTickOutline as Tick, TiLocation as Adress } from "react-icons/ti";
const Contact1 = () => {
  return (
    <div className="Cont">
      <div className="Reasons-c">
        <div className="right-r-c">
          <span> Contact-us</span>
          <div className="Khat"></div>
          <p>
            Nous sommes très réactifs, écrivez-nous et nous vous répondrons dans
            les meilleurs délais.{" "}
          </p>
          <div className="details-r-c">
            <div>
              <Adress />
              <span>
                Adress:{" "}
                <span className="Infoo">Lot El Wahda Bloc D Laayoune</span>{" "}
              </span>
            </div>
            <div>
              <Phone />
              <span>
                Phone: <span className="Infoo">(+212)-681.58.57.37</span>
              </span>
            </div>
            <div>
              <Gmail />
              <span>
                Gmail:{" "}
                <span className="Infoo">Smart.snake.technology@gmail.com</span>{" "}
              </span>
            </div>
            <div>
              <WebSite />
              <span>
                WebSite:{" "}
                <span>
                  {" "}
                  <a className="Infoo" href="smart-snake-technology.ma">
                    smart-snake-technology.ma
                  </a>{" "}
                </span>
              </span>
            </div>
          </div>
          <span style={{ fontweight: "normal", color: "gray" }}> </span>
          <div className="partners-c"></div>
        </div>
      </div>
    </div>
  );
};
export default Contact1;
