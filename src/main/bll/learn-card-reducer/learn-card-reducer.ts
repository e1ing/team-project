import { learnPackAPI} from "../../dal/api/api-cards";
import { setAppStatusAC } from "../app-reducer";
import { AppThunk } from "../store";

export type LearnCardReducerActionType =
    ReturnType<typeof getInfoCardAC>


type InstanceStateType = typeof initialState;

const initialState = {
};

export const learnCardReducer = (state: InstanceStateType = initialState, action: LearnCardReducerActionType): InstanceStateType => {
    switch (action.type) {
        case "DIMA/TEAM-PROJECT/GET-INFO-CARD":
            return {...state}
        default:
            return state
    }
};

// AC
export const getInfoCardAC = () => ({ type: "DIMA/TEAM-PROJECT/GET-INFO-CARD"} as const);


// thunk
export const learnCardTC = (cardId: string, grade: number): AppThunk =>
    (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        learnPackAPI.gradeCard(cardId, grade)
            .then(res => {
                dispatch(getInfoCardAC())
                dispatch(setAppStatusAC("succeeded"))
            })
            .catch(e => {
                const error = e.res ? e.res.data.error : (`Get cards failed: ${e.message}.`);
                alert(error);
                dispatch(setAppStatusAC("failed"));
            })
    };



