/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */

import { isString } from "lodash";

/* eslint-disable guard-for-in */
export const isJsonContentType = (type: string | string[] | null) =>
  type && type.indexOf("json") >= 0;

export const getHeaders = () => {
  // modify this in accordance to how token is retrieved
  const token = "123";

  return new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
};

export const modifyHeaders = (options: any, currentHeaders: any) => {
  let extraOptions = {};
  if (options) {
    const { headers, ...restOptions } = options;
    extraOptions = restOptions;
    for (const header in headers) {
      currentHeaders.append(header, headers[header]);
    }
  }
  return extraOptions;
};

export const getPromiseResponse = (response: any, type: any) =>
  isJsonContentType(type) ? response.json() : response.text();

export const updateBodyOrHeader = (body: any, headers: any) => {
  if (body && body instanceof FormData) {
    headers.delete("Content-Type");
  } else if (!isString(body)) {
    return JSON.stringify(body);
  }
  return body;
};
