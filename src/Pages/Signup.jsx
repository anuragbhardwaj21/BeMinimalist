import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import { signup } from "../Redux/Action/auth/signupAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notifyError } from "../Utils/helper";

export const Signup = () => {
  document.title = "Sign Up";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload ={
      name, email, password
    }

    dispatch(signup({
      payload,
      callback:(data)=>{
        if(data.token){
          navigate("/login");
        }else{
          notifyError("Error in Signup.");
        }
      }
    }));
  };
  return (
    <div>
      <Navbar />
      <div className="signupform">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="Email"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input type="submit" value="Create Account" />
          <p>
            <Link to="/login">Already having account?</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};
