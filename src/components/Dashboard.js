import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  //   console.log(props);
  return (
    <div>
      <h2>Questions</h2>
      <ul className="dashboard-list">
        {props.questionIds.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
