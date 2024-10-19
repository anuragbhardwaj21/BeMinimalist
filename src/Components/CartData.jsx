import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartData.css";

export const CartData = () => {
  const cartDataStore = useSelector((state) => state?.GetCart?.cartData);
  const [cartData, setCartData] = useState(cartDataStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartData(cartDataStore);
  }, [cartDataStore]);

  const handleQuantityChange = (id, newQuantity) => {
    console.log(`Updated quantity for item ${id}: ${newQuantity}`);
  };

  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div className="cart-data-container">
      {cartData.length > 0 ? (
        cartData.map((item) => (
          <div className="card" key={item._id}>
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
              <div className="cart-item-details">
                <h5 className="cart-item-title">{item.title}</h5>
                <p className="cart-item-uses">{item.uses}</p>
                <p className="cart-item-price">₹{item.price}</p>
                <p className="cart-item-quantity">
                  Quantity:{" "}
                  <input
                    type="text"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, e.target.value)
                    }
                  />
                </p>
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
