import { learnPackAPI } from "../dal/api/api-cards"
import {setAppStatusAC} from "./app-reducer"
import { AppActionsType, AppThunk } from "./store"

// types
export type LearnPackReducerActionsType = ReturnType<typeof templateAC>

const initialState: InitialStateType = {}

type InitialStateType = {}

export const learnPackReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "TEMPLATE_ACTION_TYPE":
            return {...state}
        default:
            return state
    }
}

// actions
export const templateAC = () => ({type:"TEMPLATE_ACTION_TYPE" } as const)


// thunks
export const gradeCardTC = (card_id: string, grade: number): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await learnPackAPI.gradeCard(card_id, grade)
            dispatch(setAppStatusAC("succeeded"))
        } catch (e) {
            const error = e.response ? e.response.data.error : (`Delete card failed: ${e.message}.`)
            console.log(error)
            dispatch(setAppStatusAC("failed"))
        } finally {
            // some code...
        }
    }

