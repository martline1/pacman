/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";


// Import Own Components
import { useHistory } from "react-router-dom";

/**
 * Creates a memoized function that takes a string and redirects with router (router.push)
 *
 * @author Yael Mártin A. Alcalá León <yael.alcalla@gmail.com>
 * @example
 *
 * const UsageExample: React.FC = () => {
 * 	const redirectTo = useRedirectTo();
 *
 * 	return (
 * 		<button onClick={redirectTo("/home")}>
 * 			Go to Home
 * 		</button>
 * 	);
 * };
 */
const useRedirectTo = () => {
	const history = useHistory();

	const redirectTo = useCallback(url => () => history.push(url), []);

	return redirectTo;
};

export default useRedirectTo;
