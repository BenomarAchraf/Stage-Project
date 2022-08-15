import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./HomePage/home";
import Footer from "./Footer/Footer";
import Servises from "./Services/Services";
import Contact from "./Contact-us/Contact";
import { Project } from "./Project/Projet";
import Join from "./HomePage/Join/Join";
import { About } from "./About-us/About";
import { Pres } from "./ComponentsAlpha/Pres";
import Tarifs from "./Tarifs/Tarifs";
const Digit = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Services" element={<Servises />}></Route>
        <Route exact path="/Contact-us" element={<Contact />}></Route>
        <Route exact path="/About-us" element={<About />}></Route>
        <Route exact path="/Tarifs" element={<Tarifs />}></Route>
        <Route exact path="/Project" element={<Project />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Digit;
