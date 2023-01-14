import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import { LoadingBar } from "react-redux-loading-bar";
import NewQuestion from "./NewQuestion";
import PollQuestion from "./PollQuestion";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Poll404 from "./Poll404";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  // if (props.authedUser === "") {
  //   return (
  //     <div>
  //       <Login />
  //     </div>
  //   );
  // }
  return (
    // <div>
    //   <LoadingBar />
    //   {props.loading === true ? null : (
    //     // <PollQuestion
    //     //   match={{
    //     //     params: { id: "am8ehyc8byjqgar0jgpub9" },
    //     //   }}
    //     // />
    //     <Dashboard />
    //   )}
    // </div>
    <Fragment>
      <LoadingBar />
      <div className="container">
        <NavBar />
        {props.loading === true ? null : props.authedUser === "" ? (
          <div>
            <Login />
          </div>
        ) : (
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/questions/:id" element={<PollQuestion />} />
            <Route path="/add" element={<NewQuestion />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/poll404" element={<Poll404 />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
