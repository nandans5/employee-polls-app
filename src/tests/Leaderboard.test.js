import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Leaderboard from "../components/Leaderboard";
import { store } from "../store";

describe("Leaderboard", () => {
  it("verify ids", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );

    const leaderboardtable = component.getByTestId("leaderboard-table");

    expect(leaderboardtable).toBeInTheDocument();
  });
});
