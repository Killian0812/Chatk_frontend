//CreateBox.js
import { useState } from "react";
import EditGroupModal from "./EditGroupModal";

function CreateBox() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="bg-white w-[324px] h-[100px] flex justify-center items-center rounded-lg shadow-md">
                <button onClick={() => { setOpenModal(true) }}
                    className="text-white bg-blue-500 w-[260px] h-[40px] font-bold ">
                    Create Group
                </button>
            </div>
            {openModal && <EditGroupModal closeModal={setOpenModal} status={"Create"} />}

        </div>
    )
}

export default CreateBox;