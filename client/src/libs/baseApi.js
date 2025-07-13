import axios from "axios";
import { store } from "./stores/store";

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//////-------------------request/response interceptor----------------------
// Add a request interceptor to simulate a delay in the response

baseApi.interceptors.request.use((config) => {
  store.uiStore.setLoading();

  return config;
});

baseApi.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  } finally {
    store.uiStore.stopLoading();
  }
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default baseApi;
