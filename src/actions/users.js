export const RECEIVE_USERS = "RECIVE_USERS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveAnswer({ id, authedUser, option }) {
  return {
    type: SAVE_ANSWER,
    id,
    authedUser,
    option,
  };
}

export function saveNewQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}
