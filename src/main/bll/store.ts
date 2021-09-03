import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { restorePasswordReducer, RestorePasswordReducerActionsType } from './auth-reducer/recovery-password-reducer';
import { updatePasswordReducer, UpdatePasswordReducerAT } from './auth-reducer/update-password-reducer';
import {registrationReducer} from "./auth-reducer/registration-reducer";
import {ActionType, appReducer} from "./app-reducer";
import { PacksActionType, packsReducer } from './packs-reducer/packs-reduser';
import { CardsReducerActionType, cardsReducer } from './cards-reducer/cards-reducer';
import {authReducer} from "./auth-reducer/auth-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    recoveryPassword: restorePasswordReducer,
    updatePasswordReducer: updatePasswordReducer,
    app: appReducer,
    registration: registrationReducer,
    packs: packsReducer,
    cards: cardsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>

export type AppActionsType = RestorePasswordReducerActionsType
                            | UpdatePasswordReducerAT
                            | PacksActionType
                            | CardsReducerActionType
                            | ActionType


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;