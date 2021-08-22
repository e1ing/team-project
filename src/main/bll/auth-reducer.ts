

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

export type ChangeStatusAT = ReturnType<typeof changeStatusAC>;
// export type SetIsInitializedAT = ReturnType<typeof setIsInitializedAC>

type InitialStateType = typeof initialState

type ActionType = ChangeStatusAT

const initialState = {
    status: "idle" as RequestStatusType,
    error: null as string | null,

}

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "DIMA/TEAM-PROJECT/CHANGE-STATUS":
            return { ...state, status: action.status }

        default:
            return { ...state }
    }
}

export const changeStatusAC = (status: RequestStatusType) => ({ type: "DIMA/TEAM-PROJECT/CHANGE-STATUS", status } as const);

// export const setIsInitializedAC = (isInitialized: boolean) => ({ type: "DIMA/TEAM-PROJECT/SET-IN-INITIALIZED", isInitialized } as const);