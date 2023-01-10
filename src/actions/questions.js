import { saveAnswer } from "./users";
import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAnswer(id, authedUser, option) {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    option,
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    dispatch(saveAnswer(info.id, info.authedUser, info.option));
    dispatch(addAnswer(info.id, info.authedUser, info.option));

    return saveQuestionAnswer(info.authedUser, info.id, info.option).catch(
      (e) => {
        alert("There was an error saving answer. Try again.");
      }
    );
  };
}
