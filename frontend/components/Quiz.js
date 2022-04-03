import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  selectAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
} from "../state/action-creators";

function Quiz(props) {
  useEffect(() => {
    if (!props.quiz) {
      props.fetchQuiz();
    }
  }, []);

  const handleSelect = (e) => {
    props.selectAnswer(e.target.id);
    props.setMessage("");
    const oldElement = document.getElementsByClassName("selected");
    oldElement[0].classList.remove("selected");
    const element = document.getElementById(e.target.id);
    element.classList.add("selected");
  };

  const isDisabled = () => {
    if (props.selectedAnswer) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    props.postAnswer(props.selectedAnswer, props.quiz.quiz_id);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div
                className="answer selected"
                id={props.quiz.answers[0].answer_id}
                onClick={handleSelect}
              >
                {props.quiz.answers[0].text}
                <button
                  id={props.quiz.answers[0].answer_id}
                  onClick={handleSelect}
                >
                  {props.selectedAnswer === props.quiz.answers[0].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>

              <div
                className="answer"
                id={props.quiz.answers[1].answer_id}
                onClick={handleSelect}
              >
                {props.quiz.answers[1].text}
                <button
                  id={props.quiz.answers[1].answer_id}
                  onClick={handleSelect}
                >
                  {props.selectedAnswer === props.quiz.answers[1].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>
            </div>

            <button
              id="submitAnswerBtn"
              onClick={handleSubmit}
              disabled={isDisabled()}
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToProps = ({ quiz, selectedAnswer }) => {
  return {
    quiz,
    selectedAnswer,
  };
};

export default connect(mapStateToProps, {
  selectAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
})(Quiz);
