import {AppActionsType, AppRootStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {authAPI} from "../dal/api/api-cards";


type ActionType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setInitializedAC>

const initialState = {
    isLoggedIn: false,
    isInitialized: false
}

type InitialStateType = typeof initialState
export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'SET-IS-INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const setInitializedAC = (value: boolean) =>
    ({type: 'SET-IS-INITIALIZED', value} as const)

export const initializeAppTC = () => async (dispatch: ThunkDispatch<any, unknown, ActionType>) => {
    try {
        await authAPI.me()
        dispatch(setIsLoggedInAC(true))

    }
    catch(e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        console.log(error)
    }
    dispatch(setInitializedAC(true))

}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction <void, AppRootStateType, unknown, ActionType>=> async (dispatch) => {
    try {
        const result = await authAPI.login(email, password, rememberMe)
        dispatch(setIsLoggedInAC(true))
        console.log(result)

    } catch(e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        console.log(error)
    }
}

export const logoutTC = (): ThunkAction<void, AppRootStateType, unknown, ActionType> =>
    async (dispatch) => {
        try {
            const res = await authAPI.logout()
            dispatch(setIsLoggedInAC(false))
        } catch (e) {
            const error = e.response ? e.response.data.error : (`Logout failed: ${e.message}.`)
            console.log(error)
        } finally {
            // ...some code
        }
    }


