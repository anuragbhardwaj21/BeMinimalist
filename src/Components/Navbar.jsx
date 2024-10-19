import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Hamburger } from "./Hamburger";
import { RightNav } from "./RightNav";

export const Navbar = () => {
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <Hamburger />
      <h2 onClick={navigateToHomepage}>Minimalist</h2>
      <RightNav />
    </div>
  );
};
