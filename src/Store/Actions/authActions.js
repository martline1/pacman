// Import Own Components
import {
	SET_USER_DATA,
	SET_TOKEN,
	RESET_USER_DATA,
} from "~/Store/Constants/authConstants";

const setUserData = data => ({
	type    : SET_USER_DATA,
	payload : {
		data,
	},
});

const setToken = token => ({
	type    : SET_TOKEN,
	payload : {
		token,
	},
});

const resetUserData = () => ({ type : RESET_USER_DATA });

const authActions = {
	setUserData,
	setToken,
	resetUserData,
};

export default authActions;
