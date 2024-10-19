import React, { useState } from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, postCartProduct } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { notifyErrorWithButton } from "../Utils/helper";
import { addToCart } from "../Redux/Action/cart/cartAction";

export const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let isAuthenticated = useSelector((state) =>
    state?.Login?.userData?.username ? true : false
  );

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleToastClick = () => {
    navigate("/login");
  };

  const addToCartt = () => {
    if (isAuthenticated) {
      const payload = {
        productId: product._id,
        quantity: quantity,
      };

      dispatch(addToCart(payload));
      setQuantity(1);
    } else {
      notifyErrorWithButton("Please Login First", "Login", handleToastClick);
    }
  };

  const redirectToDetailPage = (productId) => {
    dispatch(getSingleProduct(productId));
    navigate(`/allproducts/${productId}`);
  };

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
        onClick={() => redirectToDetailPage(product.id)}
      />
      <h5>{product.title}</h5>
      <p className="product-uses">{product.uses}</p>
      <p className="product-price">
        <span>₹ {product.deductedPrice}</span> ₹ {product.price}
      </p>
      <div className="add-to-cart">
        <div className="quantity-control">
          <button onClick={decreaseQuantity}>
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
        <button className="cart-button" onClick={addToCartt}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
