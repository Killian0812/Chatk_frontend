import { useContext } from "react";
import CallStatusContext from "../context/CallStatusProvider";

const useCallStatus = () => {
    return useContext(CallStatusContext);
}

export default useCallStatus;