import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { setAccessToken } from "../redux/actions/tokensAction";
import { store } from "../redux/store"

const axiosInstance = axios.create({
  baseURL: "https://jirapet-python.herokuapp.com/api",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = store.getState()?.token?.access_token; 

    if (!!token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
     return config;
  },
  (error) => {
    Promise.reject(error);
  }
)

axiosInstance.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const token = store.getState().token.refresh_token;
            if (token) {
                let decoded = jwt_decode(token);
                const expirationDate = dayjs(decoded.exp);
                const currentDate = dayjs();
                console.log(expirationDate, currentDate)
                if (currentDate.diff(expirationDate) > 0) {
                    const result = await axios.post('https://jirapet-python.herokuapp.com/api/refresh', {
                        refresh: token,
                    })
                    store.dispatch(setAccessToken(result.data.access))
                    return axiosInstance(originalRequest)
                }
            }
        }
        return Promise.reject(error)
      })

export default axiosInstance;