import { createMuiTheme } from "@material-ui/core/styles";

// Import Own Components
import { themeColor } from "settings";

const theme = createMuiTheme({
	palette : {
		primary : {
			main : themeColor,
		},
	},
	typography : {
		fontFamily : [
			"'Open Sans'",
			"-apple-system",
			"Gotham",
			"BlinkMacSystemFont",
			"'Segoe UI'",
			"Roboto",
			"Oxygen",
			"Ubuntu",
			"Cantarell",
			"'Fira Sans'",
			"'Droid Sans'",
			"'Helvetica Neue'",
		].join(","),
	},
});

export default theme;
