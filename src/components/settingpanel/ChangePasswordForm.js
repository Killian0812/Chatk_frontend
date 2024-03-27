import axios from "axios";
import React, { useState } from "react";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if new password and confirm password match
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post("/api/change-password", {
        currentPassword,
        newPassword,
      });
      setMessage(response.data.message);
      setError("");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (error) {
      setMessage("");
      setError(error.response.data.message);
    }
  };

  return (
    <div className="h-auto w-auto  ">
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-full  border-gray-300 shadow-xl flex flex-col gap-2">
          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-8">
            <div className="ml-5 mr-5 relative">
              <label
                htmlFor="currentPassword"
                className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs"
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="mt-5 ml-5 mr-5 relative">
              <label
                htmlFor="newPassword"
                className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="mt-5 ml-5 mr-5 relative">
              <label
                htmlFor="confirmNewPassword"
                className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center mb-5 mt-8 mx-3">
              <button
                type="submit"
                className="inline-block w-full h-10 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 duration-300 "
              >
                Change Password
              </button>
              {error && (
                <div className="text-red-600 mt-0 text-center">{error}</div>
              )}
              {message && (
                <div className="text-green-600 mt-0 text-center">{message}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
