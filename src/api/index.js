import axios from 'axios';

const backendUrl = process.env.BACKEND_URI ?? 'http://localhost:8080';
const axiosInstance = axios.create({
  baseURL: backendUrl,
});

export default axiosInstance;
