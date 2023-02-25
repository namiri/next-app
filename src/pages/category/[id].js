import React from "react";
import { useRouter } from "next/router";

import { PostCard, Categories, Loader } from "../../components";
import { getCats, getComments } from "../../../services";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
         {posts.name}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getStaticPaths() {
  const posts = await getCats();

  const paths = posts.map((post) => ({
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
  const data = await getComments(id);
  console.log("u", data);

  return {
    props: { posts: data },
  };
}

