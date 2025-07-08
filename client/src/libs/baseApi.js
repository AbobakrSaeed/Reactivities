import axios from "axios";

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor to simulate a delay in the response
baseApi.interceptors.response.use(
  async (response) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 1000);
    });
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default baseApi;
