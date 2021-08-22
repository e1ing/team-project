import axios from "axios";
import {RegistrationDataType} from "../bll/registration-reducer";


const instance = axios.create({
    baseURL: `http://localhost:7542/2.0/`, /*`https://neko-back.herokuapp.com/2.0/`*/
    withCredentials: true
})

//types

//response types
type RegistrationResponseType = {
    addedUser: {}
    error?: string
}

export const authAPI = {
    registration(regData: RegistrationDataType){
        return instance.post<RegistrationResponseType>(`auth/register`, regData)
    },
}