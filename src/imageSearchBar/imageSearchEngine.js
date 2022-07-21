import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    searchText(text);
  };

  return (
    <div className="relative  max-w-screen overflow-hidden mx-auto ">
      <form onSubmit={onSubmit} className=" max-w-lg mx-auto">
        <div className="flex items-center rounded-full border-4 border-blue-300 shadow-lg py-2 px-2 my-10 w-xl ">
          <input
            onChange={(event) => setText(event.target.value)}
            type="text"
            placeholder="Search for images..."
            className="apprearance-none bg-transparent  w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none dark:text-gray-200"
          />
          <button
            tpye="submit"
            className="transition ease-in-out hover:scale-105 hover:bg-blue-500 duration-300 delay-150 py-2 px-2 bg-blue-400 rounded-full text-white flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
