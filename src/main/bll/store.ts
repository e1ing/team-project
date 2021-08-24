import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { authReducer } from './auth-reducer';
import { restorePasswordReducer, RestorePasswordReducerActionsType } from './recovery-password-rebucer';
import { updatePasswordReducer, UpdatePasswordReducerAT } from './update-password-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    recoveryPassword: restorePasswordReducer,
    updatePasswordReducer: updatePasswordReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>

export type AppActionsType = RestorePasswordReducerActionsType
                            | UpdatePasswordReducerAT


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;