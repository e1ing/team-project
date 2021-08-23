import {authAPI} from "../dal/api";
import {AppRootStateType} from "./store";
import {ThunkAction} from "redux-thunk";

type ActionType = ReturnType<typeof setIsLoggedInAC>

const initialState = {
    isLoggedIn: false
}

type InitialStateType = typeof initialState
export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)



export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkAction <void, AppRootStateType, unknown, ActionType>=> async (dispatch) => {
    try {
        const result = await authAPI.login(email, password, rememberMe)
        //dispatch(setIsLoggedInAC(value))
        console.log(result)
    } catch(e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        console.log(error)
    }
}


