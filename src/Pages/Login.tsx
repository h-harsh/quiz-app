// import { LoginBox } from "../Components/Login Box/loginBox";
import { useAuth } from "../Components/Auth/authContext";
import { LoginBox } from "../New Components";

export const Login = () => {
  const { token } = useAuth();
  return token ? (
    <h1>You are Logged in</h1>
  ) : (
    <div className="outer-cont">
      <LoginBox />
    </div>
  );
};
