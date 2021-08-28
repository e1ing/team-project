import axios from "axios";
import { ProfileResponseType } from "../../bll/login-reducer";
import { RegistrationDataType } from "../../bll/registration-reducer";

export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar: string | undefined
    publicCardPacksCount: number

    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean

    error?: string
};

type RestorePasswordResponseType = {
    answer: boolean
    html: boolean
    info: string
    success: boolean
};

export type SignUpResponseType = {
    addedUser: ProfileResponseType //{}
    error?: string
};

export type LoginUserResponseType = ProfileResponseType
export type LogoutResponseType = {
    info: string
};

export type UpdateUserDataResponseType = {
    token: string
    tokenDeathTime: number
    updatedUser: ProfileResponseType
};

// http://localhost:7542/2.0/
// https://neko-back.herokuapp.com/2.0/

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});

// APi

export const authAPI = {
    me() {
        return instance.post<ProfileResponseType>(`auth/me`, {})
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<LoginUserResponseType>(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/me`, {})
    },
    restorePassword(email: string) {
        return instance.post<RestorePasswordResponseType>(`auth/forgot`, {
            email: email,
            from: `test-front-admin <ai73a@yandex.by>`,
            message: `<div style="background-color: lime; padding: 15px">
                            Click <a href='http://localhost:3000//$token$'>here</a> to restore your password
                      </div>`
        })
    },
    signUp(regData: RegistrationDataType) {
        return instance.post<SignUpResponseType>(`auth/register`, regData)
    },
    setNewPassword(newPassword: string, resetPasswordToken: string) {
        return instance.post(`/auth/set-new-password`, {
            password: newPassword,
            resetPasswordToken
        })
    },
    updateUserData(name: string, avatar: string | undefined | null) {
        return instance.put<UpdateUserDataResponseType>(`auth/me`, { name, avatar })
    },
}