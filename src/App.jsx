import "./App.css";
import React from "react";
import Hero from "./components/Hero/Hero";
import OurServicecards from "./components/OurServicecards/OurServicecards";
import OurServicetext from "./components/OurServicetext/OurServicetext";
import OurPricing from "./components/OurPricing/OurPricing";



const App = () => {
  return (
    <>
      <Hero />
      <OurServicecards />
      <OurServicetext />
      <OurPricing/>
    </>
  );
};

export default App;
