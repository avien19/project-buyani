import React from "react";
import logoImage from "../assets/profiles/logo.png";
import "../styles/sass/Navbar.scss";

export default function TopNav({ children }) {
  return (
    <nav>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-logo">
            <img src={logoImage} alt="Logo" />
          </li>
          <li className="menu-item">{}</li>
          <li className="menu-item">How It Works</li>
          <li className="menu-item">
            <select name="language" id="language">
              <option value="en">English</option>
              <option value="tl">Tagalog</option>
              <option value="bs">Bisaya</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <Link to="/signup">
          <button className="signup">Signup</button>
        </Link>
        <Link to="/signin">
          <button className="login">Login</button>
        </Link>
      </div>
    </nav>
  );
}
