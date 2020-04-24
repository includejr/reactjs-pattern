import axios from 'axios';

const api = axios.create({
    baseURL: "https://yourAPI.com.br",
});

export default api;
