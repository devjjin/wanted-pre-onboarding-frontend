import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    const requestConfig = { ...config };
    requestConfig.headers = {
      ...requestConfig.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return requestConfig;
  }

  return config;
});

export default instance;
