import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.option]: {
            ...state[action.id][action.option],
            votes: state[action.id][action.option].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
