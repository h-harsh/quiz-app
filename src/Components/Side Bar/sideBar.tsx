import "./sideBar.css";
import { Link } from "react-router-dom";


export const SideBar = ({ status, showSideBar }) => {
  return (
    <nav className={status ? "nav-menu active" : "nav-menu"}>
      <ul>
        <li onClick={showSideBar}>
        <i className="fas fa-times-circle"></i>
        </li>
        <li onClick={showSideBar}>
          <Link to="/"> <i className="fas fa-home"></i> Home</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/playedQuizes"><i className="fas fa-medal"></i>  Played Quizes</Link>
        </li>
        {/* <li onClick={showSideBar}>
          <Link to="/leaderboard"><i className="fas fa-trophy"></i> LeaderBoard</Link>
        </li> */}
      </ul>
    </nav>
  );
};
