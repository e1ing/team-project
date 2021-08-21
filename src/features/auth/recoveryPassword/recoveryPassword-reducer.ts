import { Dispatch } from "redux";
import { recoveryPasswordApi } from "../../../main/dall/api/api-cards";


export const passwordReducer = (email: string, from: string, message: {}) => (dispatch: Dispatch) => {
    recoveryPasswordApi.passwordRecovery(email, from, message)
        .then(res => {

        })
        .catch(err => {

        })
}