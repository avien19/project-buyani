import React from "react";
import logoImage from "../assets/profiles/logo.png";
import "../styles/sass/Navbar.scss";

export default function TopNav({ children }) {
  return (
    <>
      <div className="nav">
        <div className="item-container">
          <ul>
            <li>
              <a href="">
                <img src={logoImage} alt="topnav" />
              </a>
            </li>
            <li>What We Do</li>
            <li>How It Works</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </>
  );
}
