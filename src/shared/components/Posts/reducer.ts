/* eslint-disable @typescript-eslint/no-explicit-any */
import produce from "immer";

import AsyncAction from "../../services/AsyncActionHelper";

export const containerId = "PostsPage";
export const fetchPosts = new AsyncAction(`${containerId}/POSTS_FETCH`);
export const fetchPost = new AsyncAction(`${containerId}/POST_FETCH`);
export const createPost = new AsyncAction(`${containerId}/POST_CREATE`);
export const updatePost = new AsyncAction(`${containerId}/POST_UPDATE`);
export const removePost = new AsyncAction(`${containerId}/POST_REMOVE`);

export const selector = (state: { [k: string]: any }) => state[containerId];

export const initialState: any = {
  postsData: [],
  postData: {},

  isFetchPostsLoading: false,
  isFetchPostLoading: false,
  isCreatePostLoading: false,
  isUpdatePostLoading: false,
  isRemovePostLoading: false,

  fetchPostsError: "",
  fetchPostError: "",
  createPostError: "",
  updatePostError: "",
  removePostError: "",
};

export default produce((draft, { type, payload }) => {
  switch (type) {
    case fetchPosts.REQUEST:
      draft.isFetchPostsLoading = true;
      draft.fetchPostsError = "";
      break;
    case fetchPosts.SUCCESS:
      draft.postsData = payload;
      draft.isFetchPostsLoading = false;
      break;
    case fetchPosts.FAILURE:
      draft.isFetchPostsLoading = false;
      draft.fetchPostsError = payload;
      break;

    case fetchPost.REQUEST:
      draft.isFetchPostLoading = true;
      draft.fetchPostError = "";
      break;
    case fetchPost.SUCCESS:
      draft.postData = payload;
      draft.isFetchPostLoading = false;
      break;
    case fetchPost.FAILURE:
      draft.isFetchPostLoading = false;
      draft.fetchPostError = payload;
      break;

    case createPost.REQUEST:
      draft.isCreatePostLoading = true;
      draft.createPostError = "";
      break;
    case createPost.SUCCESS:
      draft.isCreatePostLoading = false;
      break;
    case createPost.FAILURE:
      draft.isCreatePostLoading = false;
      draft.createPostError = payload;
      break;

    case updatePost.REQUEST:
      draft.isUpdatePostLoading = true;
      draft.updatePostError = "";
      break;
    case updatePost.SUCCESS:
      draft.postData = payload;
      draft.isUpdatePostLoading = false;
      break;
    case updatePost.FAILURE:
      draft.isUpdatePostLoading = false;
      draft.updatePostError = payload;
      break;

    case removePost.REQUEST:
      draft.isRemovePostLoading = true;
      draft.removePostError = "";
      break;
    case removePost.SUCCESS:
      draft.isRemovePostLoading = false;
      break;
    case removePost.FAILURE:
      draft.isRemovePostLoading = false;
      draft.removePostError = payload;
      break;

    default:
  }
}, initialState);
