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
          <i className="fas fa-bars"></i>
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
              <Link to="/login"><i className="fas fa-sign-in-alt"></i></Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/signup"><i className="fas fa-user-plus"></i></Link>
            </li>
          ) : null}
          {token ? (
            <li className="nav-itm nav-itm-text right resp-txt" onClick={() => logoutHandler()}>
              Logout
            </li>
          ) : null}
          {token ? (
            <li className="nav-itm nav-itm-text right resp-icon" onClick={() => logoutHandler()}>
              <i className="fas fa-power-off"></i>
            </li>
          ) : null}
        </ul>
      </nav>
      <SideBar status={sideBarShow} showSideBar={showSideBar} />
    </>
  );
};

