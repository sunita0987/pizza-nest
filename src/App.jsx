import { useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Nest from "./components/Nest";
import Card from "./Pages/Card";
import BestSeller from "./components/BestSellers";
import FoodDelivery from "./components/FoodDelivery";
import PerfectPizza from "./components/PerfectPizza";
import PizzaBanner from "./components/PizzaBanner";
import Footer from "./components/Footer";
import Sellers from "./components/Sellers";
import Menu from "./components/Menu";
// import TestimonialsSlider from "./components/TestimonialsSlider";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Nest />
      <Card />
      <Sellers/>
      <Menu/>
      <BestSeller/>
      <FoodDelivery/>
      <PerfectPizza/>
      {/* <TestimonialsSlider/> */}
      <PizzaBanner/>
      <Footer/>
    </>
  );
}

export default App;
