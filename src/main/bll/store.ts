import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { restorePasswordReducer, RestorePasswordReducerActionsType } from './recovery-password-rebucer';
import { updatePasswordReducer, UpdatePasswordReducerAT } from './update-password-reducer';
import {registrationReducer} from "./registration-reducer";
import {ActionType, appReducer} from "./app-reducer";
import { PacksActionType, packsReducer } from './packs-reducer/packs-reduser';
import { loginReducer, LoginReducerActionsType } from './auth-reducer';
import { CardsReducerActionType, cardsReducer } from './cards-reducer/cards-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: loginReducer,
    recoveryPassword: restorePasswordReducer,
    updatePasswordReducer: updatePasswordReducer,
    app: appReducer,
    registation: registrationReducer,
    packs: packsReducer,
    cards: cardsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>

export type AppActionsType = RestorePasswordReducerActionsType
                            | UpdatePasswordReducerAT
                            | LoginReducerActionsType
                            | PacksActionType
                            | CardsReducerActionType
                            | ActionType


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;