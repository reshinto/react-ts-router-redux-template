/* eslint-disable @typescript-eslint/no-explicit-any */
import transform from "lodash/transform";

import { getUrlWithQueryTypes } from "./types";

export class Url {
  url: string;

  params: any;

  constructor(url = "", params?: any) {
    this.url = url;
    this.params = params;
  }

  addParams(params: any) {
    Object.assign(this.params, params);
  }

  toString() {
    let paramsStr = this.params ? "?" : "";

    paramsStr += transform(
      this.params,
      (result: any, value: any, key: any) => {
        result.push(`${key}=${value}`);
      },
      [],
    ).join("&");

    return this.url + paramsStr;
  }
}

export const getUrlWithQuery = ({
  location,
  queryName,
  queryValue,
}: getUrlWithQueryTypes) => {
  const { pathname, search } = location;
  const params = new URLSearchParams(search.slice(1));

  if (params.has(queryName)) {
    params.set(queryName, queryValue);
  } else {
    params.append(queryName, queryValue);
  }

  return `${pathname}?${decodeURIComponent(params.toString())}`;
};
