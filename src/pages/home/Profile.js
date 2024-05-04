import React, { useState } from "react";
import OnlineStatus from "../../components/profilepanel/OnlineStatus";

const Profile = ({ info }) => {
  return (
    <div className="h-auto min-w-[350px] bg-[#F5F8FD]">
      {/* Header */}
      <h1 className="p-3 text-2xl font-medium flex items-center text-blue-500 mb-0">
        Profile
      </h1>
      <div className="divider mt-0"></div>
      {/* Infos section */}
      <div className="flex flex-col items-center gap-2 mt-8">
        <div className="avatar flex items-center justify-center">
          <div className="w-[7rem] rounded-full">
            <img src={info.icon} alt={info.name} />
          </div>
        </div>
        <OnlineStatus info={info} />
        <div className="mt-2 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-black">{info.name}</h2>
          <h2 className="text-md text-gray-500">{info.address}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
