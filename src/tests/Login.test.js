import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "../components/Login";
import { store } from "../store";

describe("Login", () => {
  it("match screenshot", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("verify ids", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const userid = component.getByTestId("userid-input");
    const password = component.getByTestId("password-input");
    const submitbtn = component.getByTestId("submit-btn");

    expect(userid).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitbtn).toBeInTheDocument();
  });
  it("check fireevent", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const userid = component.getByTestId("userid-input");
    const password = component.getByTestId("password-input");
    const submitbtn = component.getByTestId("submit-btn");

    expect(submitbtn).toBeDisabled();

    fireEvent.change(userid, { target: { value: "sarahedo" } });
    fireEvent.change(password, { target: { value: "password" } });

    expect(submitbtn).toBeEnabled();
  });
});
