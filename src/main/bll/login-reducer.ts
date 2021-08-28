import { ThunkAction } from "redux-thunk"
import { authAPI } from "../dal/api/api-cards"
import { AppActionsType, AppRootStateType, AppThunk } from "./store"

enum LOGIN_ACTIONS_TYPES {
    SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
};

export type ProfileResponseType = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
};

type InitialStateType = typeof initialState;

const initialState = {
    profile: {
        avatar: '',
        created: '',
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        tokenDeathTime: 0,
        updated: '',
        verified: false,
        __v: 0,
        _id: ''
    } || null,
    isLoggedIn: false,
};

export const loginReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case LOGIN_ACTIONS_TYPES.SET_IS_LOGGED_IN:
            return {
                ...state,
                profile: action.profile,
                isLoggedIn: action.isLoggedIn,
            }
        default:
            return state
    }
};

// actions
export const setIsLoggedInAC = (profile: ProfileResponseType, isLoggedIn: boolean) => {
    return { type: LOGIN_ACTIONS_TYPES.SET_IS_LOGGED_IN, profile, isLoggedIn } as const
}

// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            dispatch(setIsLoggedInAC(res.data, true))
        })
        .catch((err) => {
            alert("Error")
        })
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
