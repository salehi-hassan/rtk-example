import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../slices/posts";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts: postsData, loading, hasErrors } = useSelector(postsSelector);
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setPosts(postsData.map((post) => <Post key={post.id} post={post} />));
  }, [postsData]);

  useEffect(() => {
    if (loading) setState("Loading...");
    else if (hasErrors) setState("Something went wrong!!!");
    else setState("");
  }, [loading, hasErrors]);

  return (
    <div>
      <h1> Posts: </h1>
      {state}
      {posts}
    </div>
  );
};
export default Posts;
