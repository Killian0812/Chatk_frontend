//GroupBox.js
import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import CreateModal from "./CreateModal";


const GroupBox = ({ group }) => {
    const [openSetting, setOpenSetting] = useState(false);

    function deleteGroup() {

    }

    return (
        <div className="relative">
            {/* Container */}
            <div className="mt-8 bg-white w-[310px] h-[100px] rounded-lg shadow-md ">
                <div className="pt-[20px] px-[20px] flex items-center justify-between">
                    <p className=" text-gray-400 text-[14px] font-bold " > {group.groupName} </p>
                    <button onClick={() => { setOpenSetting(true) }}  > <IoSettingsOutline color="blue" size={20} /> </button>
                </div>

                {openSetting && <CreateModal closeModal={setOpenSetting} status={"Edit"} />}

                <div className="h-[40px] pt-[20px] px-[20px] flex items-center justify-between">
                    <ul className="list-none" >
                        {
                            group.member.map((iconMember) => {
                                return <div className="inline-block">
                                    <li key={iconMember.idUser}> <img className="w-6 h-6 rounded-full object-cover" src={iconMember.iconUser} alt="" /> </li>
                                </div>
                            })
                        }
                    </ul>

                    <button
                        onClick={() => deleteGroup}
                        className="items-center justify-center flex w-5 h-5 rounded-full font-bold text-[16px] outline-red-300 outline text-red-300 hover:outline-red-400 hover:text-red-400"
                    >X
                    </button>
                </div>
            </div>
            {/* Group Image */}
            <img className="w-10 h-10 rounded-full object-cover absolute top-[-20px] left-[20px] "
                src={group.icon}
                alt="" />
        </div>
    )
}

export default GroupBox