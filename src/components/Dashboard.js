import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  console.log("new props", props);
  return (
    <div>
      <h2 className="center">Dashboard</h2>
      <h3 className="center">Unanswered Questions</h3>
      <ul className="dashboard-list">
        {props.uaQues.map((q) => (
          <li key={q.id}>
            <Question id={q.id} />
          </li>
        ))}
      </ul>
      <h3 className="center">Answered Questions</h3>
      <ul className="dashboard-list">
        {props.aQues.map((q) => (
          <li key={q.id}>
            <Question id={q.id} />
          </li>
        ))}
      </ul>
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
