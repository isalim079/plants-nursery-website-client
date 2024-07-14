import axios from "axios";

const baseURL = "http://localhost:5000";

const axiosPublic = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosPublic;
