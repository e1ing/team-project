import { CardPacksDataType, EntityStatusType, packsApi, ResponseDataType } from "../../dal/api/api-cards"
import { AppThunk } from "../store";

export type PacksActionType =
    ReturnType<typeof setMaxCardsCoutnAC>
    | ReturnType<typeof setPacksAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof setEntityStatusPacksAC>
    | ReturnType<typeof setMinCardsCoutnAC>
    | ReturnType<typeof setIdAC>
    | ReturnType<typeof setPackNameAC>
    | ReturnType<typeof setMaxAC>
    | ReturnType<typeof setMinAC>
    | ReturnType<typeof setActivModalAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPackCardsIdAC>

export type InitialPacksStateType = ResponseDataType & {
    activeModal: boolean
    name: string
    _id: string
    packCardsId: string
};

const initialState = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    activeModal: false,
    packCardsId: '',
    name: '',
    _id: '',
};


export const packsReducer = (state: InitialPacksStateType = initialState, action: PacksActionType): InitialPacksStateType => {
    switch (action.type) {
        case "DIMA/TEAM-PROJECT/CARDS/SET-MAX-CARDS-NUMBER": 
            return {...state, maxCardsCount: action.maxCount}
        case "DIMA/TEAM-PROJECT/CARDS/SET-MIN-CARDS-NUMBER": 
            return {...state, minCardsCount: action.minCount}
        case "DIMA/TEAM-PROJECT/CARDS/SET-ID":
            return {...state, _id: action._id}
        case "DIMA/TEAM-PROJECT/CARDS/SET-MIN":
            return {...state, minCardsCount: action.min}
        case "DIMA/TEAM-PROJECT/CARDS/SET-MAX":
            return {...state, maxCardsCount: action.max}
        case "DIMA/TEAM-PROJECT/CARDS/SET-PACK-NAME":
            return {...state, name: action.name}
        case "DIMA/TEAM-PROJECT/CARDS/SET-PACKS":
            return {...state, cardPacks: action.paks}
        case "DIMA/TEAM-PROJECT/CARDS/SET-ENTITY-STATUS-PACKS":
            return {
                ...state,
                cardPacks: state.cardPacks.map(c => c._id === action.id
                    ? {...c, entityStatus: action.entityStatus} : c)
            }
        case "DIMA/TEAM-PROJECT/CARDS/SET-ACTIVE-MODAL":
            return {...state, activeModal: action.active}
        case 'DIMA/TEAM-PROJECT/CARDS/SET-CARENT-PAGE': {
            return {...state, page: action.value}
        }
        case 'DIMA/TEAM-PROJECT/CARDS/SET-CARDS-TOTAL-COUNT':
            return {...state, cardPacksTotalCount: action.count}
        case 'DIMA/TEAM-PROJECT/CARDS/SET-PACK-CARDS-ID': {
            return {...state, packCardsId: action.packId}
        }
        default:
            return state
    }
}

// AC
export const setMaxCardsCoutnAC = (maxCount: number) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-MAX-CARDS-NUMBER", maxCount} as const);
export const setMinCardsCoutnAC = (minCount: number) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-MIN-CARDS-NUMBER", minCount} as const);

export const setIdAC = (_id: string) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-ID", _id} as const);
export const setPackNameAC = (name: string) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-PACK-NAME", name} as const);

export const setMinAC = (min: number) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-MIN", min} as const);
export const setMaxAC = (max: number) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-MAX", max} as const);

export const setPacksAC = (paks: Array<CardPacksDataType>) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-PACKS", paks} as const);
export const setEntityStatusPacksAC = (entityStatus: EntityStatusType, id: string) =>
    ({type: "DIMA/TEAM-PROJECT/CARDS/SET-ENTITY-STATUS-PACKS", entityStatus, id} as const);

export const setActivModalAC = (active: boolean) =>
    ({type: "DIMA/TEAM-PROJECT/CARDS/SET-ACTIVE-MODAL", active} as const);
export const setCurrentPageAC = (value: number) => ({type: "DIMA/TEAM-PROJECT/CARDS/SET-CARENT-PAGE", value} as const);

export const setPacksTotalCountAC = (count: number) => ({type:  "DIMA/TEAM-PROJECT/CARDS/SET-CARDS-TOTAL-COUNT", count} as const);
export const setPackCardsIdAC = (packId: string) => ({type:"DIMA/TEAM-PROJECT/CARDS/SET-PACK-CARDS-ID", packId} as const);
// TC

export const setPacksTC = (): AppThunk => (dispatch, getState) => {
    // status

    const state = getState();
    const currentPage = state.packs.page;
    const packsOnPage = state.packs.pageCount;
    const packName = state.packs.name;
    const maxCardsCount = state.packs.maxCardsCount;
    const _id = state.packs._id
    const minCardsCount = state.packs.minCardsCount;

    packsApi.getPacks(packsOnPage, currentPage, packName, minCardsCount, maxCardsCount, _id)
        .then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setPacksTotalCountAC(res.data.cardPacksTotalCount))

            // status
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            alert(error)
        })
        .finally(
            // some code
        )
};


export const createPacksTC = (title: string): AppThunk => (dispatch) => {
    // satus
    packsApi.createPacks(title)
        .then(() => {
            dispatch(setPacksTC())
            // status
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            alert(error)
        })
};

export const deletePacksTC = (_id: string): AppThunk => (dispatch) => {
    // status
    dispatch(setEntityStatusPacksAC("loading", _id))
    packsApi.deletePacks(_id)
        .then(() => {
            dispatch(setPacksTC())
            // status
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setEntityStatusPacksAC("failed", _id))
            alert(error)
        })
};
export const updatePacksTC = (_id: string, name: string): AppThunk => (dispatch) => {
    // status
    
    packsApi.updatePacks(_id, name)
    
        .then(() => {
            dispatch(setPacksTC())
            // status
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            alert(error)
        })
};