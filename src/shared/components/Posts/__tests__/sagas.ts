/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import { expectSaga } from "redux-saga-test-plan";
import { call, select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import * as api from "../../../services/api";

import {
  createPost,
  fetchPosts,
  fetchPost,
  removePost,
  selector,
  updatePost,
} from "../reducer";
import postsSagas from "../sagas";

describe("PostsPage sagas", () => {
  const postId = 1;

  it("Should put success with response on successful fetchPosts", () => {
    const res: any = [];

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.getAll), res],
      ])
      .put(fetchPosts.success(res))
      .dispatch(fetchPosts.request())
      .silentRun();
  });

  it("Should put failure with error on unsuccessful fetchPosts", () => {
    const error = new Error("error text");

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.getAll), throwError(error)],
      ])
      .put(fetchPosts.failure(error))
      .dispatch(fetchPosts.request())
      .silentRun();
  });

  it("Should put success with response on successful fetchPost", () => {
    const res = {};
    const payload = {
      values: { postId },
    };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.get, payload.values.postId), res],
      ])
      .put(fetchPost.success(res))
      .dispatch(fetchPost.request(payload))
      .silentRun();
  });

  it("Should put failure with error on unsuccessful fetchPost", () => {
    const error = new Error("error text");
    const payload = {
      values: { postId },
    };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.get, payload.values.postId), throwError(error)],
      ])
      .put(fetchPost.failure(error))
      .dispatch(fetchPost.request(payload))
      .silentRun();
  });

  it("Should put success with response on successful createPost", () => {
    const payload = {
      values: {},
      setErrorMessage: jest.fn(),
    };
    const res = {};

    return expectSaga(postsSagas)
      .provide([[select(selector), {}], [call(api.posts.post, payload.values), res]])
      .put(createPost.success())
      .put(fetchPosts.request())
      .dispatch(createPost.request(payload))
      .silentRun();
  });

  it("Should put failure with response on unsuccessful createPost", () => {
    const error = new Error("error text");

    const payload = {
      values: {},
      setErrorMessage: jest.fn(),
    };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.post, payload.values), throwError(error)],
      ])
      .put(createPost.failure(error))
      .call(payload.setErrorMessage, "postname", "postname needs to be unique")
      .dispatch(createPost.request(payload))
      .silentRun();
  });

  it("Should put success with response on successful updatePost", () => {
    const payload = {
      values: { postId },
      setErrorMessage: jest.fn(),
    };
    const res = {};

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.put, payload.values.postId, payload.values), res],
      ])
      .put(updatePost.success(res))
      .put(fetchPosts.request())
      .dispatch(updatePost.request(payload))
      .silentRun();
  });

  it("Should put failure with response on unsuccessful updatePost", () => {
    const error = new Error("error text");

    const payload = {
      values: { postId },
      setErrorMessage: jest.fn(),
    };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [
          call(api.posts.put, payload.values.postId, payload.values),
          throwError(error),
        ],
      ])
      .put(updatePost.failure(error))
      .call(payload.setErrorMessage, "postname", "postname needs to be unique")
      .dispatch(updatePost.request(payload))
      .silentRun();
  });

  it("Should put success with response on successful removePost", () => {
    const payload = {
      values: { postId },
      callback: jest.fn(),
    };

    const res = {};

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.delete, payload.values.postId), res],
      ])
      .put(removePost.success())
      .put(fetchPosts.request())
      .dispatch(removePost.request(payload))
      .silentRun();
  });

  it("Should put failure with response on unsuccessful removePost", () => {
    const error = new Error("error text");

    const payload = {
      values: { postId },
      callback: jest.fn(),
    };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.delete, payload.values.postId), throwError(error)],
      ])
      .put(removePost.failure(error))
      .dispatch(removePost.request(payload))
      .silentRun();
  });
});
