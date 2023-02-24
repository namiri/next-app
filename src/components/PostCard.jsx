import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="overflow-hidden shadow-md  mb-6">
        <img 
          src="https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg"
          alt={post.title}
          className="object-top h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="text-black transition duration-200 text-center mb-8 cursor-pointer hover:text-pink-400 text-3xl font-semibold">
        <Link href={`/post/${post.id}`}>{post.title}</Link>
        {/* {console.log(typeof post.id)} */}
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src="https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg"
            className="rounded-full align-middle"
            height="50px"
            width="50px"
          />
        </div>
      </div>
      <p className="text-center text-gray-700 px-4">{post.body}</p>
      <div className="text-center">
      <Link className="text-gray-600" href={`/post/${post.id}`}>
        <span>Continue</span>
      </Link>
    </div>
    </div>
  );
};

export default PostCard;
