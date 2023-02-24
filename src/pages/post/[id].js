import React from "react";
import { getPosts, getPostDetails } from "../../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "../../components";
import { useRouter } from 'next/router';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  console.log("g", post);
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* {post.title} */}
          <PostDetail post={post} />
          <CommentsForm slug={post.id} />
          <Comments slug={post.id} /> 
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="relative lg:sticky topp-8">
            {/* <PostWidget id={post.id} /> */}
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const posts = await getPosts();
  const post = await posts.json();

  const paths = post.map((post) => ({
    params: { id: post.id.toString() },
  })); // all possible paths

  // const paths = [{ params: { id: "1" }}];
  return { paths, fallback: true };
}
export async function getStaticProps(context) {
  const { params } = context;
  console.log("kk", context);
  const id = parseInt(context.params.id);
  // console.log('gg', id, typeof id)
  const data = await getPostDetails(id);
  const post = await data.json();
  console.log("u", data);

  return {
    props: { post },
  };
}
