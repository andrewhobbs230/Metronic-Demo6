import axios from "axios";

export default axios.create({
    baseURL: 'https://api.bullittschools.org/v1/tickets',
    withCredentials: false,
})