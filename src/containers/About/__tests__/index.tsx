import { render } from "@testing-library/react";
import About from "../index";

jest.mock("../../../shared/components/Posts", () => () => <div>posts</div>);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

it("renders About component", () => {
  const { getByText } = render(<About />);

  expect(getByText(/About/i)).toBeInTheDocument();
});
