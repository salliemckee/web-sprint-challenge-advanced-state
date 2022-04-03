import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setMessage,
  inputChange,
  resetForm,
  postQuiz,
} from "../state/action-creators";

export function Form(props) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    if (
      props.form.newQuestion.trim().length >= 1 &&
      props.form.newTrueAnswer.trim().length >= 1 &&
      props.form.newFalseAnswer.trim().length >= 1
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [props.form]);

  const onChange = (evt) => {
    props.inputChange(evt);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.postQuiz(props.form);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        value={props.form.newQuestion}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        value={props.form.newTrueAnswer}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        value={props.form.newFalseAnswer}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn" disabled={buttonDisabled}>
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = ({ form }) => {
  return {
    form,
  };
};

export default connect(mapStateToProps, {
  inputChange,
  setMessage,
  resetForm,
  postQuiz,
})(Form);
