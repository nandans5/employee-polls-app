import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NewQuestion from "../components/NewQuestion";
import { store } from "../store";

describe("NewQuestion", () => {
  it("verify ids", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuestion />
        </BrowserRouter>
      </Provider>
    );

    const optionone = component.getByTestId("option-one");
    const optiontwo = component.getByTestId("option-two");
    const submitbtn = component.getByTestId("submit-btn");

    expect(optionone).toBeInTheDocument();
    expect(optiontwo).toBeInTheDocument();
    expect(submitbtn).toBeInTheDocument();
  });
});
