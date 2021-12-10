import { renderHook, act } from "@testing-library/react-hooks";
import useNavigateHook from "../index";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("useCustomMethods", () => {
  it("should call navigate with -1 prop", () => {
    const { result } = renderHook(() => useNavigateHook());

    act(() => {
      result.current.navigate();
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  it("should call navigate with /test prop", () => {
    const page = "/test";
    const event = {} as never;
    const { result } = renderHook(() => useNavigateHook());

    act(() => result.current.navigate(event, page));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(page);
  });

  it("should call naviToAboutPage with /test prop", () => {
    const page = "/about";
    const event = {} as never;
    const { result } = renderHook(() => useNavigateHook());

    act(() => result.current.naviToAboutPage(event));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(page);
  });
});
