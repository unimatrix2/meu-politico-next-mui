import axios from 'axios';
import cookies from './cookies.config';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	timeout: 3000,
	withCredentials: true,
  headers: {
    Authorization: cookies.get('token') || ''
  }
});

export default instance;
