import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const ProductDetailPage = () => {
  // const [currentProduct, setCurrentProduct] = useState({});


  return (
    <div>
      <Navbar />
      <div className="product-detail-page"></div>
      <Footer />
    </div>
  );
};
