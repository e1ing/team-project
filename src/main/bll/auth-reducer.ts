

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type ChangeStatusAT = ReturnType<typeof changeStatusAC>;

type InitialStateType = typeof initialState

type ActionType = ChangeStatusAT

const initialState = {
    status: 'idle',
}

export const authReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type){
        case "DIMA/TEAM-PROJECT/CHANGE-STATUS":
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export const changeStatusAC = (status: StatusType) => ({type: "DIMA/TEAM-PROJECT/CHANGE-STATUS", status} as const)