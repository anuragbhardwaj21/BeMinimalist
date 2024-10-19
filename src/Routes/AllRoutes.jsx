import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { Skin } from "../Pages/Skin";
import { AllProducts } from "../Pages/AllProducts";
import { Hair } from "../Pages/Hair";
import { BathNBody } from "../Pages/BathNBody";
import { AccountPage } from "../Pages/AccountPage";
import { ProductDetailPage } from "../Pages/ProductDetailPage";
import { AvatarEdit } from "../Pages/AvatarEdit";
import { Checkout } from "../Pages/Checkout";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/collections" element={<AllProducts />} />
        <Route exact path="/collections/skin" element={<Skin />} />
        <Route exact path="/collections/hair" element={<Hair />} />
        <Route exact path="/collections/bathnbody" element={<BathNBody />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route
          exact
          path="/allproducts/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
