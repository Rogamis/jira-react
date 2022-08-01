import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jirapet-python.herokuapp.com",
  timeout: 10000,
});

export default axiosInstance
