import { _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestionAnswer", () => {
  it("will check if the answer is saved correctly", async () => {
    const validAnswer = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(validAnswer);
    expect(result).toEqual(true);
  });

  it("will check if an error is returned if all the required data is not passed", async () => {
    const invalidAnswer = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "",
    };
    await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
