import React from "react";
import "./Faq.css";

const AnswerBox = ({ currentAnswer }) => {
  return (
    <>
      <div className="faq__child2">
        <div className="faq__answer__title">ANSWER</div>
        <div className="faq__answer__content">{currentAnswer}</div>
      </div>
    </>
  );
};

export default AnswerBox;
