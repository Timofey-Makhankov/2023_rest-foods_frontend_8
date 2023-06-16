import { AxiosInstance } from "axios"
import { defaultAxiosInstance } from "./Api";

const AuthorisationService = (api: AxiosInstance = defaultAxiosInstance) => {
    logInUser:async (email: string, password: string) => {
        const input = {
            email: email,
            password: password
        }
        const data = await api.post("login", input)
        return data["data"]["accessToken"] // TODO change the Json response
    }
}

export default AuthorisationService