import React from "react";

const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
};

export default Post;
