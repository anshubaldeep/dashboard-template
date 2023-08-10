import axios from "axios";
import { BASE_URL } from "./baseUrl";

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 10000,
  withCredentials: true,
});

instance.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      window.open(
        `${BASE_URL}/api/login?continue=${window.location.href}`,
        "_self"
      );
    }
    return Promise.reject(error);
  }
);

export default instance;
