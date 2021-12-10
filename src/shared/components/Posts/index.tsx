/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPosts,
  fetchPost,
  // updatePost,
  // createPost,
  // removePost,
  selector,
} from "./reducer";

const postId = 1;

export const Posts = () => {
  const dispatch = useDispatch();

  const {
    postsData,
    isFetchPostsLoading,
    // postData,
    // isFetchPostLoading,
    // isCreatePostLoading,
    // isUpdatePostLoading,
    // isRemovePostLoading,
  } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchPosts.request());
    dispatch(fetchPost.request({ values: { postId } }));
  }, [dispatch]);

  return (
    <>
      <header>Posts</header>
      {isFetchPostsLoading
        ? "Loading"
        : postsData.map((post: any) => <h6 key={post.id}>{post.title}</h6>)}
    </>
  );
};

export default memo(Posts);
