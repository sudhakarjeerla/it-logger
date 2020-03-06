import { createStore, applyMiddleware } from "redux";
import logReducer from "./reducers/logReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(logReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
