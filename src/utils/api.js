import axios from 'axios';

export const baseUrl = 'http://localhost:8090';
export const userUrl = 'http://localhost:8091';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.baseURL= config.apiUrl;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export const API = axios;
