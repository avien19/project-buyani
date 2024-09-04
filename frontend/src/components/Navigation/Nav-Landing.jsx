import React from "react";
import logoImage from "../../assets/logo.png";
import "../../styles/sass/Navbar.scss";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  return (
    <nav>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-logo">
            <img src={logoImage} alt="Logo" />
          </li>
          <li className="menu-item">What We Do</li>
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
};

export default NavbarLanding;
