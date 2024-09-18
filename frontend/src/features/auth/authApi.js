
import axios from 'axios';


// https://bus-naija.onrender.com/api/  http://localhost:4200/api/
const authAPI = axios.create({
  baseURL: 'https://bus-naija.onrender.com/api/', // Adjust this to your API's base URL
});

// Axios Interceptor for handling Authorization token
authAPI.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export const setupAuthAPIInterceptors = (store) => {
  authAPI.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        store.dispatch({ type: 'auth/logout' });
      }
      return Promise.reject(error);
    }
  );
};

export default authAPI;