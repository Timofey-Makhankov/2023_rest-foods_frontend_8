import { AxiosInstance } from "axios"
import { defaultAxiosInstance } from "./Api";
import { JWT_KEY } from "../Constants";

/**
 * The Service to be able to authenticate and authorize a user for logging in
 * @param api takes an axiosInstance or the defaultAxiosinstance if not given one
 */
const AuthorisationService = (api: AxiosInstance = defaultAxiosInstance) => ({
    /**
     * to be able to login a user
     * @param email the email of the user
     * @param password the password of the user
     * @returns the JWt Token as a String
     */
    logInUser:async (username: string, password: string) => {
        const input = {
            username: username,
            password: password
        }
        const data = await api.post("auth/authenticate", input)
        return data["data"][JWT_KEY]
    }
})

export default AuthorisationService