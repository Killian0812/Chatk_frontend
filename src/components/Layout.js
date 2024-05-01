import { useCreateChatClient, Chat } from "stream-chat-react";
import { FiPhoneCall, FiPhoneOff } from "react-icons/fi";

import NavBar from "./navbar/NavBar.js";
import { Outlet, useLocation } from "react-router-dom";
import MessageContainer from "./messages/MessageContainer.js";
import useAuth from "../hooks/useAuth.js";
import useSocketEvent from "../hooks/useSocketEvent.js";
import Loading from "./Loading.js";
import ChatPanel from "./chatpanel/ChatPanel.js";
import useSocket from "../hooks/useSocket.js";

const RingingCall = ({ inComingCall }) => {
  const { setInComingCall } = useSocket();

  const acceptCall = () => {
    window.open(`/call/${inComingCall.callId}`, '_blank', 'width=1280,height=720');
    setInComingCall(null);
  };

  const rejectCall = () => {
    setInComingCall(null);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-[50px] flex flex-col items-center">
        <img src={inComingCall.image} alt="Caller" className="rounded-full w-[120px] h-[120px] mb-4" />
        <div className="mb-4">
          <p className="font-bold text-black">
            {`${inComingCall.caller} ${inComingCall.isGroup ? ('started a call in ' + inComingCall.name) : 'is calling you'}`}
          </p>
        </div>
        <div className="flex w-[200px] justify-between">
          <button className="bg-green-500 text-white px-8 py-2 rounded-md mr-2 hover:bg-green-600" onClick={acceptCall}>
            <FiPhoneCall size={20} />
          </button>
          <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600" onClick={rejectCall}>
            <FiPhoneOff size={20} className="rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  useSocketEvent();
  const { inComingCall } = useSocket();

  const { auth } = useAuth();
  const { username, streamToken, image } = auth;

  const apiKey = 'j6cg6c93cpmj';
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: streamToken,
    userData: {
      id: username,
      name: username,
      image: image,
    },
  });

  const path = useLocation().pathname;

  if (!client)
    return <Loading />

  return (
    <div className="flex flex-row w-full h-full gap-0 bg-slate-50">
      <NavBar />
      {/* content */}
      <div className="w-full">
        <div className="flex bg-white min-h-screen w-full border border-lg">
          <Chat client={client}>
            <div className={path !== '/' ? 'hidden' : ''}>
              <ChatPanel />
            </div>
            <Outlet />
            <MessageContainer />
          </Chat>
        </div>
      </div>
      {inComingCall && <RingingCall inComingCall={inComingCall} />}
    </div>
  );
};

export default Layout;