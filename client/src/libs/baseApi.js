import axios from "axios";
import { store } from "./stores/store";
import { toast } from "react-toastify";
import { router } from "../app/router/routes";

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

// baseApi.interceptors.response.use(async (response) => {
//   try {
//     await sleep(1000);
//     return response;
//   } catch (e) {
//     console.log(e);
//   } finally {
//     store.uiStore.stopLoading();
//   }
// });
baseApi.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    store.uiStore.stopLoading();
    console.log("call success");
    return response;
  },
  async (error) => {
    await sleep(1000);
    store.uiStore.stopLoading();
    
    const { data, status } = error.response;
    switch (status) {
      case 400:
        if(data.errors){
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        }
        else{
          toast.error(data);
        }
        break;
      case 401:
        toast.error("Unauthorized");
        break;
      case 404:
        router.navigate("/not-found");
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;
    }
    return Promise.reject(error);
  }
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default baseApi;
