import {
	SET_USER_DATA,
	SET_TOKEN,
	RESET_USER_DATA,
} from "~/Store/Constants/authConstants";

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				loggedIn : true,
				userData : {
					...action.payload.data,
				},
			};
		case SET_TOKEN:
			return {
				...state,
				token : action.payload.token,
			};
		case RESET_USER_DATA:
			return {};
		default:
			return state;
	}
};

export default authReducer;
