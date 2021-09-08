import { CardType, GetCardsResponseType, SortPacksAndCardsOrderType } from "../../dal/api/api-cards";
import { setAppStatusAC } from "../app-reducer";
import { AppThunk } from "../store";
import { cardsApi } from './../../dal/api/api-cards';

export type CardsReducerActionType =
    ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsCountAC>
    | ReturnType<typeof setCardsNewCurrentPageAC>
    | ReturnType<typeof setCardsNewCardsPageCountAC>
    | ReturnType<typeof setSearchCardsValueAC>
    | ReturnType<typeof getCardQuestionAC>

type InstanceStateType = typeof initialState;

const initialState = {
    cards: [] as CardType[],
    cardsTotalCount: 0,
    pageCount: 10,
    page: 1,
    maxGrade: 0,
    minGrade: 0,
    question: "",
    answer: "",

    packUserId: "",
    token: "",
    tokenDeathTime: 0,
    searchCardsValue: "",

};

export const cardsReducer = (state: InstanceStateType = initialState, action: CardsReducerActionType): InstanceStateType => {
    switch (action.type) {
        case "DIMA/TEAM-PROJECT/SET-CARDS":
            return { ...state, ...action.cardsState }
        case "DIMA/TEAM-PROJECT/SET-CARDS-COUNT":
            return { ...state, cardsTotalCount: action.cardsTotalCount }
        case "DIMA/TEAM-PROJECT/SET-CARDS-NEW-CURRENT-PAGE":
            return { ...state, page: action.newCurrentPage }
        case "DIMA/TEAM-PROJECT/SET-CARDS-NEW-CARDS-PAGE-COUNT":
            return { ...state, pageCount: action.newPageCount }
        case "DIMA/TEAM-PROJECT/SET-SEARCH-CARDS-VALUE":
            return { ...state, searchCardsValue: action.searchCardsValue }
        case "NIGAR/TEAM-PROJECT/GET-CARD-QUESTION":
            return {...state, question: action.question}
        default:
            return state
    }
};

// AC
export const setCardsAC = (cardsState: GetCardsResponseType) => ({ type: "DIMA/TEAM-PROJECT/SET-CARDS", cardsState } as const);
export const setCardsCountAC = (cardsTotalCount: number) => ({ type: "DIMA/TEAM-PROJECT/SET-CARDS-COUNT", cardsTotalCount } as const);
export const setCardsNewCurrentPageAC = (newCurrentPage: number) => ({ type: "DIMA/TEAM-PROJECT/SET-CARDS-NEW-CURRENT-PAGE", newCurrentPage } as const);
export const setCardsNewCardsPageCountAC = (newPageCount: number) => ({ type: "DIMA/TEAM-PROJECT/SET-CARDS-NEW-CARDS-PAGE-COUNT", newPageCount } as const);
export const setSearchCardsValueAC = (searchCardsValue: string) => ({ type: "DIMA/TEAM-PROJECT/SET-SEARCH-CARDS-VALUE", searchCardsValue } as const);


export const getCardQuestionAC = (question: string) => ({type:"NIGAR/TEAM-PROJECT/GET-CARD-QUESTION", question} as const);


// thunk
export const getCardsTC = (packId: string, page?: number, pageCount?: number, searchCardsValue?: string, sortCardsOrder?: SortPacksAndCardsOrderType, sortCardsFilter?: string): AppThunk =>
    (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        cardsApi.getCards(packId, page, pageCount, searchCardsValue, sortCardsOrder, sortCardsFilter)
            .then(res => {
                dispatch(setCardsAC(res.data))
                dispatch(setCardsCountAC(res.data.cardsTotalCount))
                dispatch(setAppStatusAC("succeeded"))
            })
            .catch(e => {
                const error = e.res ? e.res.data.error : (`Get cards failed: ${e.message}.`);
                alert(error);
                dispatch(setAppStatusAC("failed"));
            })
    };

export const addCardTC = (packId: string, cardQuestion: string, cardAnswer: string): AppThunk => (dispatch, getState) => {
    const { page, pageCount, searchCardsValue } = getState().cards;
    dispatch(setAppStatusAC("loading"));
    cardsApi.addCard(packId, cardQuestion, cardAnswer)

        .then(res => {
            dispatch(getCardsTC(packId, page, pageCount, searchCardsValue))
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch(e => {
            const error = e.res ? e.res.data.error : (`Add card faild: ${e.message}.`);
            alert(error);
            dispatch(setAppStatusAC("failed"));
        })
};

export const updateCardTC = (packId: string, cardId: string, newCardQuestion: string, newCardAnswer: string): AppThunk => (dispatch, getState) => {
    const { page, pageCount, searchCardsValue } = getState().cards;
    dispatch(setAppStatusAC("loading"));
    cardsApi.updateCard(cardId, newCardQuestion, newCardAnswer)
        .then(res => {
            dispatch(getCardsTC(packId, page, pageCount, searchCardsValue))
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch(e => {
            const error = e.res ? e.res.data.error : (`Update card faild: ${e.message}.`)
            alert(error);
            dispatch(setAppStatusAC("failed"));
        })
};

export const deleteCardTC = (packId: string, cardId: string): AppThunk => (dispatch, getState) => {
    const { page, pageCount, searchCardsValue } = getState().cards;
    dispatch(setAppStatusAC("loading"));
    cardsApi.deleteCard(cardId)
        .then(res => {
            dispatch(getCardsTC(packId, page, pageCount, searchCardsValue));
            dispatch(setAppStatusAC("succeeded"));
        })
        .catch(e => {
            const error = e.res ? e.res.data.error : (`Delete card faild: ${e.message}.`)
            alert(error);
            dispatch(setAppStatusAC("failed"));
        })
};
