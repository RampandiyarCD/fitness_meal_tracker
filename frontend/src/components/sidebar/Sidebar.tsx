import "./Sidebar.css";
import logo from "../../assets/logo.png";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  function signOut() {
    localStorage.clear();
  }
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-header">
          <img src={logo} alt="FitMeal Partner Logo" className="sidebar-logo" />
          <span className="sidebar-text">FitMeal Partner</span>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <NavLink to="/dashboard" className="sidebar-link">
                Home
              </NavLink>
            </li>
            <li className="sidebar-item">
              <a href="#about" className="sidebar-link">
                About Us
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#category" className="sidebar-link">
                Category
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#blogs" className="sidebar-link">
                Blogs
              </a>
            </li>
            <li className="sidebar-item">
              <NavLink to="/profile" className="sidebar-link">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="signout">
        <ExitToAppRoundedIcon className="signout-icon" />
        <Link to="/" onClick={signOut} className="signout-text">
          Signout
        </Link>
      </div>
    </aside>
  );
}
