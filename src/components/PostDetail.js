import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="text-black p-5">
        <h2 className="text-lg">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
