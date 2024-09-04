import React from "react";
import "../../styles/sass/Navbar.scss";
import logoImage from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiAlignBottom } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import profile from "../../assets/profiles/profile.jpg";
import { Link } from "react-router-dom";

const NavbarProfile = () => {
  return (
    <>
      <nav>
        <div className="menu">
          <ul className="menu-list">
            <Link to="/home">
              <li className="menu-logo">
                <img src={logoImage} alt="Logo" />
              </li>
            </Link>
          </ul>
        </div>
        <div className="button-container">
          <div className="bayong-button">
            <CiShoppingBasket className="bayong-icon" />
          </div>
          <div className="profile-container">
            <img src={profile} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarProfile;
