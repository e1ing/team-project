import { AppActionsType, AppRootStateType } from "../store"
import { ThunkAction } from 'redux-thunk';
import { authAPI } from "../../dal/api/api-cards";
import { setAppStatusAC } from "../app-reducer";

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
            dispatch(setAppStatusAC("loading"));
            await authAPI.setNewPassword(newPassword, token)
            dispatch(isSuccessAC(true))
            dispatch(setAppStatusAC("succeeded"))
        } catch(e){
            const error = e.res ? e.res.data.error : (`Update password failed: ${e.message}.`)
            alert(error)
        } finally{
            // some code
        }

    }