import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const $host: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/"
});

const $authHost: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/"
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
};
