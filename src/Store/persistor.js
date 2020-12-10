/** Logs an error to the console */
const logError = err => console.error("[persistor.js] An exception has occurred. ", err);

/**
 * Loads the global redux state from the localStorage
 *
 * @author Yael Mártin A. Alcalá León <yael.alcalla@gmail.com>
 */
export const loadState = () => {
	try {
		const data = localStorage.getItem("state");

		return data
			? JSON.parse(data)
			: undefined;
	} catch (err) {
		logError(err);
	}
};

/**
 * Saves the state in the localStorage to persis through all user activity.
 *
 * @author Yael Mártin A. Alcalá León <yael.alcalla@gmail.com>
 * @param state State to be saved in the localStorage
 */
export const saveState = (state) => {
	try {
		const data = JSON.stringify(state);

		localStorage.setItem("state", data);
	} catch (err) {
		logError(err);
	}
};
