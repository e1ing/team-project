import { ThunkAction } from "redux-thunk"
import { authAPI } from "../dall/api/api-cards"
import { AppActionsType, AppRootStateType } from "./store"



const initialState = {
    errorMessage: null,
    isRecovered: false

}

type InitialStateType = {
    errorMessage: string | null
    isRecovered: boolean
}

export const restorePasswordReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-ERROR-MESSAGE":
            return { ...state, errorMessage: action.errorMessage}
        case "DIMA/TEAM-PROJECT/SET-STATUS-SENDING-MESSAGE":
            return { ...state, isRecovered: action.isRecovered}
        default:
            return state
    }
}

// actions
export const setErrorMessageAC = (errorMessage: string) => (
    { type: "SET-ERROR-MESSAGE", errorMessage} as const)
export const setStatusSendingMessage = (isRecovered: boolean) => ({type: "DIMA/TEAM-PROJECT/SET-STATUS-SENDING-MESSAGE", isRecovered} as const)
// thunks
export const restorePasswordTC = (email: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
           await authAPI.restorePassword(email)
           dispatch(setStatusSendingMessage(true))
        } catch (e) {
            const error = e.response ? e.response.data.error : (`Restore password failed: ${e.message}.`)
            dispatch(setErrorMessageAC(error))
            alert(error)
        } finally {
            // some code...
        }
    }

// types
export type RestorePasswordReducerActionsType = ReturnType<typeof setErrorMessageAC> 
    | ReturnType<typeof setStatusSendingMessage>