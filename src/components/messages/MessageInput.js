import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoAttachOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("Message sent:", message);
    //clear message after sent
    setMessage("");
  };

  return (
    <div className="p-3 flex items-center border-t border-gray-200 f-full ">
      {/* Input field  */}
      <input
        type="text"
        placeholder="Type message here..."
        className="flex-1 p-2 border-2 text-black bg-white border-gray-300 rounded-md outline-none focus:border-blue-500 mr-2"
        value={message}
        onChange={handleMessageChange}
      />

      <div className="flex gap-2">
        {/* Button to attach files */}
        <button className="p-2 flex items-center justify-center rounded-full border border-gray-300 hover:shadow-md duration-300">
          <IoAttachOutline className="w-5 h-5 text-gray-500" />
        </button>
        {/* Button to open emoji picker */}
        <button className="p-2 flex items-center justify-center rounded-full border border-gray-300 hover:shadow-md duration-300">
          <BsEmojiSmile className="w-5 h-5 text-gray-500" />
        </button>
        {/* Button to send message */}
        <button
          className="p-2 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-700 duration-300"
          onClick={handleSendMessage}
        >
          <RiSendPlaneFill className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
