import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import compose from "redux-compose";
import rootReducer from "./reducers";
// import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
// // import {createLogger} from 'redux-logger';


// let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
// window.__REDUX_DEVTOOLS_EXTENSION__();
// if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
//     devTools = a => a;
// }

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const logger = createLogger({
//     /* https://github.com/evgenyrodionov/redux-logger */
//     collapsed: true,
//     diff: true
// });

const initialState = {};
const middleware = [thunk];

const store = compose(
	applyMiddleware(...middleware),
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)(createStore)(rootReducer, initialState);

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(
//     applyMiddleware(...middleware),
//     devTools
//   )
// );
export default store;