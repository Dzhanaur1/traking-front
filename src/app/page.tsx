import TransitPriceBuilder from "@/components/PriceBuilder";
import About from "@/components/UI/About";
import Contact from "@/components/UI/Contact";
import Features from "@/components/UI/Features";
import Intro from "@/components/UI/Intro";
import Services from "@/components/UI/Services";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Intro />
      <Services />
      <Features />
      <Contact />
      <About />
    </React.Fragment>
  );
}
