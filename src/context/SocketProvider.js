import { createContext, useState, useEffect } from "react";
import useAuth from '../hooks/useAuth';
import io from "socket.io-client";

const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [inComingCall, setInComingCall] = useState(null);
    const { auth } = useAuth();

    useEffect(() => {
        if (auth?.username) {
            const newSocket = io("http://localhost:8080", {
            // const newSocket = io("https://ngcuong0812.id.vn", {
                query: {
                    username: auth.username,
                },
            });
            // console.log(newSocket);
            setSocket(newSocket);
        } else {
            console.error(`Not authenticated`);
        }
    }, [auth]);

    return (
        <SocketContext.Provider value={{ socket, setSocket, inComingCall, setInComingCall }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;