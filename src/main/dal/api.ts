import axios from "axios";
import {RegistrationDataType} from "../bll/registration-reducer";

type InitialStateType = {
    email: string
    _id: string
    name: string
    avatar?: string
    publicCardPacksCount: number

    created: number
    updated: number
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean

    error?: string
}
const initialState: InitialStateType  = {
    email: "",
    _id: "",
    name: "",
    avatar: "",
    publicCardPacksCount: 0,

    created: 0,
    updated: 0,
    isAdmin: false,
    verified: false,
    rememberMe: false
}

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
});


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    registration(regData: RegistrationDataType){
        return instance.post<RegistrationResponseType>(`auth/register`, regData)
    },
}

