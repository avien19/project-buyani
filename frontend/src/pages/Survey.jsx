import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../components/Forms/QuestionCard";
import questions from "../data/SurveyQuestions";
import QuestionCard from "../components/Forms/QuestionCard";

const Survey = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionId = parseInt(id, 10);
  const questionData = questions.find((q) => q.question_id === questionId);

  const handleNext = () => {
    if (questionId < questions.length) {
      navigate(`/question/${questionId + 1}`);
    } else {
      navigate("/welcomeMessage");
    }
  };

  return (
    <div className="questionpage">
      {questionData ? (
        <div className="card-wrapper">
          <QuestionCard questionData={questionData} />
          <div className="button-container">
            <button className="primary-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>Question not found!</p>
      )}
    </div>
  );
};

export default Survey;
