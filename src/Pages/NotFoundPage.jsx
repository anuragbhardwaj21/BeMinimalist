import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pagenotfound">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Back to Homepage</Link>
      </div>
      <Footer />
    </div>
  );
};
