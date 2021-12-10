/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROOT_ENDPOINTS } from "../constants/api";

import ApiClient from "./ApiClient";
import { Url } from "./url";

export const posts = {
  getAll: () => ApiClient.get(new Url(`${ROOT_ENDPOINTS.posts}`)),
  get: (postId: any) =>
    ApiClient.get(new Url(`${ROOT_ENDPOINTS.posts}/${postId}`)),
  post: (data: any) => ApiClient.post(new Url(`${ROOT_ENDPOINTS.posts}`), data),
  put: (postId: any, data: any) =>
    ApiClient.put(new Url(`${ROOT_ENDPOINTS.posts}/${postId}`), data),
  delete: (postId: any) =>
    ApiClient.get(new Url(`${ROOT_ENDPOINTS.posts}/${postId}`)),
};
