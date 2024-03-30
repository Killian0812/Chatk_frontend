import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChat, BsPerson, BsPeople, BsGear, BsPower } from "react-icons/bs";
import { LiaHandshakeSolid } from "react-icons/lia";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; // optional

const navItems = [
  { path: "/", title: "Chats", icon: BsChat },
  { path: "/profile", title: "Profile", icon: BsPerson },
  { path: "/friends", title: "Friends", icon: BsPeople },
  { path: "/groups", title: "Groups", icon: LiaHandshakeSolid },
  { path: "/settings", title: "Settings", icon: BsGear }
];

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="border flex flex-col gap-1 items-center bg-slate-50">
      <h1 className="text-2xl text-black font-medium p-3">
        <img src={`${process.env.PUBLIC_URL}/appicon.png`} className="w-20 h-20" alt="app icon"></img>
      </h1>
      <div className="divider my-0"></div>
      <ul className="flex flex-col gap-0 justify-between items-center w-full mt-9">
        {navItems.map((item, index) => (
          <Tippy content={item.title} placement="right">
            <li key={index} className={`rounded-[50%] w-[70px] h-[70px] text-gray-800 flex items-center justify-center ${isActive(item.path) ? 'bg-[#E5F0FF]' : 'hover:bg-[#F1F4F9]'}`}>
              <Link to={item.path} className="w-full flex justify-center py-4">
                <span className="p-2 flex flex-row">
                  <item.icon className="w-6 h-6" />
                </span>
              </Link>
            </li>
          </Tippy>
        ))}
      </ul>

      {/* Logout */}
      <li className='mt-[90px] rounded-[50%] w-[70px] h-[70px] text-gray-800 flex items-center justify-center hover:bg-[#F1F4F9]'>
        <Link to={"/logout"} className="w-full flex justify-center">
          <span className="p-2 flex flex-row">
            <BsPower className="w-6 h-6 fill-gray-700" />
          </span>
        </Link>
      </li>
    </div>
  );
};

export default NavBar;
