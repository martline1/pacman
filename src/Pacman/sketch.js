import * as PIXI from "pixi.js";

let app, resources;

const sprites = {};

function getMousePos(evt) {
	var rect = app.view.getBoundingClientRect();

	return {
		x : evt.clientX - rect.left,
		y : evt.clientY - rect.top,
	};
}

function onClick(evnt) {
	const pos = getMousePos(evnt);

	console.log({ pos });
}

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

		map.anchor.set(0.5);
		map.position.set(app.view.width / 2, app.view.height / 2);
		map.scale.set(1.4);

		ready.anchor.set(0.5);
		ready.position.set(app.view.width / 2, app.view.height / 2 -10);
		ready.scale.set(1.4);

		app.stage.addChild(map);
		app.stage.addChild(ready);

		// Dots
		const dotsTexture = resources.dots.texture;

		const rect = new PIXI.Rectangle(0, 0, 16, 16);

		dotsTexture.frame = rect;

		const positions = [];

		for (let i = 0; i < 12; i++) {
			let dot = new PIXI.Sprite(dotsTexture);

			dot.scale.set(1.4);
			
			dot.position.set(233 + (23 * i), 514);

			app.stage.addChild(dot);
		}
		
		for (let i = 0; i < 19; i++) {
			let dot = new PIXI.Sprite(dotsTexture);
	
			dot.scale.set(1.4);
			dot.position.set(348, 514 - (23.6 * i));
	
			app.stage.addChild(dot);
		}
		
		app.ticker.add(draw);

		app.view.addEventListener("click", onClick);
	});
};

function draw()  {
}

export function clean() {
	app.ticker.remove(draw);

	app.view.removeEventListener("click", onClick);
};
