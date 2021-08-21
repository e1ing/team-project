import axios from "axios";


type ResponseType = {
    info?: string
    error?: string
}

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});

// APi

export const recoveryPasswordApi = {
    passwordRecovery(email: string, from: string, message: {}){
        return instance.post<ResponseType>(`auth/forgot`, {
            email, from, message
        })
    },
    newPassword(password: string, resetPasswordToken: {}){
        return instance.post<ResponseType>(`auth/set-new-password`, {
            password, resetPasswordToken
        })
    },
};