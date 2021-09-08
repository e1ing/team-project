import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { restorePasswordReducer, RestorePasswordReducerActionsType } from './auth-reducer/recovery-password-reducer';
import { updatePasswordReducer, UpdatePasswordReducerAT } from './auth-reducer/update-password-reducer';
import {registrationReducer} from "./auth-reducer/registration-reducer";
import {ActionType, appReducer} from "./app-reducer";
import { PacksActionType, packsReducer } from './packs-reducer/packs-reduser';
import { CardsReducerActionType, cardsReducer } from './cards-reducer/cards-reducer';
import {ActionLoginType, authReducer} from "./auth-reducer/auth-reducer";
import {learnCardReducer, LearnCardReducerActionType} from "./learn-card-reducer/learn-card-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    recoveryPassword: restorePasswordReducer,
    updatePasswordReducer: updatePasswordReducer,
    app: appReducer,
    registration: registrationReducer,
    packs: packsReducer,
    cards: cardsReducer,
    learnCard: learnCardReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>

export type AppActionsType = RestorePasswordReducerActionsType
    | UpdatePasswordReducerAT
    | PacksActionType
    | CardsReducerActionType
    | ActionType
    | ActionLoginType
    | LearnCardReducerActionType


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;