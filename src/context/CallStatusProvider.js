import { createContext, useState } from "react";

const CallStatusContext = createContext({});

export const CallStatusProvider = ({ children }) => {
    const [inCall, setInCall] = useState('');

    return (
        <CallStatusContext.Provider value={{ inCall, setInCall }}>
            {children}
        </CallStatusContext.Provider>
    )
}

export default CallStatusContext;