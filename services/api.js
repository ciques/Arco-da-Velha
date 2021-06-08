import axios from "axios"; 

const api = axios.create({
    baseURL: process.env.CLIENT_URL,
});  

export default api;

    



  
