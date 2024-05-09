import axios from 'axios';

export default axios.create({
    baseURL: 'https://ngcuong0812.id.vn',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});