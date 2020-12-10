import React, { useEffect } from "react";
import * as PIXI            from "pixi.js";

// Import Own Components
import AuthorLink from "~/Components/AuthorLink";
import useStyles  from "./styles";

const MainView = () => {
	const classes = useStyles();

	useEffect(() => {
		let app;

		app = new PIXI.Application({
			width           : window.innerWidth,
			height          : window.innerHeight,
			backgroundColor : 0xFAFAFA,
		});

		const container = document.getElementById("appContainer");

		container.appendChild(app.view);

		// Player
		const player = new PIXI.Sprite.from("./assets/cat_idle.png");

		// 0 -> 1
		player.anchor.set(0.5);

		// 0 -> anySize
		// player.pivot.set(60, 60);

		player.position.set(app.view.width / 2, app.view.height / 2);
		// player.x = app.view.width / 2;
		// player.y = app.view.height / 2;

		player.width  = 120;
		player.height = 120;

		// cat.scale.x = 0.5;
		// cat.scale.y = 0.5;
		// cat.scale.set(0.5, 0.5);

		// rotation in radians
		// cat.rotation = 0.5;

		app.stage.addChild(player);

		// Interactions
		app.stage.interactive = true;
		app.stage.on("pointermove", ({ data : { global } }) => {
			// player.x = global.x;
			// player.y = global.y;
		});

		window.addEventListener("keydown", ({ key }) => {
			switch (key) {
				case "w": case "a": case "s": case "d":
					console.log("me interesa");
					break;
				default:
					break;
			}
			console.log({
				key,
			});
		});

		window.addEventListener("resize", () => {
			app.renderer.autoResize = true;
			app.renderer.resize(window.innerWidth, window.innerHeight);
		});
	}, []);

	return (
		<div
			id="appContainer"
			className={classes.root}
		>

			<AuthorLink />
		</div>
	);
};

export default MainView;
