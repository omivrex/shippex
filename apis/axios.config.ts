import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { message } from "../utilities/message.utility";

export const client = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const applyInterceptors = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.response.use(
        async (response: AxiosResponse<any>) => {
            return response.data;
        },
        (error: AxiosError<any>) => {
            if (error.response?.status === 401) {
                return Promise.reject({ message: "Unauthorized" });
            } else if (error.response && error.response.status >= 500) {
                return Promise.reject({ message: "Something went wrong" });
            } else {
                __DEV__ && console.warn("Error in response interceptor:", error.response?.config.url, error.response?.status, error.response?.data, error);
                if (error.response?.status) {
                    message(error.response?.data?.error?.message || "Something went wrong", "error");
                    return Promise.reject({ message: error.response?.data?.error?.message });
                } else {
                    message("Network Error");
                    return Promise.reject({ message: "Network Error" });
                }
            }
        }
    );
};

applyInterceptors(client);
