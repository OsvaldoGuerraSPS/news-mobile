import { API_KEY } from "@env";
import axios from "axios";

export const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        q: 'Alien: Isolation',
        apiKey: API_KEY,
        language: 'es',
    }
})