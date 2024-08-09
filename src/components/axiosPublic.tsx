import axios from "axios";

// baseUrl = http://localhost:5000
// baseUrl = https://nursery-website-server.vercel.app

const baseURL = "https://nursery-website-server.vercel.app";

const axiosPublic = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosPublic;
