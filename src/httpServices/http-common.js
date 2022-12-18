import axios from "axios";

const token = process.env.REACT_APP_JWT_TOKEN;
const baseUrl = process.env.REACT_APP_API_BASE;

const httpService = axios.create({
    baseURL: baseUrl,
    headers:{
        "Content-type"  : "application/json",
        "Authorization" : `Bearer ${token}`,
    }
});

export default httpService;