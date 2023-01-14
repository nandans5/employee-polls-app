import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestion = ({ dispatch }) => {
  const navigate = useNavigate;

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChangeOptionOne = (e) => {
    const option = e.target.value;

    setOptionOne(option);
  };

  const handleChangeOptionTwo = (e) => {
    const option = e.target.value;

    setOptionTwo(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOne, optionTwo));

    console.log("option 1: ", optionOne);
    console.log("option 2: ", optionTwo);

    setOptionOne("");
    setOptionTwo("");

    navigate("/");
  };

  return (
    <div>
      <h2 className="center">Would You Rather</h2>
      <h3 className="center">Create Your Own Poll</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <label>First Option</label>
        <textarea
          placeholder="option one"
          value={optionOne}
          onChange={handleChangeOptionOne}
          className="text-area"
        />
        <label>Second Option</label>
        <textarea
          placeholder="option two"
          value={optionTwo}
          onChange={handleChangeOptionTwo}
          className="text-area"
        />
        <button
          className="btn"
          type="submit"
          disabled={optionOne === "" || optionTwo === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);
