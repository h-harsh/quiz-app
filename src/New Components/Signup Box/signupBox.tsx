/*eslint-disable */
import { useState, useEffect } from "react";
import "./signupBox.css";
import loginImage from "./signup2.svg";
import logo from "../../logo.png";
import { useAuth } from "../../Components/Auth/authContext";
import { baseurl } from "../../utils/apiCalls";
import axios from "axios";
import { PrimaryButton } from "../index";
import { toast } from "react-toastify";

type SignupApi = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  loginHandler: (arg0: string, arg1: string) => void;
};

const SignUpBox = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { loginHandler } = useAuth();

  const signUpHandler = async ({
    fullName,
    userName,
    email,
    password,
    loginHandler,
  }: SignupApi) => {
    const toastId = toast.loading("Signing Up")
    try {
      const response = await axios.post(
        `${baseurl}/user/signup`,
        {
          fullName: fullName,
          userName: userName,
          email: email,
          password: password,
        },
        {
          headers: {
            ContentType: "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.update(toastId, { render: "Sign up Success", type: "success", isLoading: false, autoClose: 2000,  });

        console.log(userName, password);
        loginHandler(userName, password);
      }
    } catch (error) {
      toast.update(toastId, { render: "Faced technical error", type: "error", isLoading: false, autoClose: 2000,  });
      console.log(error.response);
    }
  };

  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="err" />
      </div>

      <div className="login-data-container">
        {/* <h1 className="book-store">Fine-Socials</h1> */}
        <div className=" lgpagelogo-cont">
          <img className="nblogo-img" src={logo} alt="" />
        </div>
        <h3 className="book-store-tagline">We quiz therefore we are.</h3>
        <div className="login-data-sub-box">
          <div className="each-data-cont">
            <p>Full name</p>
            <input
              className="login-input"
              placeholder="Full Name (min 6 char)"
              type="text"
              onChange={(event) => setFullName(event.target.value)}
            ></input>
          </div>
          <div className="each-data-cont">
            <p>Username</p>
            <input
              className="login-input"
              placeholder="UserName (min 3 char)"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Email address</p>
            <input
              className="login-input"
              placeholder="Email"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Password</p>
            <input
              className="login-input"
              placeholder="(8 char,1 number, uppercase and lowercase)"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="for-login-btn-cont">
          <PrimaryButton
            text="Sign Up"
            clickHandler={() =>
              signUpHandler({
                fullName,
                userName,
                email,
                password,
                loginHandler,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpBox;
