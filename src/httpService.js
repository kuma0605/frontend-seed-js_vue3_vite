import axios from 'axios'
const instance = axios.create({
  baseURL: '/'
})

/* // Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    httpCount+=1;
    return config;
  }, function (error) {
    // Do something with request error
    httpCount-=1;
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    httpCount-=1;
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    httpCount-=1;
    return Promise.reject(error);
  }); */

export default instance
