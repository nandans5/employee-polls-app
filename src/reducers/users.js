import { RECEIVE_USERS, SAVE_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id),
        },
      };
    default:
      return state;
  }
}
