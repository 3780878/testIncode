import axios from 'axios';
import config from './config';

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 1000,
  headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
});

export default instance;