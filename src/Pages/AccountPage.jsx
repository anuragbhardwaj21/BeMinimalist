import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Action/auth/logoutAction";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Address } from "../Components/Address";
import { AvatarEdit } from "./AvatarEdit";

export const AccountPage = () => {
  const [activeSection, setActiveSection] = useState("orders");

  const { name } = useSelector((store) => store?.Login?.userData);
  document.title = `${name}`;

  return (
    <>
      <Navbar />
      <div className="accountPage">
        <div className="top-section-accountpage">
          <p>Welcome back, {name}!</p>
        </div>
        <div className="account-container">
          <div className="left-menu-accountpage">
            <div
              className={`menu-item ${
                activeSection === "myprofile" ? "active" : ""
              }`}
              onClick={() => setActiveSection("myprofile")}
            >
              Profile
            </div>
            <div
              className={`menu-item ${
                activeSection === "orders" ? "active" : ""
              }`}
              onClick={() => setActiveSection("orders")}
            >
              Orders
            </div>
            <div
              className={`menu-item ${
                activeSection === "address" ? "active" : ""
              }`}
              onClick={() => setActiveSection("address")}
            >
              Address
            </div>
            <div
              className={`menu-item ${
                activeSection === "payment" ? "active" : ""
              }`}
              onClick={() => setActiveSection("payment")}
            >
              Payment Methods
            </div>
            <div
              className={`menu-item ${
                activeSection === "track" ? "active" : ""
              }`}
              onClick={() => setActiveSection("track")}
            >
              Track Order
            </div>
            <div
              className={`menu-item ${
                activeSection === "avatar" ? "active" : ""
              }`}
              onClick={() => setActiveSection("avatar")}
            >
              Edit Your Avatar
            </div>
          </div>
          <div className="right-content-accountpage">
            {activeSection === "myprofile" && <div>My Profile {name} </div>}
            {activeSection === "orders" && <div>Orders Content</div>}
            {activeSection === "payment" && <div>Payment Methods Content</div>}
            {activeSection === "track" && <div>Track Order Content</div>}
            {activeSection === "address" && <Address />}
            {activeSection === "avatar" && <AvatarEdit />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
