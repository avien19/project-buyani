import React from "react";
import chatcloud from "../../assets/profiles/chat-cloud.png";
import logo from "../../assets/logo.png";

const QuestionCard = ({ questionData }) => {
  return (
    <div className="question-card">
      <div className="main-container">
        <div className="header">
          <img src={chatcloud} alt="" />
        </div>
        <div className="question-container">
          <div className="question">{questionData.question}</div>
          <div className="choices-container">
            {questionData.choices.map((choice, index) => (
              <div className="choices" key={index}>
                {choice}
              </div>
            ))}
          </div>
          <div className="footer">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
