// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE: {
      if (state < 5) {
        return state + 1;
      }
      if (state === 5) {
        return (state = 0);
      }
      return;
    }
    case MOVE_COUNTERCLOCKWISE: {
      if (state > 0) {
        return state - 1;
      } else if (state === 0) {
        return (state = 5);
      }
      return;
    }
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE: {
      return (state = action.payload);
    }
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER: {
      return (state = action.payload);
    }
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE: {
      return (state = action.payload);
    }
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {
        ...state,
        [action.payload.target.id]: action.payload.target.value,
      };
    }
    case RESET_FORM: {
      return initialFormState;
    }
    default:
      return state;
  }
  // return {
  //   ...state,
  //   newQuestion: action.payload,
  //   newTrueAnswer: action.payload,
  //   newFalseAnswer: action.payload,
  // };
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
