import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    <div>
      <h2 className="center">Leaderboard</h2>
      <div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Users</th>
              <th>Answers</th>
              <th>Questions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.questions.length}</td>
                <td>{Object.keys(user.answers).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    // users: Object.keys(users).sort(
    //   (a, b) =>
    //     b.questions.length +
    //     b.answers.length -
    //     (a.questions.length + a.answers.length)
    // ),
    users: Object.values(users).sort(
      (a, b) =>
        b.questions.length +
        Object.keys(b.answers).length -
        (a.questions.length + Object.keys(a.answers).length)
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
