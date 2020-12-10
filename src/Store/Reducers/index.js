import { combineReducers } from "redux";

// Import Own Components
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	authReducer,
});

export default rootReducer;
