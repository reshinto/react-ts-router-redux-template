import postsPageReducer, {
  containerId,
  createPost,
  fetchPosts,
  fetchPost,
  initialState,
  removePost,
  selector,
  updatePost,
} from "../reducer";

describe("PostsPage reducer", () => {
  it("Should return initial state by default", () => {
    expect(postsPageReducer(undefined, {})).toEqual(initialState);
  });

  it("Should set values for isFetchPostsLoading and error on fetchPosts.REQUEST", () => {
    const resultState = postsPageReducer(
      { isFetchPostsLoading: false, fetchPostsError: "Error" },
      fetchPosts.request(),
    );

    expect(resultState).toEqual({
      isFetchPostsLoading: true,
      fetchPostsError: "",
    });
  });

  it("Should set values for postsData and isFetchPostsLoading on fetchPosts.SUCCESS", () => {
    const payload = {};
    const resultState = postsPageReducer(
      { postsData: [], isFetchPostsLoading: true },
      fetchPosts.success(payload),
    );

    expect(resultState).toEqual({
      postsData: payload,
      isFetchPostsLoading: false,
    });
  });

  it("Should set values for isFetchPostsLoading and fetchPostsError on fetchPosts.FAILURE", () => {
    const payload = "Error";
    const resultState = postsPageReducer(
      { isFetchPostsLoading: true, fetchPostsError: "" },
      fetchPosts.failure(payload),
    );

    expect(resultState).toEqual({
      isFetchPostsLoading: false,
      fetchPostsError: payload,
    });
  });

  it("Should set values for isFetchPostLoading and fetchPostError on fetchPost.REQUEST", () => {
    const resultState = postsPageReducer(
      { isFetchPostLoading: false, fetchPostError: "Error" },
      fetchPost.request(),
    );

    expect(resultState).toEqual({
      isFetchPostLoading: true,
      fetchPostError: "",
    });
  });

  it("Should set values for postData and isFetchPostLoading on fetchPost.SUCCESS", () => {
    const payload = {};
    const resultState = postsPageReducer(
      { postData: {}, isFetchPostLoading: true },
      fetchPost.success(payload),
    );

    expect(resultState).toEqual({
      postData: payload,
      isFetchPostLoading: false,
    });
  });

  it("Should set values for isFetchPostLoading and fetchPostError on fetchPost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsPageReducer(
      { isFetchPostLoading: true, fetchPostError: "" },
      fetchPost.failure(payload),
    );

    expect(resultState).toEqual({
      isFetchPostLoading: false,
      fetchPostError: payload,
    });
  });

  it("Should set values for isCreatePostLoading and createPostError on createPost.REQUEST", () => {
    const resultState = postsPageReducer(
      { isCreatePostLoading: false, createPostError: "Error" },
      createPost.request(),
    );

    expect(resultState).toEqual({
      isCreatePostLoading: true,
      createPostError: "",
    });
  });

  it("Should set value for isCreatePostLoading on createPost.SUCCESS", () => {
    const resultState = postsPageReducer(
      { isCreatePostLoading: true },
      createPost.success(),
    );

    expect(resultState).toEqual({ isCreatePostLoading: false });
  });

  it("Should set values for isCreatePostLoading and createPostError on createPost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsPageReducer(
      { isCreatePostLoading: true, createPostError: "" },
      createPost.failure(payload),
    );

    expect(resultState).toEqual({
      isCreatePostLoading: false,
      createPostError: payload,
    });
  });

  it("Should set values for isUpdatePostLoading and updatePostError on updatePost.REQUEST", () => {
    const resultState = postsPageReducer(
      { isUpdatePostLoading: false, updatePostError: "Error" },
      updatePost.request(),
    );

    expect(resultState).toEqual({
      isUpdatePostLoading: true,
      updatePostError: "",
    });
  });

  it("Should set value for isUpdatePostLoading on updatePost.SUCCESS", () => {
    const resultState = postsPageReducer(
      { isUpdatePostLoading: true },
      updatePost.success(),
    );

    expect(resultState).toEqual({ isUpdatePostLoading: false });
  });

  it("Should set values for isUpdatePostLoading and updatePostError on updatePost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsPageReducer(
      { isUpdatePostLoading: true, updatePostError: "" },
      updatePost.failure(payload),
    );

    expect(resultState).toEqual({
      isUpdatePostLoading: false,
      updatePostError: payload,
    });
  });

  it("Should set values for isRemovePostLoading and removePostError on removePost.REQUEST", () => {
    const resultState = postsPageReducer(
      { isRemovePostLoading: false, removePostError: "Error" },
      removePost.request(),
    );

    expect(resultState).toEqual({
      isRemovePostLoading: true,
      removePostError: "",
    });
  });

  it("Should set value for isRemovePostLoading on removePost.SUCCESS", () => {
    const resultState = postsPageReducer(
      { isRemovePostLoading: true },
      removePost.success(),
    );

    expect(resultState).toEqual({ isRemovePostLoading: false });
  });

  it("Should set values for isRemovePostLoading and removePostError on removePost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsPageReducer(
      { isRemovePostLoading: true, removePostError: "" },
      removePost.failure(payload),
    );

    expect(resultState).toEqual({
      isRemovePostLoading: false,
      removePostError: payload,
    });
  });

  it("Selector should return correct result", () => {
    const text = "test";
    const selectedData = selector({ [containerId]: text });

    expect(selectedData).toEqual(text);
  });
});
