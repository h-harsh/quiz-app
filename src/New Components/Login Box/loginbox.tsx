import { useState } from "react";
import "./loginBox.css";
import loginImage from "./login2.svg";
import { Link } from "react-router-dom";

import logo from '../../logo.png'
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";
import { useAuth } from "../../Components/Auth/authContext";


const LoginBox = () => {
  const [userName, setUserName] = useState("h-harsh");
  const [password, setPassword] = useState("harsh");
  const {loginHandler} = useAuth()
  

  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="res err" />
      </div>

      <div className="login-data-container">
        {/* <h1 className="book-store">Fine-Socials</h1> */}
        <div className=" lgpagelogo-cont" >
        <img className="nblogo-img" src={logo} alt="" />
      </div>

        <h3 className="book-store-tagline" >We quiz therefore we are.</h3>
        <div className="login-data-sub-box">
          <div className="each-data-cont">
            <p>Username or Email</p>
            <input
              className="login-input"
              placeholder="Username"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            ></input>
          </div>
          <div className="each-data-cont">
            <p>Your password</p>
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="for-login-btn-cont">
            <PrimaryButton text="Login" clickHandler={() => loginHandler(userName, password)} />
          </div>
        </div>
        <p>or</p>
        <Link to="/signup" className="for-signup-btn-cont">
          <SecondaryButton text="Create new Account" clickHandler={() => null}/>
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
