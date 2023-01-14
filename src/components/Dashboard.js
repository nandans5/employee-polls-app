import { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  console.log("new props", props);

  const [check, setCheck] = useState(0);

  return (
    <div>
      <h2 className="center">Dashboard</h2>
      <div className="center-div">
        <button
          onClick={() => {
            setCheck(0);
          }}
        >
          Show Unanswered Questions
        </button>
        <button
          onClick={() => {
            setCheck(1);
          }}
        >
          Show Answered Questions
        </button>
      </div>
      {check === 0 && (
        <div>
          <h3 className="center">Unanswered Questions</h3>
          <ul className="dashboard-list">
            {props.uaQues.map((q) => (
              <li key={q.id}>
                <Question id={q.id} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {check === 1 && (
        <div>
          <h3 className="center">Answered Questions</h3>
          <ul className="dashboard-list">
            {props.aQues.map((q) => (
              <li key={q.id}>
                <Question id={q.id} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questionIds: Object.keys(questions)
      // .filter(
      //   (question) =>
      //     question.optionOne.votes.includes(authedUser) ||
      //     question.optionTwo.votes.includes(authedUser)
      // )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    aQues: Object.values(questions)
      .filter(
        (question) =>
          question.optionOne.votes.includes(authedUser) ||
          question.optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => b.timestamp - a.timestamp),
    uaQues: Object.values(questions)
      .filter(
        (question) =>
          !question.optionOne.votes.includes(authedUser) &&
          !question.optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => b.timestamp - a.timestamp),
  };
};

export default connect(mapStateToProps)(Dashboard);
