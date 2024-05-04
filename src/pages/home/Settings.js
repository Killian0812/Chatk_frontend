import React, { useState } from "react";
import GeneralInfoForm from "../../components/settingpanel/GeneralInfoForm";
import ChangePasswordForm from "../../components/settingpanel/ChangePasswordForm";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
const Settings = () => {
  const [showGeneralInfo, setShowGeneralInfo] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const toggleGeneralInfo = () => {
    setShowGeneralInfo(!showGeneralInfo);
    setShowChangePassword(false);
  };

  const toggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
    setShowGeneralInfo(false);
  };
  return (
    <div className="h-auto min-w-[350px] bg-[#F5F8FD]">
      {/* Header */}
      <h1 className="p-3 text-2xl font-medium flex items-center text-blue-500 mb-0">
        Settings
      </h1>
      <div className="divider mt-0"></div>
      <div className="flex flex-col gap-4">
        <div className="bg-white h-auto shadow mx-3">
          <div
            onClick={toggleGeneralInfo}
            className="p-5 rounded flex items-center justify-between  font-semibold text-md"
          >
            General Info
            {showGeneralInfo ? (
              <span className="text-blue-500 text-xl">
                <FaMinusCircle />
              </span>
            ) : (
              <span className="text-blue-500 text-xl">
                <FaPlusCircle />
              </span>
            )}
          </div>
          <div>{showGeneralInfo && <GeneralInfoForm />}</div>
        </div>
        <div className="bg-white h-auto shadow mx-3">
          <div
            onClick={toggleChangePassword}
            className="p-5 rounded bg-white flex items-center justify-between  font-semibold text-md"
          >
            Change Password
            {showChangePassword ? (
              <span className="text-blue-500 text-xl">
                <FaMinusCircle />
              </span>
            ) : (
              <span className="text-blue-500 text-xl">
                <FaPlusCircle />
              </span>
            )}
          </div>
          {showChangePassword && <ChangePasswordForm />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
