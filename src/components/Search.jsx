import React, { useState, useEffect } from "react";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className=" h-10  w-80 border-2 border-gray-400 rounded-lg flex flex-row justify-between px-4 py-2 mb-6">
          <input
            className=" border-none focus:outline-none placeholder:text-center text-gray-500"
            type="text"
            value={searchText}
            placeholder="Search Country"
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
