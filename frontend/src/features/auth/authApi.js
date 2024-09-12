
import axios from 'axios';


const authAPI = axios.create({
  baseURL: 'https://bus-naija.onrender.com/api', // Adjust this to your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:true
});



export default authAPI;