import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { JWT_KEY } from "../Constants"

/**
 * The Default URL for the Axios Request object
 */
const BASE_URL = "http://localhost:8080/api/v1"

/**
 * Creates a Axios Object with the given base URL
 */
export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL
})

/**
 * This Intercepter will add the JWT Token to the Authorisation in the
 * Header of the request. This Bearer Token will only be added, when the
 * URL will not have the "login" or "register" Route
 */
defaultAxiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const correctPath: boolean = config.url !== "login" && config.url !== "register"
        if (localStorage.getItem(JWT_KEY) !== "" && correctPath){
            config.headers.Authorization = `Bearer ${localStorage.getItem(JWT_KEY)}`
        }
        return config
    },
    (error: AxiosError) =>{
        return Promise.reject(error)
    }
    
)
