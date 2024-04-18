import React from "react";

const Conversation = ({ friend }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 hover:bg-sky-100 hover:cursor-pointer overflow-hidden">
      <div className="mr-4">
        <div className="relative">
          <img
            className="w-10 h-10 rounded-full object-cover "
            src={friend.icon}
            alt=""
          />
          <span
            className={`top-0 left-7 absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${
              friend.isOnline ? "bg-green-400" : "bg-gray-400"
            }`}
          ></span>
        </div>
      </div>
      <div className="flex-1">
        <div className="font-medium text-black opacity-90">{friend.friendName}</div>
        <div className="text-xs text-gray-500">{friend.latestMessage}</div>
      </div>
      <div className="text-xs text-gray-500">{friend.lastMessageTime}</div>
    </div>
  );
};

export default Conversation;

/*

import React from 'react';

const Conversation = ({ friendName, latestMessage, lastMessageTime, icon, isOnline }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 hover:bg-sky-50">
      <div className="mr-4">
        <div className='relative'>
          <img className="w-10 h-10 rounded-full object-cover " src={icon} alt=""/>
          <span className={`top-0 left-7 absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`}></span>
        </div>
      </div>
      <div className="flex-1">
        <div className="font-medium">{friendName}</div>
        <div className="text-xs text-gray-500">{latestMessage}</div>
      </div>
      <div className="text-xs text-gray-500">{lastMessageTime}</div>
    </div>
  );
}

export default Conversation;

*/
