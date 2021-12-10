/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, put, takeLatest } from "redux-saga/effects";

import * as api from "../../services/api";
import {
  createPost,
  fetchPost,
  fetchPosts,
  removePost,
  updatePost,
} from "./reducer";

export function* fetchPostsSaga(): any {
  try {
    const res = yield call(api.posts.getAll);

    yield put(fetchPosts.success(res));
  } catch (err) {
    yield put(fetchPosts.failure(err));
  }
}

export function* fetchPostSaga({ payload }: any): any {
  const { values } = payload;
  const { postId } = values;

  try {
    const res = yield call(api.posts.get, postId);

    yield put(fetchPost.success(res));
  } catch (err) {
    yield put(fetchPost.failure(err));
  }
}

export function* createPostSaga({ payload }: any): any {
  const { values, setErrorMessage } = payload;

  try {
    yield call(api.posts.post, values);

    yield put(createPost.success());
    yield put(fetchPosts.request());
  } catch (err) {
    yield put(createPost.failure(err));
    yield call(setErrorMessage, "postname", "postname needs to be unique");
  }
}

export function* updatePostSaga({ payload }: any): any {
  const { values, setErrorMessage } = payload;
  const { postId } = values;

  try {
    const res = yield call(api.posts.put, postId, values);

    yield put(updatePost.success(res));
    yield put(fetchPosts.request());
  } catch (err) {
    yield put(updatePost.failure(err));

    yield call(setErrorMessage, "postname", "postname needs to be unique");
  }
}

export function* removePostSaga({ payload }: any): any {
  const { values, callback } = payload;
  const { postId } = values;

  try {
    yield call(api.posts.delete, postId);

    yield put(removePost.success());
    yield put(fetchPosts.request());

    callback();
  } catch (err) {
    yield put(removePost.failure(err));
  }
}

export default function* postsSagas() {
  yield all([
    takeLatest(fetchPosts.REQUEST, fetchPostsSaga),
    takeLatest(fetchPost.REQUEST, fetchPostSaga),
    takeLatest(createPost.REQUEST, createPostSaga),
    takeLatest(updatePost.REQUEST, updatePostSaga),
    takeLatest(removePost.REQUEST, removePostSaga),
  ]);
}
