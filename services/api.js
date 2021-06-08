import axios from "axios"; 

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CLIENT_URL,
});  

export default api;