import React, { useEffect } from "react";
import * as PIXI            from "pixi.js";
import { IconButton }       from "@material-ui/core";

// Import Own Components
import { useRedirectTo } from "~/Util/Hooks";
import ArrowBack         from "~/Resources/icons/ArrowBack.jsx";
import { clean, setup }  from "~/Pacman";
import useStyles         from "./styles";

const PacmanView = () => {
	const classes    = useStyles();
	const redirectTo = useRedirectTo();

	useEffect(() => {
		const gameContainer = document.getElementById("game-container");

		const app = new PIXI.Application({
			width           : gameContainer.clientWidth,
			height          : gameContainer.clientHeight,
			backgroundColor : 0x000000,
			resolution      : window.devicePixelRatio,
			autoDensity     : true,
		});

		gameContainer.appendChild(app.view);

		// Call setup once
		setup(app);

		return () => {
			// Clean data
			clean();
		};
	}, []);

	return (
		<div id="game-container" className={classes.root}>
			<IconButton
				className={classes.backBtn}
				onClick={redirectTo("/")}
			>
				<ArrowBack />
			</IconButton>
		</div>
	);
};

export default PacmanView;
