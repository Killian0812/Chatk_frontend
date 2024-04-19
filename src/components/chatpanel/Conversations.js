import React from "react";
import Conversation from "./Conversation.js";

const Conversations = () => {
  const friend = {
    friendName: "Penaldo",
    latestMessage: "Hey, give me a penalty?",
    lastMessageTime: "10:37 AM",
    icon: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133",
    isOnline: true,
    isTyping: true,
  };

  return (
    <div className="py-0 flex flex-col overflow-hidden max-h-[570px]">
      <div className="overflow-auto">
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
        <Conversation friend={friend} />
      </div>
    </div>
  );
};

export default Conversations;

/*
import React from 'react';
import Conversation from './Conversation.js';

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col'>
      <Conversation
        friendName="Penaldo"
        latestMessage="Hey, give me a penalty?"
        lastMessageTime="10:37 AM"
        icon="https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
        isOnline = {false}
      />
    </div>
  );
}
export default Conversations;
*/
