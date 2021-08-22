//type InitialStateType = typeof initialState
type ActionType = {}

type InitialStateType = {
    email: string
    _id: string
    name: string
    avatar?: string
    publicCardPacksCount: number

    created: number
    updated: number
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean

    error?: string
}
const initialState: InitialStateType  = {
    email: "",
    _id: "",
    name: "",
    avatar: "",
    publicCardPacksCount: 0,

    created: 0,
    updated: 0,
    isAdmin: false,
    verified: false,
    rememberMe: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action){
        /*case: ""
            return {...state}*/
        default:
            return {...state}
    }
}

