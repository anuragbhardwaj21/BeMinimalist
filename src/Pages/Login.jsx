import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Action/auth/loginAction";
import { getCart } from "../Redux/Action/cart/cartAction";
import { getAvatar } from "../Redux/Action/avatar/avatarAction";

export const Login = () => {
  document.title = "Login";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  let isAuthenticated = useSelector((state) =>
    state?.Login?.userData?.username ? true : false
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    const payload = {
      email,
      password,
    };
    dispatch(
      login({
        payload,
        callback: (data) => {
          if (data?.meta?.code === 200) {
            dispatch(getCart())
            dispatch(getAvatar({
              callback:(data)=>{
                console.log("data",data);
                
              }
            }))
            navigate("/");
          }
        },
      })
    );
  };

  return (
    <div>
      <Navbar />
      <div className="loginform">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <p></p>
          <input
            type="Email"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
              setDisabled(false);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
              setDisabled(false);
            }}
          />
          <input type="submit" value="Sign In" disabled={disabled} />
          <p>
            <Link to="/">Forgot your password?</Link> /
            <Link to="/signup"> Create account</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};
