import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    setError("");
    setPassword("");
    setUsername("");
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        // setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("username",userName)
        navigate("/")
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  };

  return (
    <>  
        <div className="navigation">
          <nav className="navbar-login">
            <h1>Shopping App</h1>
          </nav>
      </div>
      <div className="login-page">
        <div className="login">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
            </h4>
          </div>
          <div className="login-inputs">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-user" style={{ fontSize: "29px" }}></i>
              </span>
            </div>
            <input
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              autoComplete="on"
            />
          </div>
          <div className="login-inputs">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock" style={{ fontSize: "30px" }}></i>
              </span>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="login-inputs">{error && <small>{error}</small>}</div>
          <div className="login-inputs">
            <button onClick={loginHandler}>Login <i className='fas fa-sign-in-alt'></i></button>
          </div>

          <div className="social">
            <i className="fab fa-app-store-ios"></i>
            <i className="fab fa-google-play"></i>
            <i className="fab fa-windows"></i>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default Login;

// loading?(<h1>Loading...</h1>):(
