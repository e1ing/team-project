import {Dispatch} from "redux";
import { recoveryPasswordApi } from "../dall/api/api-cards";
import { changeStatusAC } from "./auth-reducer";
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
    recoveryPasswordApi.passwordRecovery(email, from, message)
        .then(res => {
            dispatch(changeStatusAC("succeeded"))
        })
        .catch((e) => {
            const error = e.res
                ? e.res.data.error
                : (e.message + ', more details in the console');

                dispatch(changeStatusAC("failed"))
        })
}




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
  