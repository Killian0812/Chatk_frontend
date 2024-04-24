//EditGroupModal.js
import React, { useEffect, useState } from "react";
import { FaImages } from "react-icons/fa";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function EditGroupModal({ closeModal, status }) {
    const axiosPrivate = useAxiosPrivate();
    const [groupName, setGroupName] = useState('');
    const [userAdd, setUserAdd] = useState('');
    const [groupAvatar, setGroupAvatar] = useState();
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const style = { color: "rgb(59 130 246 / var(--tw-bg-opacity))" }
    const hide = { display: "none" }

    function removeUser(id) {
        const newList = list.filter((user) => user._id !== id);
        setList(newList);
    }

    async function handleAdd() {
        for (var i = 0; i < list.length; i++) {
            if (list[i].username === userAdd) {
                setError(false);
                setMessage("User is selected")
                return;
            }
        }

        try {
            const userFound = (await axiosPrivate.get(`/api/group/findUser?keyword=${userAdd}`)).data;
            if (userFound) {
                // console.log(userFound);
                setList(prev => [...prev, userFound]);
                setUserAdd('');
                setMessage("")
                setError(false);
            }
            else {
                setError(true)
                setMessage("User not found")
            }
        } catch (error) {
            setError(true)
            setMessage("Internal Server Error")
        }
    }

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setGroupAvatar(file)
    }

    const handleCreateGroup = async () => {
        console.log("Sending");
        try {
            const formData = new FormData();
            formData.append('image', groupAvatar);
            formData.append('groupName', groupName);
            formData.append('members', JSON.stringify(list));

            const response = await axiosPrivate.post('/api/group/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Group created:', response.data);
            closeModal(false);
        } catch (error) {
            console.error('Error creating group:', error);
            setError(true);
            setMessage("Failed");
        }
    }

    useEffect(() => {
        return () => {
            groupAvatar && URL.revokeObjectURL(groupAvatar.preview)
        }
    }, [groupAvatar])

    return (
        // Background
        <div id="backmodal" className="w-screen h-screen bg-[rgba(39,38,38,0.5)] flex justify-center items-center fixed top-0 right-0 z-20 ">
            {/* Container */}
            <div className={`w-[440px] pb-5 bg-white rounded-3xl flex-col z-20`}>
                {/* Header */}
                <div className="h-[60px] bg-blue-500 flex items-center justify-between rounded-t-3xl ">
                    <h3 className="text-white font-bold text-[18px] pl-4 ">{status} Group</h3>
                    <button
                        className="text-gray-300 font-bold text-base pr-4"
                        onClick={() => closeModal(false)}>
                        X
                    </button>
                </div>

                {/* Input Image */}
                <div className="h-[90px] m-4 bg-gray-100 flex items-center justify-center ">
                    <FaImages size={64} color="" style={groupAvatar ? hide : style} />
                    {/* Preview Avatar */}
                    {groupAvatar && (
                        <img src={groupAvatar.preview} alt="" className="w-16 h-16 rounded-full object-cover" />
                    )}
                    <div className="pl-5">
                        <label
                            htmlFor="inputAvatar"
                            className="cursor-pointer rounded border mr-[40px] px-[12px] py-[6px] bg-white text-black hover:border-gray-500">
                            Group Image
                        </label>
                        <input
                            className="hidden"
                            name="file"
                            type="file"
                            id="inputAvatar"
                            onChange={handlePreviewAvatar}
                        ></input>
                    </div>

                </div>

                {/* Input Group Name */}
                <div className="relative mx-4 ">
                    <label htmlFor="groupname" className="absolute px-1 font-semibold bg-white left-3 z-30 text-blue-600 text-xs">Group Name</label>
                    <input
                        type="text"
                        id="groupname"
                        value={groupName}
                        className="outline-0 absolute top-2 z-20 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                        placeholder="Enter Group Name"
                        onChange={(e) => setGroupName(e.target.value)} />
                </div>

                {/* Add user */}
                <div className="relative mt-20 mx-4 ">
                    <label htmlFor="useradd" className="absolute px-1 font-semibold bg-white left-3 z-30 text-blue-600 text-xs">Add User</label>
                    <input
                        type="text"
                        id="useradd"
                        value={userAdd}
                        className="outline-0 absolute top-2 z-20 rounded-sm py-1.5 pl-3 w-[340px] bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                        placeholder="Enter Username"
                        onChange={(e) => setUserAdd(e.target.value)} />
                    <button
                        type="submit"
                        onClick={handleAdd}
                        className={` absolute right-0 w-16 h-10 mt-2 ${userAdd === '' ? 'bg-gray-500 hover:bg-gray-600 ' : '  bg-blue-500 hover:bg-blue-600'} duration-300 text-white font-semibold rounded-md  `}>
                        Add
                    </button>
                </div>

                {/* User list  */}
                <div className={` mt-36 mx-4 flex ${list.length === 0 ? 'justify-end ' : 'justify-between'} `}>
                    <div className="flex flex-wrap max-w-[65%] h-auto">
                        {
                            list.map((user) => {
                                return <div key={user._id} className="inline-block w-[60px] mr-[5px] relative">
                                    <div className="w-full flex justify-center">
                                        <img className="w-10 h-10 rounded-full object-cover" src={user.image} alt="" />
                                        <button onClick={() => removeUser(user._id)} className="top-0 left-10 rounded-full bg-red-600 font-bold text-[10px] text-white absolute w-3.5 h-3.5"> X </button>
                                    </div>
                                    <p className="font-medium text-black text-[14px] truncate max-w-[60px]">{user.username}</p>
                                </div>
                            })
                        }
                    </div>
                    {/* {error && ( */}
                    <p className={`font-medium w-[35%] ${error ? 'text-red-600' : 'text-blue-600'} bottom`}> {message} </p>
                    {/* )} */}
                </div>

                {/* Button submit */}
                <div>
                    <button
                        onClick={() => { handleCreateGroup() }}
                        className={` h-10 w-[408px] ml-4 ${(error === false) && (list.length === 0) ? 'mt-12' : 'mt-6'}  text-white font-semibold bg-blue-500 hover:bg-blue-600`}>
                        {status === "Edit" ? "Update" : "Create Group"}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditGroupModal