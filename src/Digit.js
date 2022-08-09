import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./HomePage/home";
import Footer from "./Footer/Footer";

const Digit = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/Acceuil" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Digit;
