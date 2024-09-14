
import axios from 'axios';


const authAPI = axios.create({
  baseURL: 'https://bus-naija.onrender.com/', // Adjust this to your API's base URL
});



export default authAPI;