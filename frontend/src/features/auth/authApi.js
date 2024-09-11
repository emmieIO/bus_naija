
import axios from 'axios';


const authAPI = axios.create({
  baseURL: 'http://localhost:4200/api', // Adjust this to your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // This is important for sending cookies
});



export default authAPI;