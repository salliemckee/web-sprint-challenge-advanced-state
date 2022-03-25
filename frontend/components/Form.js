import React, { useState } from "react";
import { connect } from "react-redux";
import { setMessage, inputChange, resetForm } from "../state/action-creators";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  const [state, setState] = useState({
    question_text: "",
    true_answer_text: "",
    false_answer_text: "",
    disabled: true,
  });

  const onChange = (evt) => {
    setState({
      ...state,
      question_text: evt.target.value,
      true_answer_text: evt.target.value,
      false_answer_text: evt.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.prevent.default();
    if (
      state.question_text === "" ||
      state.true_answer_text === "" ||
      state.false_answer_text === ""
    ) {
      return props.setMessage();
    } else {
      // props.setQuiz({...state, evt.target.value});
    }
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn" disabled>
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
