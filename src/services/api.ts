import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.pharmadb.com.br/v1"
});