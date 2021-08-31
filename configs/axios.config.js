import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 3000,
	withCredentials: true,
});

/* instance.interceptors.request.use(function (response) {
  console.log(response.headers.get('Set-Cookie'));
  return response;
}) */

export default instance;