import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarComponents";

import logo from "../Assets/Images/icon.svg";
import logo1 from "../Assets/Images/LOGO1.svg";
import "./Navbar.css";

const NavbarComponent = () => {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showsidebar = () => {
    if (window.innerWidth > 768) {
      setClick(false);
    }
  };

  const showNavbar = () => {
    if (window.scrollY > 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    showsidebar();
  }, []);

  window.addEventListener("resize", showsidebar);
  window.addEventListener("scroll", showNavbar);
  return (
    <div className="nav">
      <Nav className={nav && "activess"}>
        <NavLink to="/">
          <img className="img" src={nav ? logo : logo1} alt="logo" />
        </NavLink>
        <Bars onClick={handleClick} />
        <NavMenu>
          <NavLink to="/Acceuil" activeStyle>
            Acceuil
          </NavLink>
          <NavLink to="/Services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/Project" activeStyle>
            Project
          </NavLink>
          <NavLink to="/Tarifs" activeStyle>
            Tarifs
          </NavLink>
          <NavLink to="/About-us" activeStyle>
            About-us
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/Contact-us">Contact-us</NavBtnLink>
          </NavBtn>
        </NavMenu>
        {click && (
          <div className="">
            <ul className="nav-menu active">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Nav>
    </div>
  );
};

export default NavbarComponent;
