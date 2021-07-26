import "./sideBar.css";
import { Link } from "react-router-dom";


export const SideBar = ({ status, showSideBar }) => {
  return (
    <nav className={status ? "nav-menu active" : "nav-menu"}>
      <ul>
        <li onClick={showSideBar}>
            X
        </li>
        <li onClick={showSideBar}>
          <Link to="/">  Home</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/playedQuizes">  Played Quizes</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/leaderboard"> LeaderBoard</Link>
        </li>
      </ul>
    </nav>
  );
};
