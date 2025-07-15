import { useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Nest from "./components/Nest";
import Card from "./Pages/Card";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Nest />
      <Card />
    </>
  );
}

export default App;
