import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { recoveryPasswordReducer } from './recovery-password-rebucer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    recoveryPassword: recoveryPasswordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;