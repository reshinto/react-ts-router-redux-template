import { render } from "@testing-library/react";
import Login from "../index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  Link: () => <div>link</div>,
}));

it("renders Login component", () => {
  const { getByText } = render(<Login />);

  expect(getByText(/Login/i)).toBeInTheDocument();
});
