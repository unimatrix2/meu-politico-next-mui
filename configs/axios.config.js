import axios from 'axios';
import { getAuthCookie } from '../utils/authCookieManager.util';

export const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	timeout: 3000,
	withCredentials: true,
  headers: {
    Authorization: getAuthCookie() || ''
  }
});

export const source = axios.CancelToken.source();

export const { isCancel } = axios;
