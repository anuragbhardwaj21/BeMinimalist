import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar, { genConfig } from "react-nice-avatar";
import "./RightNav.css";
import { CartData } from "./CartData";
import { logout } from "../Redux/Action/auth/logoutAction";

export const RightNav = () => {
  const [isOpen, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const [isInputVisible, setInputVisible] = useState(false);
  let isAuthenticated = useSelector((state) =>
    state?.Login?.userData?.username ? true : false
  );
  const cartData = useSelector((state) => state?.GetCart?.cartData);
  const config = useSelector((state) => state?.GetAvatar?.avatarDetails);

  useEffect(() => {
    setCount(cartData.length);
  }, [cartData.length]);

  const [searchValue, setSearchValue] = useState("");

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`Search term: ${searchValue}`);
      setSearchValue("");
    }
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    if (isAuthenticated) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  const navigateToCheckout = () => {
    if (isAuthenticated) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  const calculateAmount = (products) => {
    // return products.reduce((total, product) => {
    //   return total + product.price * product.quantity;
    // }, 0);
    return 0;
  };
  const handleLogout = () => {
    dispatch(
      logout({
        callback: () => {
          navigate("/login");
        },
      })
    );
  };

  return (
    <div className="rightnav">
      {isInputVisible ? (
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchInputChange}
          onKeyDown={handleSearchKeyDown}
        />
      ) : null}
      <button id="search-button" onClick={toggleInput}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
      {isAuthenticated ? (
        <button id="login-button" onClick={navigateToLogin}>
          <Avatar style={{ width: "2rem", height: "2rem" }} {...config} />
        </button>
      ) : (
        <button id="login-button" onClick={navigateToLogin}>
          <ion-icon name="log-in-outline"></ion-icon>
        </button>
      )}
      {isAuthenticated && (
        <button id="cart-button" onClick={() => setOpen(!isOpen)}>
          {isOpen ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="bag-handle-outline"></ion-icon>
          )}
          {!isOpen && count > 0 && isAuthenticated && (
            <span className="cart-badge">{count}</span>
          )}
        </button>
      )}
      {isAuthenticated && (
        <button className="logoutbutton" onClick={handleLogout}>
          <ion-icon name="log-out-outline"></ion-icon>
        </button>
      )}

      <div className={`rightpanel ${isOpen ? "open" : "close"}`}>
        <CartData />
        <div id="cartDetailsSummary">
          <p>Amount: ₹{calculateAmount(cartData)} </p>
          <button id="checkout" onClick={navigateToCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
