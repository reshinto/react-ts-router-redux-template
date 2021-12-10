import { useAuth } from "../protectedRoutes";

describe("useAuth", () => {
  it("Should return false", () => {
    const expected = false;
    const result = useAuth();
    expect(result).toEqual(expected);
  })
})
