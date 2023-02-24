import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCats } from "../../services";

const Categories = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats().then((re) => {
      setCats(re);
      setCats(re.slice(0, 3));
    });
  }, []);
  // console.log("h", posts);
  return (
    <div className=" bg-white p-8 shadow-lg rounded-lg mb-8">
      <h3 className="text-black">categories</h3>
      {cats.map((cat) => (
        <div key={cat.id} className="flex items-center w-full mb-4">
          <div className="columns-1 flex-none">
            <img
              src="https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg"
              className="h-12 w-12 object-cover shadow-lg rounded-full align-middle"
            />
          </div>
          <div className="columns-4 ml-2 flex-none">
            {/* <div className="text-black w-full"> */}
            {/* <p className="text-black">{post.title.slice(0,20)}</p> */}
            <Link className="text-black" href={`/post/${cat.id}`}>
              {cat.name.slice(0, 20)}
            </Link>
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Categories;
