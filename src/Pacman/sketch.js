import * as PIXI from "pixi.js";

// Import Own Components
import Player                from "./player";
import Ghost                 from "./Ghost";
import { showMousePosition } from "./helpers";

let app, resources;

function drawRect(x, y, width, height, color = 0xC4C4C4) {
	let graphics = new PIXI.Graphics();

	graphics.beginFill(color);
	graphics.drawRect(x, y, width, height);
	graphics.endFill();

	graphics.pivot.set(graphics.width /2, graphics.height / 2);

	graphics.position.set(0, 0);

	app.stage.addChild(graphics);
}

let pacman, ghost;

const mappedOnClick = e => showMousePosition(e, app);

export function setup(_app) {
	app = _app;

	const loader = new PIXI.Loader();

	loader
		.add("dots", "./assets/dots.png")
		.add("map", "./assets/map.png")
		.add("ready", "./assets/ready.png")
		.add("player", "./assets/sprites32.png")
		.add("ghost", "./assets/sprites32.png")
		.load((loader, _resources) => resources = _resources);

	loader.onComplete.add(() => {
		// General Layout
		const map   = new PIXI.Sprite(resources.map.texture);
		const ready = new PIXI.Sprite(resources.ready.texture);

		map.anchor.set(0.5);
		map.position.set(app.view.width / 2, app.view.height / 2);
		map.scale.set(1.4);

		ready.anchor.set(0.5);
		ready.position.set(app.view.width / 2, app.view.height / 2 -10);
		ready.scale.set(1.4);

		app.stage.addChild(map);
		app.stage.addChild(ready);

		app.view.addEventListener("click", mappedOnClick);

		setTimeout(() => {
			ready.visible = false;

			pacman = new Player(app, resources.player.texture);
			ghost  = new Ghost(app, resources.ghost.texture);

			app.ticker.add(draw);
		}, 3000);

		// Veil Right
		// drawRect(324 + app.view.width / 2 + 45, -101 + app.view.height / 2 + 100.5, 90, 201, 0x5021D7);

		// Veil Left
		// drawRect(-414, -101, 90, 201, 0x5021D7);

		// Redirect Portal Right
		// drawRect(366, -101, 32, 201, 0x009429);

		// Redirect Portal Left
		// drawRect(-398, -101, 32, 201, 0x009429);
	});
};

function draw()  {
	pacman.update();
	ghost.update();
}

export function clean() {
	app.ticker.remove(draw);

	app.view.removeEventListener("click", mappedOnClick);
	pacman.clean();
	ghost.clean();
};
