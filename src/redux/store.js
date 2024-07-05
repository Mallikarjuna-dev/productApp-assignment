import { applyMiddleware, legacy_createStore } from "redux";
import { ProductReducer } from "./Product/reducer"
import { thunk } from "redux-thunk"

const store = legacy_createStore(ProductReducer, applyMiddleware(thunk))
export default store;