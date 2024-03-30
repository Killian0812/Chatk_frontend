import React from "react";
import SearchInput from "./SearchInput.js";
import Conversations from "./Conversations.js";

const SideBar = () => {
  return (
    <div className="h-auto min-w-[350px] bg-[#F5F8FD]">
      <SearchInput />
      <div className="divider px-3 my-1"></div>
      <Conversations />
    </div>
  );
};

export default SideBar;
