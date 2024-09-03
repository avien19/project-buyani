import React from "react";
import "../styles/sass/Survey.scss";
import boyAni from "../assets/profiles/boyani-with-cloud.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const PreSurvey = () => {
  return (
    <div className="survey-body">
      <div className="message-container">
        <img src={boyAni} alt="boyAni" />
        <div className="message">
          <div className="message-body">
            <div className="heading">
              <p>Hi, Paul!</p>
              <p>
                Welcome to Buy<span className="green">Ani</span>!
              </p>
            </div>
            <div className="body">
              <p>I see that you are new to our website.</p>
              <p>
                Help us understand your needs! Answer these questions for a
                personalized farm-fresh experience.
              </p>
            </div>
          </div>
          <Link to="/question/1" className="primarybtn-link">
            <button className="primary-btn">Proceed</button>
          </Link>

          <div className="footer">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSurvey;
