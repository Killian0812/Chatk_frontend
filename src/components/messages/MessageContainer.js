import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Messages from "./Messages.js";
import MessageInput from "./MessageInput.js";

const MessageContainer = ({ person }) => {
  return (
    <div className="w-full flex flex-col max-h-full border-2 border-gray-200">
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
            <div className="font-medium text-black opacity-85">{person.name}</div>
            <div className="text-xs text-gray-500">
              {person.isTyping ? "Typing..." : ""}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Video call button */}
          <button className="p-2 flex items-center justify-center rounded-full border border-gray-300 hover:shadow-md duration-200">
            <IoVideocamOutline className="w-6 h-6 text-blue-500" />
          </button>
          {/* Call button */}
          <button className="p-2 flex items-center justify-center rounded-full border border-gray-300 hover:shadow-md duration-200">
            <BsTelephone className="w-6 h-6 text-blue-500 " />
          </button>
        </div>
      </div>

      {/* Old messages */}
      <Messages person={person} />
      {/*Message input field */}
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
