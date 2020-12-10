import * as PIXI from "pixi.js";

let app, resources;

const sprites = {};

export function setup(_app) {
	app = _app;

	const loader = new PIXI.Loader();

	loader
		.add("dots", "./assets/dots.png")
		.add("map", "./assets/map.png")
		.add("ready", "./assets/ready.png")
		.add("spritesTileMap", "./assets/cat_idle.png")
		.load((loader, _resources) => resources = _resources);

	loader.onComplete.add(() => {
		// General Layout
		const map   = new PIXI.Sprite(resources.map.texture);
		const ready = new PIXI.Sprite(resources.ready.texture);

		ready.anchor.set(0.5);
		ready.position.set(app.view.width / 2, app.view.height / 2 -10);
		ready.scale.set(1.4);

		map.anchor.set(0.5);
		map.position.set(app.view.width / 2, app.view.height / 2);
		map.scale.set(1.4);

		app.stage.addChild(map);
		app.stage.addChild(ready);

		// Dots
		const dotsTexture = resources.dots.texture;

		const rect = new PIXI.Rectangle(0, 0, );

		app.ticker.add(draw);
	});
};

function draw()  {
}

export function clean() {
	app.ticker.remove(draw);
};
