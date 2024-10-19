import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { getBathNBodyProduct } from "../Redux/Action/product/bathNBodyProductAction";
import { Constants } from "../Utils/Constants";
import { RowCount } from "../Components/RowCount";
import { Pagination } from "../Components/Pagination";
import { Loader } from "../Components/Loader";

export const BathNBody = () => {
  document.title = "Bath & Body - Minimalist";

  const dispatch = useDispatch();

  const [bathnBodyProducts, setBathnBodyProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowCount, setRowCount] = useState(Constants.PER_PAGE);

  useEffect(() => {
    dispatch(
      getBathNBodyProduct({
        page: currentPage,
        perPage: rowCount,
        callback: (data) => {
          setLoading(false);
          setBathnBodyProducts(data?.products);
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
      {" "}
      <Navbar />
      <div className="productpageheader">
        <h1>Bath & Body</h1>
        <p>
          Treat your body from head to toe with our range of science-backed &
          efficacious range of body care products. Protect every last inch of
          your skin.
        </p>
      </div>
      {loading ? <Loader /> : 
      <div className="productContainer">
        {bathnBodyProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>}
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
