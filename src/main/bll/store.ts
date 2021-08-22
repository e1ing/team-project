import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { authReducer } from './auth-reducer';
import { recoveryPasswordReducer } from './recovery-password-rebucer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    recoveryPassword: recoveryPasswordReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AllAppActionsType>


export type AllAppActionsType = any


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;