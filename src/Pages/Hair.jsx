import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getHairProduct } from "../Redux/Action/product/hairProductAction";
import { Constants } from "../Utils/Constants";
import { RowCount } from "../Components/RowCount";
import { Pagination } from "../Components/Pagination";
import { Loader } from "../Components/Loader";

export const Hair = () => {
  document.title = "Hair - Minimalist";

  const dispatch = useDispatch();

  const [hairProducts, setHairProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowCount, setRowCount] = useState(Constants.PER_PAGE);

  useEffect(() => {
    dispatch(
      getHairProduct({
        page: currentPage,
        perPage: rowCount,
        callback: (data) => {
          setLoading(false);
          setHairProducts(data?.products);
          setCurrentPage(data?.currentPage);
          setTotalPages(data?.totalPages);
        },
      })
    );
  }, [dispatch, currentPage, rowCount]);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Navbar />
      <div className="productpageheader">
        <h1>Hair</h1>
        <p>
          Shop our haircare products, developed with best-in-class & highly
          efficacious ingredients to address your hair concerns.
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="productContainer">
          {hairProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <div className="paginationAndrow">
        <RowCount rowCount={rowCount} setRowCount={setRowCount} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};
