import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../Side Bar/sideBar";
import { useAuth } from "../Auth/authContext";
import './navBar.css'
import '../Side Bar/sideBar.css'


export const NavBar = () => {
  const { token,  logoutHandler } = useAuth();
  const [sideBarShow, setSideBarShow] = useState(false);
  const showSideBar = () => setSideBarShow(!sideBarShow);

  return (
    <>
      <nav className="top-nav" id="myTopNav">
        <ul>
          <li className="nav-itm nav-itm-text" onClick={showSideBar}>
            BArs
          </li>
          <li className="nav-itm nav-itm-text">
            <Link to="/">Quiz Master</Link>
          </li>

          {!token ? (
            <li className="nav-itm nav-itm-text right resp-txt">
              <Link to="/login">Login</Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-txt">
              <Link to="/signup">Sign up</Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/login">LOginss</Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/signup">Signupss</Link>
            </li>
          ) : null}
          {token ? (
            <li className="nav-itm nav-itm-text right" onClick={() => logoutHandler()}>
              Logout
            </li>
          ) : null}
        </ul>
      </nav>
      <SideBar status={sideBarShow} showSideBar={showSideBar} />
    </>
  );
};

