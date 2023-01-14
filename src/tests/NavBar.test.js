import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NavBar from "../components/NavBar";
import { store } from "../store";

describe("Leaderboard", () => {
  it("verify ids", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    const navbar = component.getByTestId("nav-bar");
    const navbarlist = component.getByTestId("nav-bar-list");

    expect(navbar).toBeInTheDocument();
    expect(navbarlist).toBeInTheDocument();
  });
});
