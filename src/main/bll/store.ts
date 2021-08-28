import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { restorePasswordReducer, RestorePasswordReducerActionsType } from './recovery-password-rebucer';
import { updatePasswordReducer, UpdatePasswordReducerAT } from './update-password-reducer';
import {registrationReducer} from "./registration-reducer";
import {appReducer} from "./app-reducer";
import { PacksActionType, packsReduser } from './packs-reducer/packs-reduser';
import { loginReducer, LoginReducerActionsType } from './auth-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: loginReducer,
    recoveryPassword: restorePasswordReducer,
    updatePasswordReducer: updatePasswordReducer,
    app: appReducer,
    registation: registrationReducer,
    packs: packsReduser,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>

export type AppActionsType = RestorePasswordReducerActionsType
                            | UpdatePasswordReducerAT
                            | LoginReducerActionsType
                            | PacksActionType


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;