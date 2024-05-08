//GroupBox.js
import React, { useState } from "react";
import EditGroupModal from "./EditGroupModal";
import { IoSettingsOutline } from "react-icons/io5";
import { confirmAlert } from 'react-confirm-alert'; // Import


const GroupBox = ({ group , onDeleteGroup }) => {
    const [openSetting, setOpenSetting] = useState(false);
 
    const deleteConfirm = () => {
        confirmAlert({
            title: 'Delete group confirmation',
            message: 'Are you sure you want to delete this group ?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    group.statusDelete = true;
                    onDeleteGroup()}
              },
              {
                label: 'No',
              }
            ]
          });
    }

    return (
        <div className="relative">
            {/* Container */}
            <div className="mt-8 bg-white w-[310px] h-[100px] rounded-lg shadow-md ">
                <div className="pt-[20px] px-[20px] flex items-center justify-between">
                    <p className=" text-gray-400 text-[14px] font-bold " > {group.groupName} </p>
                    <button onClick={() => { setOpenSetting(true) }}  > <IoSettingsOutline color="blue" size={20} /> </button>
                </div>

                {openSetting && <EditGroupModal closeModal={setOpenSetting} status={"Edit"} />}

                <div className="h-[40px] pt-[20px] px-[20px] flex items-center justify-between">
                    <ul className="list-none" >
                        {
                            group.member.map((iconMember) => {
                                return <div className="inline-block" key={iconMember.idUser} >
                                    <li> <img className="w-6 h-6 rounded-full object-cover" src={iconMember.iconUser} alt="" /> </li>
                                </div>
                            })
                        }
                    </ul>

                    <button
                        onClick={deleteConfirm}
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