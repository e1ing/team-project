import { Dispatch } from "redux"
import {authAPI} from "../dal/api";
import {setAppErrorAC, setAppStatusAC} from "./app-reducer";

type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof registerUserAC>
export type RegistrationDataType ={
    email: string
    password: string
}

const initialState = {
    isRegistered: false
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type){
        case "registration/REGISTER":
            return {...state, isRegistered: action.isRegistered}
        default:
            return {...state}
    }
}


//action creators
export const registerUserAC = (isRegistered: boolean) => ({type:"registration/REGISTER", isRegistered: isRegistered} as const )


//thunks creators
export const registerUserTC = (regData: RegistrationDataType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    authAPI.registration(regData)
        .then(res => {
            console.log('Res', res)
        dispatch(registerUserAC(true))
            dispatch(setAppStatusAC("succeeded"))
    })
        .catch((e) => {
           const error = e.response
            ?e.response.data.error
               : (e.message+ ', more details in the console')
            dispatch(setAppErrorAC(error))
            dispatch(setAppStatusAC("failed"))
        })
}