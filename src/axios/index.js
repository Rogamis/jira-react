import axios from "axios";
import { store } from "../redux/store"

const axiosInstance = axios.create({
  baseURL: "https://jirapet-python.herokuapp.com/api",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = store.getState()?.token?.access_token; //если токен есть, он добавится в хэдер

    if (!!token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);


export default axiosInstance