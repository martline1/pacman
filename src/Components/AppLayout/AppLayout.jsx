import React           from "react";
import { shell }       from "electron";
import { useLocation } from "react-router";

import {
	Divider,
	Button,
	IconButton,
} from "@material-ui/core";

// Import Own Components
import { useRedirectTo } from "~/Util/Hooks";
import ChartIcon         from "~/Resources/icons/ChartIcon.svg";
import FacebookIcon      from "~/Resources/icons/FacebookIcon.svg";
import GithubIcon        from "~/Resources/icons/GithubIcon.svg";
import PacmanIcon        from "~/Resources/icons/PacmanIcon.jsx";
import TwitterIcon       from "~/Resources/icons/TwitterIcon.svg";
import logo              from "~/Resources/LogoIcon.png";
import useStyles         from "./styles";

const AppLayout = ({ children }) => {
	const classes      = useStyles();
	const { pathname } = useLocation();
	const redirectTo   = useRedirectTo();

	return (
		<div className={classes.root}>
			<div className="left">
				<Button
					onClick={redirectTo("/")}
					className="imageContainer"
				>
					<img src={logo} alt="Martin Creator" />
				</Button>

				<Divider className="divider" />

				<div className="actionsContainer">
					<Button
						className="action"
						onClick={redirectTo("/chart")}
					>
						<img src={ChartIcon} alt="Chart" />
						<p>Diagrama</p>
					</Button>
					<Button
						className="action"
						onClick={redirectTo("/pacman")}
					>
						<PacmanIcon />
						<p>Pacman</p>
					</Button>
				</div>

				<div className="socialMediaContainer">
					<IconButton onClick={() => shell.openExternal("https://github.com/martline1")}>
						<img src={GithubIcon} alt="Github" />
					</IconButton>
					<IconButton onClick={() => shell.openExternal("https://twitter.com/martline2")}>
						<img src={TwitterIcon} alt="Twitter" />
					</IconButton>
					<IconButton onClick={() => shell.openExternal("https://www.facebook.com/martline1.martin")}>
						<img src={FacebookIcon} alt="Facebook" />
					</IconButton>
				</div>
			</div>
			<div className="right">
				{ pathname === "/" ? (
					<iframe src="./pages/particles.html" frameBorder="0"></iframe>
				) : children }
			</div>

			<button
				className="authorLink"
				onClick={() => shell.openExternal("https://github.com/martline1")}
				style={pathname === "/pacman" ? {
					color : "white",
				} : {}}
			>
				{"</> por Mártin Alcalá "}
				<span>
					yael.alcalla@gmail.com
				</span>
			</button>
		</div>
	);
};

export default AppLayout;
