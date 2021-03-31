import axios from 'axios';

const instance = axios.create({
  timeout: 20000,
});

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.error('request error > ', error.response);
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('response error > ', error.response);
    return Promise.reject(error);
  },
);

export default instance;
