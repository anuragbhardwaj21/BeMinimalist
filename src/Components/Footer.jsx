import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="abovefooter">
        <div>
          <h4>About</h4>
          <Link to="/">Our Values</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Term & Condition</Link>
          <Link to="/">Corporate Information</Link>
        </div>
        <div>
          <h4>Help</h4>
          <Link to="/">Knowledge</Link>
          <Link to="/">FAQs </Link>
          <Link to="/">Return & Refund Policy </Link>
          <Link to="/">Contact Us </Link>
          <Link to="/">Track Order </Link>
        </div>
        <div>
          <h4>Useful Links</h4>
          <Link to="/collections">All Products </Link>
          <Link to="/collections/skin">Skin Products</Link>
          <Link to="/collections/hair">Hair Products </Link>
          <Link to="/collections/bathnbody">Bath N Body Products</Link>
        </div>
      </div>
      <div className="belowfooter">
        <div>
          <Link to="/">
            <ion-icon name="logo-facebook"></ion-icon>
          </Link>
          <Link to="/">
            <ion-icon name="logo-instagram"></ion-icon>
          </Link>
        </div>
        <p>Copyright © 2023, Minimalist.</p>
      </div>
    </div>
  );
};
