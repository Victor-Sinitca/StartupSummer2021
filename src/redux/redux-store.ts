import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
let rootReducers=combineReducers({
    profilePage: profileReducer,
    form:formReducer,
});

type RootReducerType=typeof rootReducers
export type AppStateType= ReturnType<RootReducerType>


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(sagaMiddleware,thunkMiddleware)
));

// @ts-ignore
window.___store___=store
/*let store = createStore(reducers, applyMiddleware(thunkMiddleware));*/



/*sagaMiddleware.run(watchRequestUsers)*/

export default store
