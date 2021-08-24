import { AppActionsType, AppRootStateType } from "./store"
import { ThunkAction } from 'redux-thunk';
import { authAPI } from "../dall/api/api-cards";

type InitialStateType = {
    isSuccess: boolean
}

const initialState: InitialStateType = {
    isSuccess: false
}

export type UpdatePasswordReducerAT = ReturnType<typeof isSuccessAC>

export const updatePasswordReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch(action.type){
        case "DIMA/TEAM-PROJECT/IS-SUCCESS":
            return {...state, isSuccess: action.isSuccess}
        default:
            return state
    }
}

// action
export const isSuccessAC = (isSuccess: boolean) => ({type: "DIMA/TEAM-PROJECT/IS-SUCCESS", isSuccess} as const);

// thunck

export const updatePasswordTC = (newPassword: string, token: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> => 
    async (dispatch) => {
        try{
            const res = await authAPI.setNewPassword(newPassword, token)
            dispatch(isSuccessAC(true))
        } catch(e){
            const error = e.res ? e.res.data.error : (`Update password failed: ${e.message}.`)
            alert(error)
        } finally{
            // some code
        }

    }