import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Tweet = (props) => {
  console.log(props);

  const toQuestion = (e, id) => {
    e.preventDefault();
  };

  return (
    <div className="tweet">
      <div className="tweet-info">
        <span>{props.question.author}</span>
        <div>{formatDate(props.question.timestamp)}</div>
        <button
          className="show-question-button"
          onClick={(e) => toQuestion(e, props.question.id)}
        >
          SHOW
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Tweet);
