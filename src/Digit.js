import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./HomePage/home";
import Footer from "./Footer/Footer";
import Servises from "./Services/Services";
import Contact from "./Contact-us/Contact";
import Join from "./HomePage/Join/Join";
import { Pres } from "./ComponentsAlpha/Pres";
const Digit = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/Acceuil" element={<Home />}></Route>
        <Route exact path="/Services" element={<Servises />}></Route>
        <Route exact path="/Contact-us" element={<Contact />}></Route>
        <Route exact path="/About-us" element={<Pres />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Digit;
