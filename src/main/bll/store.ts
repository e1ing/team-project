import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./auth-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;