import { render, screen } from "@testing-library/react";
import Router from "..";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../../containers/Login", () => () => <div>Login</div>);

describe("Router", () => {
  afterEach(() => jest.clearAllMocks());

  it("Can render Router", () => {
    render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>,
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
