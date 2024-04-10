import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/api/refresh', {
            withCredentials: true
        });
        // console.log(response);
        setAuth({
            username: response.data.username,
            fullname: response.data.fullname,
            email: response.data.email,
            accessToken: response.data.accessToken  // replace old access token
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;