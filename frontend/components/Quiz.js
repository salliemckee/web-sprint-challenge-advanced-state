import React from "react";
import { connect } from "react-redux";
import {
  selectAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
} from "../state/action-creators";

function Quiz(props) {
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
                <button>Select</button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToProps = ({ quiz, selectedAnswer, infoMessage }) => {
  return {
    quiz,
    selectedAnswer,
    infoMessage,
  };
};

export default connect(mapStateToProps, {
  selectAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
})(Quiz);
