

type InitialStateType = typeof initialState
type ActionType = {}

const initialState = {}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action){
        /*case: ""
            return {...state}*/
        default:
            return {...state}
    }
}


//action creators
export const registerUserAC = () => ({} as const )


//thunks creators
