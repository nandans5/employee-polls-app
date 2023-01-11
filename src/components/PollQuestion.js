import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { handleSaveAnswer } from "../actions/questions";

const PollQuestion = ({ id, question, authedUser, author, dispatch }) => {
  // if (question === undefined) {
  //   return alert("page not found");
  // }
  console.log("poll question: ", question);
  const [check, setCheck] = useState(0);

  // const checkOptionOne = question.optionOne.votes.filter(
  //   (uid) => uid === authedUser
  // ).length;

  // const checkOptionTwo = question.optionTwo.votes.filter(
  //   (uid) => uid === authedUser
  // ).length;

  const handleSubmit = (e, option) => {
    e.preventDefault();
    dispatch(
      handleSaveAnswer({
        id: question.id,
        authedUser: authedUser,
        option: option,
      })
    );

    console.log("poll answer", id, authedUser, option);
  };

  return (
    <div>
      <h2 className="center">Poll by {author.name}</h2>
      <img src={author.avatarURL} className="poll-avatr" />
      <h3 className="center">Would you rather</h3>
      <div className="poll-options">
        <div>
          <label>{question.optionOne.text}</label>
          <button
            onClick={(e) => {
              setCheck(1);
              handleSubmit(e, "optionOne");
            }}
            disabled={check === 1}
          >
            option 1
          </button>
        </div>
        <div>
          <label>{question.optionTwo.text}</label>
          <button
            onClick={(e) => {
              setCheck(1);
              handleSubmit(e, "optionTwo");
            }}
            disabled={check === 1}
          >
            option 2
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];

  return {
    id,
    question,
    authedUser,
    author,
  };
};

export default connect(mapStateToProps)(PollQuestion);
