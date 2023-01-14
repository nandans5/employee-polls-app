import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">New</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
        {props.authedUser === "" ? <li></li> : <li>{props.authedUser}</li>}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NavBar);
