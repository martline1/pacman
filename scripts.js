import React, { useEffect } from "react";
import * as PIXI            from "pixi.js";
import { makeStyles }       from "@material-ui/core";

// Import Own Components
import AppLayout from "~/Components/AppLayout";

const useStyles = makeStyles(theme => ({
	root : {
		margin  : 0,
		padding : 0,

		width  : "100%",
		height : "100%",
	},
}));

const sketchContainerId = "PathUniquesketchContainerId";

const Path = () => {
	const classes = useStyles();

	useEffect(() => {
		const sketchContainer = document.getElementById(sketchContainerId);

		console.log({
			width           : sketchContainer.clientWidth,
			height          : sketchContainer.clientHeight,
		});

		let app = new PIXI.Application({
			width           : sketchContainer.clientWidth,
			height          : sketchContainer.clientHeight,
			backgroundColor : 0x000000,
		});

		sketchContainer.appendChild(app.view);

		// Player
		const player = new PIXI.Sprite.from("./assets/cat_idle.png");

		player.anchor.set(0.5);
		player.position.set(app.view.width / 2, app.view.height / 2);
		player.width  = 120;
		player.height = 120;

		app.stage.addChild(player);

		// Interactions
		// app.stage.interactive = true;
		// app.stage.on("pointermove", ({ data : { global } }) => {
		// 	player.x = global.x;
		// 	player.y = global.y;
		// });

		let movement = {
			w : false,
			s : false,
			d : false,
			a : false,
		};

		const createUpdateMovement = value => ({ key }) => {
			switch(key) {
				case "w": case "s": case "d": case "a":
					movement[key] = value;
					break;
				default:
					break;
			}
		};

		const onKeyDown = createUpdateMovement(true);
		const onKeyUp   = createUpdateMovement(false);

		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);


		const gameLoop = (...args) => {
			if (movement.w) {
				player.y -= 5;
			}

			if (movement.s) {
				player.y += 5;
			}

			if (movement.a) {
				player.x -= 5;
			}

			if (movement.d) {
				player.x += 5;
			}

			console.log("draw");
		};

		app.ticker.add(gameLoop);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);

			app.ticker.remove(gameLoop);
		};
	}, []);

	return (
		<AppLayout>
			<div id={sketchContainerId} className={classes.root} />
		</AppLayout>
	);
};

export default Path;
