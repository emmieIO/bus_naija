
import axios from 'axios';

// https://bus-naija.onrender.com/api/  http://localhost:4200/api/
const authAPI = axios.create({
  baseURL: 'http://localhost:4200/api/', // Adjust this to your API's base URL
});



export default authAPI;