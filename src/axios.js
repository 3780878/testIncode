import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
  baseURL: config.baseURL,
  headers: !localStorage.getItem('token')
  ? {}
  : {'Authorization': `Bearer ${localStorage.getItem('token')}`},
});

export default axiosInstance;