import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const PollQuestion = ({ id, question, authedUser, author }) => {
  console.log("poll question: ", question);
  const check = 0;
  return (
    <div>
      <h2 className="center">Poll by {author.name}</h2>
      <img src={author.avatarURL} className="poll-avatr" />
      <h3 className="center">Would you rather</h3>
      <div className="poll-options">
        <div>
          <label>{question.optionOne.text}</label>
          <button
            onClick={(check) => {
              check = 1;
            }}
            disabled={check === 1}
          >
            option 1
          </button>
        </div>
        <div>
          <label>{question.optionTwo.text}</label>
          <button
            onClick={(check) => {
              check = 1;
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
