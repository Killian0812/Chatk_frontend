import { useCreateChatClient, Chat } from "stream-chat-react";

import NavBar from "./navbar/NavBar.js";
import { Outlet } from "react-router-dom";
import MessageContainer from "./messages/MessageContainer.js";
import useAuth from "../hooks/useAuth.js";
import Loading from "./Loading.js";

const Layout = () => {
  const { auth } = useAuth();
  const { username, streamToken } = auth;

  const apiKey = 'j6cg6c93cpmj';
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: streamToken,
    userData: {
      id: username,
      name: username,
      image: `https://getstream.io/random_png/?name=${username}`,
    },
  });

  if (!client)
    return <Loading />

  return (
    <div className="flex flex-row w-full h-full gap-0 bg-slate-50">
      <NavBar />
      {/* content */}
      <div className="w-full">
        <div className="flex bg-white min-h-screen w-full border border-lg">
          <Chat client={client}>
            <Outlet />
            <MessageContainer />
          </Chat>
        </div>
      </div>
    </div>
  );
};

export default Layout;