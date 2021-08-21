import axios from 'axios';
import { get } from '../utils/sessionStorage.util'
;

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
});

export default instance;