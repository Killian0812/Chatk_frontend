import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.js";
import NotFound from "./pages/home/NotFound.js";
import Settings from "./pages/home/Settings.js";
import Friends from "./pages/home/Friends.js";
import Profile from "./pages/home/Profile.js";
import Groups from "./pages/home/Groups.js";
import Layout from "./components/Layout.js";
export default function App() {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested routes */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}
