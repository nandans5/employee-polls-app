import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

const Login = ({ users, dispatch }) => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (users[userid] && users[userid].password === password) {
      dispatch(setAuthedUser(userid));
    } else {
      alert("login failed");
    }

    setUserid("");
    setPassword("");
  };

  const handleChangeUserid = (e) => {
    const text = e.target.value;

    setUserid(text);
  };

  const handleChangePassword = (e) => {
    const text = e.target.value;

    setPassword(text);
  };

  return (
    <div>
      <h2 className="center">Login Page</h2>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <label>User ID</label>
        <textarea
          placeholder="enter userid"
          value={userid}
          onChange={handleChangeUserid}
          className="text-area"
        />
        <label>Password</label>
        <textarea
          placeholder="enter password"
          value={password}
          onChange={handleChangePassword}
          className="text-area"
        />
        <button
          className="btn"
          type="submit"
          disabled={userid === "" || password === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users, dispatch }) => {
  return {
    users,
    dispatch,
  };
};

export default connect(mapStateToProps)(Login);
