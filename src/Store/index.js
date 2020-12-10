import { createStore, applyMiddleware } from "redux";
import thunk                            from "redux-thunk";

// Import Own Components
import rootReducer              from "./Reducers";
import { saveState, loadState } from "./persistor";

const Store = createStore(
	rootReducer,
	loadState() || {},
	applyMiddleware(thunk)
);

Store.subscribe(() => saveState(Store.getState()));

export default Store;
