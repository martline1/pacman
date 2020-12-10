import React        from "react";
import { Redirect } from "react-router-dom";

// Import Own Components
import ChartView  from "~/Views/ChartView";
import PacmanView from "~/Views/PacmanView";

const routes = [
	{
		path      : "/",
		component : () => <></>,
		exact     : true,
	},
	{
		path      : "/chart",
		component : ChartView,
		exact     : true,
	},
	{
		path      : "/pacman",
		component : PacmanView,
		exact     : true,
	},
	{
		component : props => <Redirect {...props} to="/" />,
	},
];

export default routes;
