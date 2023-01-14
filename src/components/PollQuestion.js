import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { handleSaveAnswer } from "../actions/questions";

import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollQuestion = ({ id, question, authedUser, author, dispatch }) => {
  // if (question === undefined) {
  //   return alert("page not found");
  // }
  console.log("poll question: ", question);

  // const [optionOneCheck, setOptionOneCheck] = useState(
  //   question.optionOne.votes.filter((uid) => uid === authedUser).length
  // );

  let checkOptionOne = question.optionOne.votes.filter(
    (uid) => uid === authedUser
  ).length;

  let checkOptionTwo = question.optionTwo.votes.filter(
    (uid) => uid === authedUser
  ).length;

  const [check, setCheck] = useState(checkOptionOne + checkOptionTwo);

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
      <img src={author.avatarURL} alt="avatar" className="poll-avatr" />
      <h3 className="center">Would you rather</h3>
      <div className="poll-options">
        <div>
          <label className={"answer" + (checkOptionOne === 1 ? "-check" : "")}>
            {question.optionOne.text}
          </label>
          <button
            onClick={(e) => {
              handleSubmit(e, "optionOne");
              checkOptionOne = 1;
              setCheck(1);
              // setOptionOneCheck(1);
            }}
            disabled={check === 1}
          >
            option 1
          </button>
        </div>
        <div>
          <label className={"answer" + (checkOptionTwo === 1 ? "-check" : "")}>
            {question.optionTwo.text}
          </label>
          <button
            onClick={(e) => {
              handleSubmit(e, "optionTwo");
              checkOptionTwo = 1;
              setCheck(1);
            }}
            disabled={check === 1}
          >
            option 2
          </button>
        </div>
      </div>
      {check === 1 && (
        <div>
          <div>
            Option 1: {question.optionOne.votes.length} votes -{" "}
            {(question.optionOne.votes.length /
              (question.optionOne.votes.length +
                question.optionTwo.votes.length)) *
              100}
            %
          </div>
          <div>
            Option 2: {question.optionTwo.votes.length} votes -{" "}
            {(question.optionTwo.votes.length /
              (question.optionOne.votes.length +
                question.optionTwo.votes.length)) *
              100}
            %
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  const author = users[question.author];

  return {
    id,
    question,
    authedUser,
    author,
  };
};

export default withRouter(connect(mapStateToProps)(PollQuestion));
