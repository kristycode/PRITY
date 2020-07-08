import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
// import compose from "redux-compose";
import rootReducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';


const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
	applyMiddleware(...middleware)
  )
);
export default store;