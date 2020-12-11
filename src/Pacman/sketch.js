import * as PIXI from "pixi.js";

const rangeLoop = function*(quantity) {
	while (true) {
		for (let i = 0; i < quantity; i++) yield i;
		for (let i = quantity -2; i > 0; i--) yield i;
	}
};

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

let direction = directions.left;

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

const walls = [
	[249.5, 455.5, 177, 90],
	[805, 455.5, 176, 90],
	[805, 321, 176, 91],
	[249.5, 321, 177, 91],
	[303.5, 220, 69, 25],
	[437.5, 287.5, 67, 24],
	[616.5, 287.5, 67, 24],
	[751, 220, 68, 25],
	[751, 141.5, 68, 46],
	[628, 141.5, 90, 46],
	[661.5, 287.5, 23, 158],
	[392.5, 287, 23, 159],
	[840, 175, 22, 201],
	[214, 175, 22, 201],
	[214, 623.5, 22, 246],
	[840, 623.5, 22, 246],
	[661.5, 455.5, 23, 90],
	[729, 601, 24, 67],
	[326, 601, 24, 67],
	[527.5, 669, 23, 69],
	[527.5, 534, 23, 67],
	[527.5, 266, 23, 67],
	[527.5, 119.5, 23, 90],
	[392.5, 455.5, 23, 90],
	[661.5, 644.5, 23, 70],
	[392.5, 644.5, 23, 70],
	[426.5, 141.5, 91, 46],
	[751, 555.5, 68, 24],
	[628, 555.5, 90, 24],
	[684, 691.5, 202, 24],
	[370.5, 691.5, 203, 24],
	[807, 623.5, 44, 22],
	[247, 623.5, 44, 22],
	[426, 555.5, 90, 24],
	[303.5, 555.5, 69, 24],
	[303.5, 141.5, 69, 46],
	[527, 62, 628, 25],
	[527, 757.5, 628, 22],
	[527, 622, 160, 25],
	[527, 488, 160, 25],
	[527, 220, 160, 25],
	[527, 388.5, 160, 90],
];

class Player {
	constructor() {
		this.texture = resources.spritesTileMap.texture;
		this.body    = new PIXI.Sprite(this.texture);

		this.body.anchor.set(0.5);
		this.body.position.set(app.view.width / 2, 589);
		this.body.scale.set(1.25);

		// Animations
		this.faces = [
			new PIXI.Rectangle(0, 0, 32, 32),
			new PIXI.Rectangle(32, 0, 32, 32),
			new PIXI.Rectangle(63, 0, 32, 32),
		];

		this.delta               = 0;
		this.speed               = 1.8;
		this.animationFrameRange = rangeLoop(3);
		this.texture.frame       = this.faces[this.animationFrameRange.next().value];

		app.stage.addChild(this.body);
	}

	animate() {
		this.delta += 0.1;

		if (this.delta >= 0.5) {
			const { value } = this.animationFrameRange.next();

			this.texture.frame = this.faces[value];

			this.delta = 0;
		}
	}

	willCollide(incrementX, incrementY) {
		const playerX = this.body.position.x + incrementX;
		const playerY = this.body.position.y + incrementY;

		for (let i = 0; i < walls.length; i++) {
			const [x, y, width, height] = walls[i];

			const absoluteDiffX = Math.abs(playerX - x);
			const absoluteDiffY = Math.abs(playerY - y);

			const intersectsX = absoluteDiffX <= ((this.body.width / 2) + (width / 2));
			const intersectsY = absoluteDiffY <= ((this.body.height / 2) + (height / 2));

			if (intersectsX && intersectsY)
				return true;
		}

		return false;
	}

	update() {
		this.animate();

		switch(direction) {
			case directions.up:
				this.body.rotation    = -Math.PI / 2;
				if (!this.willCollide(0, -this.speed)) {
					this.body.position.y -= this.speed;
				}
				break;
			case directions.down:
				this.body.rotation    = Math.PI / 2;
				if (!this.willCollide(0, this.speed)) {
					this.body.position.y += this.speed;
				}
				break;
			case directions.left:
				this.body.rotation    = Math.PI;
				if (!this.willCollide(-this.speed, 0)) {
					this.body.position.x -= this.speed;
				}
				break;
			case directions.right:
				this.body.rotation    = 0;
				if (!this.willCollide(this.speed, 0)) {
					this.body.position.x += this.speed;
				}
			default:
				break;
		}
	}
}

function drawRect(x, y, width, height, color = 0xC4C4C4) {
	let graphics = new PIXI.Graphics();

	graphics.beginFill(color);
	graphics.drawRect(x, y, width, height);
	graphics.endFill();

	graphics.pivot.set(graphics.width /2, graphics.height / 2);

	graphics.position.set(0, 0);

	app.stage.addChild(graphics);
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

		// Veil Right
		drawRect(324, -101, 90, 201, 0x5021D7);

		// Veil Left
		drawRect(-414, -101, 90, 201, 0x5021D7);

		// Redirect Portal Right
		drawRect(366, -101, 32, 201, 0x009429);

		// Redirect Portal Left
		drawRect(-398, -101, 32, 201, 0x009429);

		console.log({
			height: map.height,
			width: map.width,
		});
	});
};

function draw()  {
	pacman.update();
}

export function clean() {
	app.ticker.remove(draw);

	app.view.removeEventListener("click", onClick);
	window.removeEventListener("keydown", onKeydown);
};
