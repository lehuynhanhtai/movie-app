import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
  },
});

// Add request interceptor
instance.interceptors.request.use(
  function (config) {
    // You can log the request here if needed for debugging
    console.log("Request sent:", config);
    return config;
  },
  function (error) {
    // Log the error for debugging
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

export default instance;
