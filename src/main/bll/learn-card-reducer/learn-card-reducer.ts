import { learnPackAPI} from "../../dal/api/api-cards";
import { setAppStatusAC } from "../app-reducer";
import { AppThunk } from "../store";

export type LearnCardReducerActionType =
    ReturnType<typeof getInfoCardAC>


type InstanceStateType = typeof initialState;

const initialState = {
    grade: 0
};

export const learnCardReducer = (state: InstanceStateType = initialState, action: LearnCardReducerActionType): InstanceStateType => {
    switch (action.type) {
        case "DIMA/TEAM-PROJECT/GET-INFO-CARD":
            return { ...state, grade: action.grade}
        default:
            return state
    }
};

// AC
export const getInfoCardAC = (grade: number) => ({ type: "DIMA/TEAM-PROJECT/GET-INFO-CARD", grade} as const);


// thunk
export const learnCardTC = (cardId: string, grade: number): AppThunk =>
    (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        learnPackAPI.gradeCard(cardId, grade)
            .then(res => {
                dispatch(getInfoCardAC(grade))
                dispatch(setAppStatusAC("succeeded"))
            })
            .catch(e => {
                const error = e.res ? e.res.data.error : (`Get cards failed: ${e.message}.`);
                alert(error);
                dispatch(setAppStatusAC("failed"));
            })
    };



