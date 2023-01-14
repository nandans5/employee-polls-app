import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

const Tweet = (props) => {
  return (
    <div className="question">
      <div className="question-info">
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
