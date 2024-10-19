import React, { useState } from "react";
import "./Hamburger.css";
import { Menu } from "./Menu";

export const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="leftnav">
      <button id="hamburger-button" onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
        
      </button>
      <div className={`leftpanel ${isOpen ? "open" : "close"}`}>
        <Menu />
      </div>
    </div>
  );
};
