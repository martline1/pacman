// import authActions from "Store/Actions/authActions";

// const apiUrl = process.env.REACT_APP_MOVEN_API;

// const login = (username, password) => async (dispatch) => {
// 	try {
// 		const body = new FormData();

// 		body.append("email", username);
// 		body.append("password", password);

// 		const response = await fetch(`${apiUrl}/api/v1/login`, {
// 			method : "POST",
// 			body,
// 		});

// 		const {
// 			success : {
// 				token,
// 			},
// 		} = await response.json();

// 		dispatch(authActions.setToken(token));
// 	} catch (err) {
// 		console.error("[UserService.login] ", err);

// 		return true;
// 	}
// };

// const confirmCode = code => async (dispatch, getState) => {
// 	try {
// 		const { token } = getState().authReducer;

// 		const body = new FormData();

// 		body.append("code", code);

// 		const response = await fetch(`${apiUrl}/api/v1/tfa`, {
// 			method  : "POST",
// 			headers : {
// 				Authorization : `Bearer ${token}`,
// 			},
// 			body,
// 		});

// 		const {
// 			success,
// 			error,
// 		} = await response.json();

// 		if (error || !success.user) {
// 			return true;
// 		}

// 		dispatch(authActions.setUserData(success.user));
// 	} catch (err) {
// 		console.error("[UserService.confirmCode] ", err);

// 		return true;
// 	}
// };

// const resendCode = () => async (dispatch, getState) => {
// 	try {
// 		const { token } = getState().authReducer;

// 		const response = await fetch(`${apiUrl}/api/v1/re-sendSMS`, {
// 			method  : "GET",
// 			headers : {
// 				Authorization : `Bearer ${token}`,
// 			},
// 		});

// 		if (!response.ok) {
// 			throw response;
// 		} else {
// 			// No errors
// 			return false;
// 		}
// 	} catch (err) {
// 		console.error("[UserService.resendCode] ", err);

// 		return true;
// 	}
// };

// const UserService = {
// 	login,
// 	confirmCode,
// 	resendCode,
// };

// export default UserService;
