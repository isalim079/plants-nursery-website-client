import axios from "axios";

const baseURL = "https://nursery-website-server.vercel.app";

const axiosPublic = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosPublic;
