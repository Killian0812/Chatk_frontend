import React from "react";
import { Link } from "react-router-dom";
import { BsChat, BsPerson, BsPeople, BsGear, BsPower } from "react-icons/bs"; // Importing icons from react-icons library

const NavBar = () => {
  return (
    <div className="rounded-lg border flex flex-col gap-1 w-[300px] items-center">
      <h1 className="text-3xl text-black font-medium p-4">
        Chat<span className="text-blue-500">K</span>
      </h1>
      <div className="divider my-0"></div>
      <ul className="flex flex-col gap-5 justify-between items-center w-full mt-10">
        {/* Chat */}
        <li className="p-0 text-blue flex items-center justify-center text-blue-500 hover:bg-blue-400 hover:text-white w-full">
          <Link to={"/"} className="w-full flex justify-center">
            <span className="p-2 flex flex-row">
              <BsChat className="mr-2 w-5 h-5" /> Chat
            </span>
          </Link>
        </li>

        {/* Profile */}
        <li className="p-0 text-blue flex items-center justify-center text-blue-500 hover:bg-blue-400 hover:text-white w-full">
          <Link to={"/profile"} className="w-full flex justify-center h-full">
            <span className="p-2 flex flex-row">
              <BsPerson className="mr-2 w-5 h-5" /> Profile
            </span>
          </Link>
        </li>

        {/* Group */}
        <li className="p-0 text-blue flex items-center justify-center text-blue-500 hover:bg-blue-400 hover:text-white w-full">
          <Link to={"/group"} className="w-full flex justify-center h-full ">
            <span className="p-2 flex flex-row">
              <BsPeople className="mr-2 w-5 h-5" /> Group
            </span>
          </Link>
        </li>

        {/* Setting */}
        <li className="p-0 text-blue flex items-center justify-center text-blue-500 hover:bg-blue-400 hover:text-white w-full">
          <Link to={"/setting"} className="w-full flex justify-center">
            <span className="p-2 flex flex-row">
              <BsGear className="mr-2 w-5 h-5" /> Setting
            </span>
          </Link>
        </li>
      </ul>

      {/* Logout */}
      <li className="p-0 text-blue flex items-center justify-center text-blue-500 hover:bg-blue-400 hover:text-white w-full mt-[300px]">
        <Link to={"/logout"} className="w-full flex justify-center">
          <span className="p-2 flex flex-row">
            <BsPower className="mr-2 w-5 h-5" /> Logout
          </span>
        </Link>
      </li>
    </div>
  );
};

export default NavBar;
