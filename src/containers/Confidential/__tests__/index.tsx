import { render } from "@testing-library/react";
import Confidential from "../index";

it("renders Confidential component", () => {
  const { getByText } = render(<Confidential />);

  expect(getByText(/Confidential/i)).toBeInTheDocument();
});
