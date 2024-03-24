import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Messages from "./Messages.js";
import MessageTyping from "./MessageTyping.js";

const MessageContainer = ({ person }) => {
  return (
    <div className="w-full flex flex-col max-h-full border-2 border-gray-200 rounded-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          {/* Avatar */}
          <img
            className="w-10 h-10 rounded-full mr-4 object-cover"
            src={person.icon}
            alt="Avatar"
          />
          {/* Friend's name and typing state */}
          <div>
            <div className="font-medium">{person.name}</div>
            <div className="text-xs text-gray-500">
              {person.isTyping ? "Typing..." : ""}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Video call button */}
          <button className="p-2 flex items-center justify-center rounded-full border border-gray-300 shadow-md">
            <IoVideocamOutline className="w-5 h-5 text-blue-500" />
          </button>
          {/* Call button */}
          <button className=" p-[10px] flex items-center justify-center rounded-full border border-gray-300 shadow-md">
            <BsTelephone className="w-4 h-4 text-blue-500 " />
          </button>
        </div>
      </div>

      {/* Message playground */}
      <Messages person={person} />
      {/*Message typing ground */}
      <MessageTyping />
    </div>
  );
};

export default MessageContainer;
