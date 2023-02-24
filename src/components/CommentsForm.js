import React, { useState, useEffect, useRef } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  //The hook preserves the value in between renders like useState. However it does
  //not trigger a re-render like useState. send data just to api
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  async function handleClick () {
    setError(false);

    const { value: comment } = commentEl.current; // destructure & rename
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    // const commentObj = { name, comment, email, slug };
    const commentObj = {
      userId: 1,
      id: 101,
      title: email,
      body: comment,
    };
    console.log("obj", commentObj);
    const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(commentObj),
    });
    console.log("res", result);
    setShowSuccessMessage(true)
  };

  return (
    <div className="w-full bg-white rounded-lg mt-3 p-5">
      <h3 className="text-lg text-black p-5">Comments</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          placeholder="comment"
          ref={commentEl}
          className="p-5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-black"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          placeholder="email"
          ref={nameEl}
          className="p-5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-black"
        />
        <input
          placeholder="email"
          ref={emailEl}
          className="p-5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-black"
        />
      </div>
      {error && <p>errorrrr</p>}
      <div className="mt-8">
        <button
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-full"
          type="button"
          onClick={handleClick}
        >
          send
        </button>
        {showSuccessMessage && <p className="text-green-500 p-5">success</p>}
      </div>
    </div>
  );
};

export default CommentsForm;
