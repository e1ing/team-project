import { ThunkAction } from "redux-thunk"
import { authAPI } from "../dall/api/api-cards"
import { AppActionsType, AppRootStateType } from "./store"



const initialState = {
    errorMessage: null
}

type InitialStateType = {
    errorMessage: string | null
}

export const restorePasswordReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-ERROR-MESSAGE":
            return { ...state, errorMessage: action.errorMessage }
        default:
            return state
    }
}

// actions
export const setErrorMessageAC = (errorMessage: string) => (
    { type: "SET-ERROR-MESSAGE", errorMessage } as const)

// thunks
export const restorePasswordTC = (email: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await authAPI.restorePassword(email)
            dispatch(setErrorMessageAC(`Recovery instructions was sent to email: ${email}`))
        } catch (e) {
            const error = e.response ? e.response.data.error : (`Restore password failed: ${e.message}.`)
            alert(error)
        } finally {
            // some code...
        }
    }

// types
export type RestorePasswordReducerActionsType = ReturnType<typeof setErrorMessageAC>