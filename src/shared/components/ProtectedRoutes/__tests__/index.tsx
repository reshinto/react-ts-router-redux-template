import { render } from "@testing-library/react";
import * as protectedRoutesHelper from "../../../utils/helpers/protectedRoutes";
import ProtectedRoutes from "../index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <div>outlet</div>,
  Navigate: () => <div>navigate</div>,
}));

describe("ProtectedRoutes", () => {
  it("should render Outlet", () => {
    jest.spyOn(protectedRoutesHelper, "useAuth").mockReturnValue(true);
    const { getByText } = render(<ProtectedRoutes />);

    expect(getByText(/outlet/i)).toBeInTheDocument();
  });

  it("should render Navigate", () => {
    jest.spyOn(protectedRoutesHelper, "useAuth").mockReturnValue(false);
    const { getByText, queryByText } = render(<ProtectedRoutes />);

    expect(queryByText(/outlet/i)).not.toBeInTheDocument();
    expect(getByText(/navigate/i)).toBeInTheDocument();
  });
});
