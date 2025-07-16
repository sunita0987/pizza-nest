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

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Nest />
      <Card />
      <BestSeller/>
      <FoodDelivery/>
      <PerfectPizza/>
      <PizzaBanner/>
      <Footer/>
    </>
  );
}

export default App;
