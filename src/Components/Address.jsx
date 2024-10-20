import React, { useEffect, useState } from "react";
import "./Address.css";
import { useDispatch } from "react-redux";
import { postAddress } from "../Redux/Action/address/postAddressAction";
import { getAddress } from "../Redux/Action/address/getAddressAction";

export const Address = () => {
  const dispatch = useDispatch();
  const [savedAddress, setSavedAddress] = useState([]);
  const [address, setAddress] = useState({
    title: "",
    addline1: "",
    addline2: "",
    city: "",
    pinCode: "",
    state: "",
    phoneNumber: "",
  });

  useEffect(() => {
    dispatch(
      getAddress({
        address,
        callback: (data) => {
          setSavedAddress(data?.data);
          console.log(data?.data);
        },
      })
    );
  }, []);

  console.log(savedAddress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postAddress({
        address,
        callback: (data) => {},
      })
    );
  };

  return (
    <>
      <div className="savedAddress"></div>
      <div className="address-form">
        <h2>Address Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Home / Office"
              value={address.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="addline1"
              name="addline1"
              placeholder="Address Line 1"
              value={address.addline1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="addline2"
              placeholder="Address Line 2"
              name="addline2"
              value={address.addline2}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="city"
              placeholder="City"
              name="city"
              value={address.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Pin Code"
              id="pinCode"
              name="pinCode"
              value={address.pinCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="state"
              placeholder="State"
              name="state"
              value={address.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              value={address.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Save Address</button>
        </form>
      </div>
    </>
  );
};
