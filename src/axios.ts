import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  timeout: 10000, // Set a timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
    // Add other default headers if needed
  },
});

// Add request interceptor
instance.interceptors.request.use(
  function (config) {
    // You can log the request here if needed for debugging
    // console.log("Request sent:", config);
    return config;
  },
  function (error) {
    // Log the error for debugging
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

// Add response interceptor
instance.interceptors.response.use(
  function (response) {
    // You can log the response here if needed for debugging
    // console.log("Response received:", response);
    return response;
  },
  function (error) {
    // Log the error for debugging
    console.error("Response error:", error);
    return Promise.reject(error);
  },
);

export default instance;
