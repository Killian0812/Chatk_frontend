import axios from 'axios';
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth, setLogoutConfirm } = useAuth();
    const logout = async () => {
        setAuth({});
        setLogoutConfirm(true);
        try {
            await axios('/api/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout