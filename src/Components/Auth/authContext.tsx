import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { baseurl } from "../../utils/apiCalls";

import { toast } from "react-toastify";


type Token = string | null;

type AuthContextDataType = {
  token: Token;
  loginState: string;
  loginHandler: (userName: string, password: string) => void;
  logoutHandler: () => void;
};
const AuthContextDefault: AuthContextDataType = {
  token: null,
  loginState: "string",
  loginHandler: (userName: string, password: string) => null,
  logoutHandler: () => null,
};

export const AuthContext =
  createContext<AuthContextDataType>(AuthContextDefault);

export const AuthProvider: React.FC = ({ children }) => {
  const savedToken = JSON.parse(localStorage.getItem("token")) || null;
  const [token, setToken] = useState<Token>(savedToken);
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState("");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
    setLoginState("");
     toast.success("You have been Logged out")

  };

  function setupAuthHeaderForServiceCalls(token: Token) {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  }

  setupAuthHeaderForServiceCalls(token);

  const loginHandler = async (userName: string, password: string) => {
    const toastId = toast.loading("Logging In")
    try {
      const response = await axios.post(
        `${baseurl}/user/login`,
        { userName, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoginState(response.data.status);
      if (response.data.status === "login success") {
        toast.update(toastId, { render: "You are now logged in", type: "success", isLoading: false, autoClose: 2000,  });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        // localStorage.setItem("login", JSON.stringify({loginStatus: true, token: response.data.token}));
        setToken(response.data.token);
        setLoginState("login success");
        return navigate("/");
      }
    } catch (error) {
      toast.update(toastId, { render: "Login failed, Try again", type: "error", isLoading: false, autoClose: 2000,  });

      console.log(error.response);
      console.log(error.response.data.status);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, loginState, loginHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
