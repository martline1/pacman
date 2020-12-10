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

const directions = {
	up    : "up",
	left  : "left",
	right : "right",
	down  : "down",
};

let direction = directions.up;

function onKeydown({ key }) {
	switch(key) {
		case "ArrowLeft":
			direction = directions.left;
			return;
		case "ArrowDown":
			direction = directions.down;
			return;
		case "ArrowRight":
			direction = directions.right;
			return;
		case "ArrowUp":
			direction = directions.up;
		default:
			return;
	}
}

class Player {
	constructor() {
		console.log("Se llamó el constructor");

		this.texture = resources.spritesTileMap;

		this.currentRectangle = new PIXI.Rectangle(0, 0, 32, 32);

		this.texture.frame = this.currentRectangle;

		console.log(this.texture);

		this.body = new PIXI.Sprite(this.texture);

		// this.body.anchor.set(0.5);
		// this.body.position.set(app.view.width / 2, app.view.height / 2);
		// this.body.scale.set(1.4);
	}

	update() {
		
	}
}

let pacman;

export function setup(_app) {
	app = _app;

	const loader = new PIXI.Loader();

	loader
		.add("dots", "./assets/dots.png")
		.add("map", "./assets/map.png")
		.add("ready", "./assets/ready.png")
		.add("spritesTileMap", "./assets/sprites32.png")
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
		
		app.view.addEventListener("click", onClick);
		window.addEventListener("keydown", onKeydown);

		ready.visible = false;

		pacman = new Player();

		app.ticker.add(draw);
		// setTimeout(() => {
		// }, 3000);
	});
};

function draw()  {
}

export function clean() {
	app.ticker.remove(draw);

	app.view.removeEventListener("click", onClick);
	window.removeEventListener("keydown", onKeydown);
};
