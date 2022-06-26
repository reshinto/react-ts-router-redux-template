/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { containerId } from "../reducer";
import Posts from "../index";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Posts", () => {
  const selector =
    (values: { postsData: any[]; isFetchPostsLoading: boolean }) =>
    (
      state: (arg0: {
        PostsPage: {
          postsData: any[];
          isFetchPostsLoading: boolean;
        };
      }) => any,
    ) =>
      state({ [containerId]: values });

  beforeEach(() => {
    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        postsData: [],
        isFetchPostsLoading: false,
      }),
    ) as any;
  });

  it("Can render Loading text", () => {
    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        postsData: [],
        isFetchPostsLoading: true,
      }),
    );
    const dispatch = jest.fn();
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(dispatch);
    render(<Posts />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it("Can render Posts", () => {
    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        postsData: [{ id: 1, title: "test" }],
        isFetchPostsLoading: false,
      }),
    );
    const dispatch = jest.fn();
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(dispatch);
    render(<Posts />);

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
