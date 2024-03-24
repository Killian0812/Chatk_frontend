import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.js";
import NotFound from "./pages/home/NotFound.js";
import Setting from "./pages/home/Setting.js";
import Group from "./pages/home/Group.js";
import Profile from "./pages/home/Profile.js";
import Layout from "./components/Layout.js"
export default function App() {
  
  return (
      
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested routes */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/group" element={<Group />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
  );
}
