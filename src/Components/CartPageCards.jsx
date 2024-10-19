import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPageCards.css";
import { addToCart } from "../Redux/Action/cart/cartAction";

export const CartPageCards = () => {
  const cartDataStore = useSelector((state) => state?.GetCart?.cartData);
  const [cartData, setCartData] = useState(cartDataStore);
  const dispatch = useDispatch();
  const debounceTimeout = useRef(null);

  useEffect(() => {
    setCartData(cartDataStore);
  }, [cartDataStore]);

  const debouncedAddToCart = useCallback((id, quantity) => {
    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      cartUpdate(id, quantity);
    }, 1000);
  }, []);

  const increaseQuantity = (id) => {
    const updatedCart = cartData.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartData(updatedCart);

    const newQuantity = updatedCart.find((item) => item._id === id)?.quantity;
    debouncedAddToCart(id, newQuantity);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartData.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartData(updatedCart);

    const newQuantity = updatedCart.find((item) => item._id === id)?.quantity;
    if (newQuantity > 0) {
      debouncedAddToCart(id, newQuantity);
    }
  };

  const cartUpdate = (id, quantity) => {
    const payload = {
      productId: id,
      quantity: quantity,
    };
    dispatch(addToCart(payload));
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="checkoutCardContainer">
      {cartData.length > 0 ? (
        cartData.map((item) => (
          <div className="checkoutCard" key={item._id}>
            <div className="delete">
              <button
                className="itemDelete"
                onClick={() => handleDelete(item._id)}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
            <div className="cart-item">
              <img
                src={item.images[0]}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="checkout-cart-item-details">
                <h5 className="cart-item-title">{item.title}</h5>
                <p className="cart-item-uses">{item.uses}</p>
                <p className="cart-item-price">₹{item.price}</p>
                <div className="cart-quantity-control">
                  <button onClick={() => decreaseQuantity(item._id)}>
                    <ion-icon name="remove-outline"></ion-icon>
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item._id)}>
                    <ion-icon name="add-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};
