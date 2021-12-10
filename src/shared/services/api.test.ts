import ApiClient from "./ApiClient";
import { posts } from "./api";

describe("posts CRUD", () => {
  it("getAll", async () => {
    jest.spyOn(ApiClient, "get").mockResolvedValueOnce("test");
    const res = await posts.getAll();
    expect(res).toEqual("test");
  });

  it("get", async () => {
    jest.spyOn(ApiClient, "get").mockResolvedValueOnce("test");
    const id = 1;
    const res = await posts.get(id);
    expect(res).toEqual("test");
  });

  it("post", async () => {
    jest.spyOn(ApiClient, "post").mockResolvedValueOnce("test");
    const res = await posts.post({ test: "test" });
    expect(res).toEqual("test");
  });

  it("put", async () => {
    jest.spyOn(ApiClient, "put").mockResolvedValueOnce("test");
    const id = 1;
    const res = await posts.put(id, { test: "test" });
    expect(res).toEqual("test");
  });

  it("delete", async () => {
    jest.spyOn(ApiClient, "delete").mockResolvedValueOnce("test");
    const id = 1;
    const res = await posts.delete(id);
    expect(res).toEqual(undefined);
  });
});
