import { applyMiddleware, combineReducers, createStore } from "redux";
import { FacebookReducer } from "./FacebookReducer";
import { PhimReducer } from "./PhimReducer";

//Cấu hình MiddleWare (Để có thể dispatch redux 1 action là function)
import thunk from 'redux-thunk'
import { ModalReducer } from "./ModalReducer";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";

const rootReducer = combineReducers({
    //Khai báo reducer
    FacebookReducer,
    PhimReducer,
    ModalReducer,
    QuanLyNguoiDungReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))