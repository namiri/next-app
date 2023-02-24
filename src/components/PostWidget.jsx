import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRecentPosts, getSimPosts } from "../../services";

const PostWidget = ({ categories, slug }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimPosts().then((re) => setPosts(re));
    } else {
      getRecentPosts().then((res) => {
        setPosts(res.slice(0, 3));
      });
    }
  }, [slug]);
  // console.log("h", posts);

  return (
    <div className=" bg-white p-8 shadow-lg rounded-lg mb-8">
      <h3 className="text-black">{slug ? "Similar posts" : "recent posts"}</h3>
      {posts.map((post) => (
        <div key={post.id} className="flex items-center w-full mb-4">
          <div className="columns-1 flex-none">
            <img
              src="https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg"
              className="h-12 w-12 object-cover shadow-lg rounded-full align-middle"
            />
          </div>
          <div className="columns-4 ml-2 flex-none">
            {/* <div className="text-black w-full"> */}
              {/* <p className="text-black">{post.title.slice(0,20)}</p> */}
              <Link className="text-black" href={`/post/${post.id}`}>{post.title.slice(0,20)}</Link>
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostWidget;
