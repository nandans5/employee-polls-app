import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

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
        <Link
          to={`/questions/${props.question.id}`}
          className="show-question-button"
        >
          SHOW
        </Link>
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
