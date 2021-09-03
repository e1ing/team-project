import {AppRootStateType} from "../store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {authAPI} from "../../dal/api/api-cards";


export type ActionLoginType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setInitializedAC> | ReturnType<typeof initializeProfileAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionLoginType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'SET-IS-INITIALIZED':
            return {...state, isInitialized: action.value}
        case "SET_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}
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
    isInitialized: false
};

export const initializeProfileAC = (profile: ProfileResponseType) =>
    ({type: 'SET_PROFILE', profile} as const)

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const setInitializedAC = (value: boolean) =>
    ({type: 'SET-IS-INITIALIZED', value} as const)

export const initializeAppTC = () => async (dispatch: ThunkDispatch<any, unknown, ActionLoginType>) => {
    try {
        const res = await authAPI.me()
        dispatch(setIsLoggedInAC(true))
        dispatch(initializeProfileAC(res.data))
        //debugger
    }
    catch(e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        console.log(error)
    }
    dispatch(setInitializedAC(true))

}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction <void, AppRootStateType, unknown, ActionLoginType>=> async (dispatch) => {
    try {
        const result = await authAPI.login(email, password, rememberMe)
        dispatch(setIsLoggedInAC(true))
        dispatch(initializeProfileAC(result.data))
        console.log(result)

    } catch(e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        console.log(error)
    }
}

export const logoutTC = (): ThunkAction<void, AppRootStateType, unknown, ActionLoginType> =>
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

