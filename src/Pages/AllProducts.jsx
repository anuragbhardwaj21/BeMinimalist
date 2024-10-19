import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getAllProduct } from "../Redux/Action/product/allProductAction";
import { Pagination } from "../Components/Pagination";
import { RowCount } from "../Components/RowCount";
import { Constants } from "../Utils/Constants";
import { Loader } from "../Components/Loader";

export const AllProducts = () => {
  document.title = "All Products - Minimalist";

  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowCount, setRowCount] = useState(Constants.PER_PAGE);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllProduct({
        page: currentPage,
        perPage: rowCount,
        callback: (data) => {
          setLoading(false);
          setAllProducts(data?.products);
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
        <h1>All Products</h1>
        <p>
          Shop our efficacious, transparent, and research-backed range of
          skincare & haircare products. Each product is formulated to target
          your specific skin or hair concerns.
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="productContainer">
          {allProducts.map((product) => (
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
