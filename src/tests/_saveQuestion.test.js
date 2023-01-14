import { _saveQuestion } from "../utils/_DATA";

describe("_saveQuestion", () => {
  it("will check if the new question is saved correctly", async () => {
    const validQuestion = {
      optionOneText: "eat chips",
      optionTwoText: "eat cookies",
      author: "mtsamis",
    };
    const result = await _saveQuestion(validQuestion);
    expect(result.author).toEqual(validQuestion.author);
    expect(result.optionOne.text).toEqual(validQuestion.optionOneText);
    expect(result.optionTwo.text).toEqual(validQuestion.optionTwoText);
  });

  it("will check if an error is returned if all the required data is not passed", async () => {
    const invalidQuestion = {
      optionOneText: "eat chips",
      optionTwoText: "",
      author: "mtsamis",
    };
    await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
