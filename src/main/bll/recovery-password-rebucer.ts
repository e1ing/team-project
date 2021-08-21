import {Dispatch} from "redux";
import { recoveryPasswordApi } from "../dall/api/api-cards";
import { AppThunk } from "./store";


export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

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
    recoveryPasswordApi.passwordRecovery(email, from, message)
        .then(response => {

        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
        })
}


export const changeStatusAC = (satus: StatusType) => ({type: "CHANGE-STATUS", status} as const)

type ForgotPasswordData =  {
    email: string
    from: string
    message: string
}

//test

// export const forgotPass = (email: string, from: string, message: string): AppThunk => async dispatch => {
//     try {
//         await recoveryPasswordApi.passwordRecovery(email, from, message)
//     }
// }
  