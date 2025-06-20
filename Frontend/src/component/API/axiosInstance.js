// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
//   withCredentials: true, // for cookies/session if needed
});

export default axiosInstance;
