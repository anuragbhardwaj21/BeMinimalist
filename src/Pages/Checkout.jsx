import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useSelector } from "react-redux";
import { CartPageCards } from "../Components/CartPageCards";
import { Address } from "../Components/Address";
import { Payment } from "../Components/Payment";

export const Checkout = () => {
  document.title = "Checkout";
  const cartData = useSelector((state) => state?.GetCart?.cartData);
  return (
    <>
      <Navbar />
      <div className="checkoutPage">
        <div className="leftCheckout">
          <CartPageCards />
        </div>
        <div className="rightCheckout">
          <Address />
          <Payment />
        </div>
      </div>
      <Footer />
    </>
  );
};
