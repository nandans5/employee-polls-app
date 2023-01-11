import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import { LoadingBar } from "react-redux-loading-bar";
import NewQuestion from "./NewQuestion";
import PollQuestion from "./PollQuestion";
import Leaderboard from "./Leaderboard";
import Login from "./Login";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar />
      {props.loading === true ? null : (
        // <PollQuestion
        //   match={{
        //     params: { id: "am8ehyc8byjqgar0jgpub9" },
        //   }}
        // />
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
