
import axios from 'axios';


const authAPI = axios.create({
  baseURL: 'https://bus-naija.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // This is important for sending cookies
});



export default authAPI;