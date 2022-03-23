import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let rootReducer = combineReducers({
    auth: authReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
const persistor = persistStore(store)
export {store, persistor}