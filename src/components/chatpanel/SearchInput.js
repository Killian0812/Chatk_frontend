import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div>
      <div>
        <h1 className="font-medium text-blue-500 text-2xl p-3">Chats</h1>
      </div>

      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch className="w-5 h-5 ml-4" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-[90%] mx-auto p-2 ps-10 focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50  focus:border-blue-500 focus:ring-blue-500	 "
            placeholder="Search Chat"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
