import { combineReducers, createStore } from "redux";
import { FacebookReducer } from "./FacebookReducer";

const rootReducer = combineReducers({
    //Khai báo reducer
    FacebookReducer: FacebookReducer
})

export const store = createStore(rootReducer)