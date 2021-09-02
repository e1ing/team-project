export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type InitialStateType = typeof initialState
export type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
export type SetAppErrorAT = ReturnType<typeof setAppErrorAC>
export type SetIsInitializedAT = ReturnType<typeof setIsInitializedAC>
export type ActionType = SetAppStatusAT | SetAppErrorAT | SetIsInitializedAT

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'app/SET-STATUS':
            return {...state, status: action.status}
        case "app/SET-ERROR":
            return {...state, error: action.error}
        case "app/SET-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'app/SET-STATUS', status} as const);
export const setAppErrorAC = (error: string | null) => ({type: 'app/SET-ERROR', error} as const);


export const setIsInitializedAC = (isInitialized: boolean) => ({type: "app/SET-INITIALIZED", isInitialized} as const);


export const isInitializedTC = (): AppThunk =>
    (dispatch) => {
        authAPI.me()
            .then((res) => {
                dispatch(setIsInitializedAC(true))
                dispatch(setIsLoggedInAC(res.data, true))
            })

    }