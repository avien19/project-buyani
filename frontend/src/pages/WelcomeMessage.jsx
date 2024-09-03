import React from "react";
import boyAni from "../assets/profiles/boyani-with-cloud.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const ConfirmationMessage = () => {
  return (
    <div className="survey-body">
      <div className="message-container">
        <img src={boyAni} alt="boyAni" />
        <div className="message">
          <div className="message-body">
            <div className="heading">Thanks, Paul!</div>
            <div className="body">
              <p>Your response are of great help to us.</p>
              <p>Your journey to connecting with reliable buyers starts now.</p>
            </div>
          </div>
          <Link to="/home" className="primarybtn-link">
            <button className="primary-btn">Proceed</button>
          </Link>
          <div className="footer">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
