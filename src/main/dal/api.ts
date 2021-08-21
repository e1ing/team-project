import axios from "axios";


const instance = axios.create({
    baseURL: `https://neko-back.herokuapp.com/2.0/`,  /*"http://localhost:7542/2.0/"*/
    withCredentials: true
})

//types
type RegistrationDataType ={
    email: string
    password: string
}
//response types
type RegistrationResponseType = {
    addedUser: {}
    error?: string
}

export const authAPI = {
    registration(regData: RegistrationDataType){
        return instance.post<RegistrationResponseType>(`auth/register`, {regData})
    },
}