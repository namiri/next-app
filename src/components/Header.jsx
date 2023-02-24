import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCats } from "../../services";
const cats = [
  { name: "react", slug: "react" },
  { name: "web", slug: "web-dev" },
];
const Header = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats().then((re) => {
      setCats(re);
      setCats(re.slice(0, 3));
    });
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {cats.map((c) => (
            <Link key={c.id} href={`/category/${c.id}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-white">
                {c.name.slice(0,5)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
