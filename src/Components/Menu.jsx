import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  const [isOpen, setOpen] = useState(true);
  const menuClass = isOpen ? "open" : "closed";
  const menuItems = isOpen ? (
    <>
      <Link to="/">Home</Link>
      <Link to="/">Knowledge</Link>
      <Link onClick={() => setOpen(!isOpen)} className="menuspecialbutton">
        {isOpen ? (
          <>
            Shop <ion-icon name="arrow-forward-outline"></ion-icon>
          </>
        ) : (
          ""
        )}
      </Link>
      <Link to="/">Track Order</Link>
      <Link to="/">Build Your Routine</Link>
      <Link to="/login">Account</Link>
    </>
  ) : (
    <>
      <Link onClick={() => setOpen(!isOpen)} className="menuspecialbutton">
        {isOpen ? (
          ""
        ) : (
          <>
            Shop <ion-icon name="arrow-back-outline"></ion-icon>
          </>
        )}
      </Link>
      <Link to="/collections/skin">Skin</Link>
      <Link to="/collections/hair">Hair</Link>
      <Link to="/collections/bathnbody">Bath & Body</Link>
      <Link to="/collections">All Products</Link>
    </>
  );

  return <div className={`hamburgermenu ${menuClass}`}>{menuItems}</div>;
};
