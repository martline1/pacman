import React             from "react";
import { render }        from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline }   from "@material-ui/core";

import {
	Router,
	Route,
	Switch,
} from "react-router-dom";

// Import Own Components
import AppLayout          from "~/Components/AppLayout";
import { theme, history } from "~/Util";
import routes             from "~/Views/routes";
import "./index.css";

const App = () => (
	<>
		<CssBaseline />

		<ThemeProvider theme={theme}>
			<Router history={history}>
				<AppLayout>
					<Switch>
						{ routes.map(route => (
							<Route key={route.path ?? "not_found"} {...route} />
						)) }
					</Switch>
				</AppLayout>
			</Router>
		</ThemeProvider>
	</>
);

const appContainer = document.querySelector("#app-container");

render(
	<App />,
	appContainer,
);
