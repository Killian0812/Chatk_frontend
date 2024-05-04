import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import PersistLogin from "./components/persistlogin/PersistLogin.js";
import Authenticate from "./components/authenticate/Authenticate.js";
import NotFound from "./pages/home/NotFound.js";
import Settings from "./pages/home/Settings.js";
import Friends from "./pages/home/Friends.js";
import Profile from "./pages/home/Profile.js";
import Groups from "./pages/home/Groups.js";
import Layout from "./components/Layout.js";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js";
import Call from "./components/call/Call.js";
export default function App() {
  function handleCallbackResponse(response) {
    const GoogleJWT = response.credential;
    console.log(jwtDecode(GoogleJWT));
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "118692739109-em2kp06md5s62ee8533ugpq3usq5e684.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<NotFound />} />

      {/* persist user login */}
      <Route element={<PersistLogin />}>
        {/* require authentication  */}
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            {/* Nested routes */}

            <Route
              path="/profile"
              element={
                <Profile
                  info={{
                    icon: "https://media.gettyimages.com/id/545945904/photo/topshot-portugals-forward-cristiano-ronaldo-reacts-as-portugal-beats-france-1-0-to-clinch-the.jpg?s=612x612&w=0&k=20&c=I3NgDyB0NLaqZbWchp08_jRq7Ozbyc426bZ1hWLk6vE=",
                    name: "Penaldu",
                    address: "Korea",
                  }}
                />
              }
            />

            <Route path="/friends" element={<Friends />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route path="/call/:callId" element={<Call />} />

        </Route>
      </Route>
    </Routes>
  );
}
