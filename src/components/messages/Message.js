import React from "react";

const Message = ({ person, message }) => {
  const fromWho = person.name === "You" ? "chat-end" : "chat-start";

  return (
    <div>
      <div className={`chat ${fromWho}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="avatar" src={person.icon} />
          </div>
        </div>
        <div className="chat-header ">
          <span className="font-medium text-black opacity-70">{person.name}</span>
          <time className="text-xs text-black opacity-60"> 12:45</time>
        </div>
        <div className="chat-bubble bg-blue-400 text-white">{message}</div>
        <div className="chat-footer opacity-90">
          {/* if sent */} Delivered
        </div>
      </div>
    </div>
  );
};

export default Message;
