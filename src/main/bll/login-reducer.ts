import { ThunkAction } from "redux-thunk"
import { authAPI } from "../dal/api/api-cards"
import { AppActionsType, AppRootStateType } from "./store"

enum LOGIN_ACTIONS_TYPES {
    SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
}

type InitialStateType = {
    isLoggedIn: boolean
}

const initialState: InitialStateType = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case LOGIN_ACTIONS_TYPES.SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (isLoggedIn: boolean) => {
    return { type: LOGIN_ACTIONS_TYPES.SET_IS_LOGGED_IN, isLoggedIn } as const
}

// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await authAPI.login(email, password, rememberMe)
        } catch (e) {
            const error = e.response ? e.response.data.error : (`Login failed: ${e.message}.`)
            console.log(error)
        } finally {
            // ...some code
        }
    }

export const logoutTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await authAPI.logout()
        } catch (e) {
            const error = e.response ? e.response.data.error : (`Logout failed: ${e.message}.`)
            console.log(error)
        } finally {
            // ...some code
        }
    }

// types
export type LoginReducerActionsType = ReturnType<typeof setIsLoggedInAC>
