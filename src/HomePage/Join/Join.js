import React, { useState, useEffect } from "react";
import "./Join.css";
import { data } from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Cards = () => {
  const [donnée, setD] = useState(data);
  const [index, setIndex] = useState(0);
  const [tab, setTab] = useState([0, 1, 2]);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > 5) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = 5;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > 5) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="CardsJoin">
      <div className="HeaderJoin">
        <span> Our Services</span>
      </div>
      <div className="CategoriesJoin">
        <button className="prev" onClick={nextSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={prevSlide}>
          <FiChevronRight />
        </button>

        {donnée.map((item, i) => {
          let posi = "nextSlideJoin";
          if (i === index) {
            posi = "activeSlideJoin";
          }
          if (i === index - 1 || (index == 0 && i === 5)) {
            posi = "lastSlideJoin";
          }
          {
            return (
              <div className={posi}>
                <div className="CategoriesJoin">
                  {item.map((elt, j) => {
                    const { image, titre, details } = elt;
                    return (
                      <div key={i} className="CategorieJoin">
                        {image}
                        <span>{titre}</span>
                        <span>{details}</span>
                        <div className="plusinfosJoin">
                          <span>Plus D'Infos</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Cards;
