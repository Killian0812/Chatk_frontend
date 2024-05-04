import React, { useState } from "react";
import axios from "axios";

const GeneralInfoForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview]=useState(null);
  const oldAvatar =
    "https://sportstime247.com/wp-content/uploads/2019/09/cristiano-ronaldo-cry.jpg";
  const handleSubmit = async (e) => {
    e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append("avatar", avatar); // Append the uploaded avatar to form data
  //     formData.append("fullName", fullName);
  //     formData.append("email", email);
  //     formData.append("contact", contact);

  //     const response = await axios.post("/api/update-general-info", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     setMessage(response.data.message);
  //     setError("");
  //     setFullName("");
  //     setEmail("");
  //     setContact("");
  //     setAvatar(null); // Reset avatar state after successful upload
  //   } catch (error) {
  //     setMessage("");
  //     setError(error.response.data.message);
  //   }
   };
  

  return (
    <div className="h-auto w-auto">
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-full border-gray-300 shadow-xl flex flex-col gap-2">
          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-8">
            {/* Avatar */}
            <div className="mx-5 relative flex items-center bg-slate-100 p-2 gap-2">
              {/* Uploaded data */}
              {avatar ? (
                <img
                  src={preview}
                  alt="Avatar"
                  className="rounded-full w-20 h-20 object-cover"
                />
              ) : (
                <img
                  src={oldAvatar}
                  alt="Avatar"
                  className="rounded-full w-20 h-20 object-cover"
                />
              )}
              
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={(e) => {
                  const tmp = URL.createObjectURL(e.target.files[0]);
                  setPreview(tmp);
                }}
              />
              
            </div>
            {/* Full Name */}
            <div className="ml-5 mr-5 relative">
              <label
                htmlFor="fullName"
                className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mt-5 ml-5 mr-5 relative">
              <label
                htmlFor="email"
                className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-5 ml-5 mr-5 relative">
              <label
                htmlFor="contact"
                className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center mb-5 mt-8 mx-3">
              <button
                type="submit"
                className="inline-block w-full h-10 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 duration-300"
              >
                Update Info
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

export default GeneralInfoForm;
