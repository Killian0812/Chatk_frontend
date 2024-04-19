import React from "react";
import NavBar from "./navbar/NavBar.js";
import { Outlet } from "react-router-dom";
import MessageContainer from "./messages/MessageContainer.js";

const LayOut = () => {
  const friend = {
    name: "Penaldo",
    latestMessage: "Hey, give me a penalty?",
    lastMessageTime: "10:37 AM",
    icon: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133",
    isOnline: true,
    isTyping: false,
  };
  return (
    <div className="flex flex-row h-full gap-0 bg-slate-50">
      <NavBar />
      {/* content */}
      <div className="w-full">
        <div className="flex bg-white min-h-screen w-full border border-lg">
          <Outlet /> {/* This renders the nested routes */}
          <MessageContainer person={friend} />
        </div>
      </div>
    </div>
  );
};
export default LayOut;
