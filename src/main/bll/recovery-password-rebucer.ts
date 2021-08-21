import {Dispatch} from "redux";
import { recoveryPasswordApi } from "../dall/api/api-cards";
import { AppThunk } from "./store";


const initialState = {
    massages: false,
    passIsRecovered: false,
}

export const recoveryPasswordReducer = (state: any = initialState, action: any): any => {
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

type ForgotPasswordData =  {
    email: string
    from: string
    message: string
}


// export const forgotPass = (email: string, from: string, message: string): AppThunk => async dispatch => {
//     try {
//         await recoveryPasswordApi.passwordRecovery(email, from, message)
//     }
// }
  