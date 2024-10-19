import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getSkinProduct } from "../Redux/Action/product/skinProductAction";
import { Constants } from "../Utils/Constants";
import { RowCount } from "../Components/RowCount";
import { Pagination } from "../Components/Pagination";
import { Loader } from "../Components/Loader";

export const Skin = () => {
  document.title = "Skin - Minimalist";

  const dispatch = useDispatch();

  const [skinProducts, setSkinProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowCount, setRowCount] = useState(Constants.PER_PAGE);

  useEffect(() => {
    dispatch(
      getSkinProduct({
        page: currentPage,
        perPage: rowCount,
        callback: (data) => {
          setLoading(false);
          setSkinProducts(data?.products);
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
        <h1>Skin</h1>
        <p>
          Shop our efficacious, transparent, and research-backed range of
          skincare products. Each product is formulated to target your specific
          skin concerns.
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="productContainer">
          {skinProducts.map((product) => (
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
