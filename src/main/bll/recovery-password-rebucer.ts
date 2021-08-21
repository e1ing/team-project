import {Dispatch} from "redux";
import { recoveryPasswordApi } from "../dall/api/api-cards";


const initialState = {
    massages: false,
    passIsRecovered: false,
}

export const recoveryPasswordReducer = (state: any, action: any): any => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export const passwordRecovery = (email: string, from: string, message: {}) => (dispatch: Dispatch) => {
    debugger
    recoveryPasswordApi.passwordRecovery(email, from, message)
        .then(response => {
            console.log(email)
            
        })
        .catch((e) => {

        })
    
}
  