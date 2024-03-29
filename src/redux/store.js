import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootreducer";
import thunk from "redux-thunk";

// const store = createStore(rootReducer) => before redux thunk
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store