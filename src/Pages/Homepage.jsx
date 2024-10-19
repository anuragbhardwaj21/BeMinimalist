import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { MainHomePage } from "../Components/MainHomePage";

export const Homepage = () => {
  document.title = "Minimalist - Honest, Authentic & Affordable Beauty Products";
  return (
    <div>
      <Navbar />
      <MainHomePage />
      <Footer />
    </div>
  );
};
