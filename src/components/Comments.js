import React, { useState, useEffect } from "react";
import { getComments } from "../../services";

const Comments = ({ slug }) => {
  const [com, setCom] = useState([]);
  useEffect(() => {
    getComments(slug).then((re) => {
      setCom(re);
      // setCom(re.slice(0, 3));
    });
  }, []);

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="text-black p-5">
        <h2 className="text-lg">{com.email}</h2>
        <p>{com.name}</p>
      </div>
    </div>
  );
};

export default Comments;
