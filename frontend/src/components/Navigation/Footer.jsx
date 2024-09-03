import React from "react";
import "../../styles/sass/Footer.scss";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="socials">
          <CiFacebook />
          <CiInstagram />
          <CiTwitter />
          <CiLinkedin />
        </div>
        <div className="pages">
          <p>ABOUT</p>
          <p>NEED HELP?</p>
          <p>CONTENT TYPE</p>
          <p>PRIVACY</p>
          <p>TERMS OF AGREEMENT</p>
        </div>
        <div className="copyright">Copyright @2024 BuyAni.com</div>
      </footer>
    </>
  );
};

export default Footer;
