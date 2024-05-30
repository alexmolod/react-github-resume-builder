import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
