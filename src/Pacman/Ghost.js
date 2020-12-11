import * as PIXI from "pixi.js";

// Import Own Components
import { rangeLoop } from "./helpers";

const directions = {
    up    : 6,
    left  : 4,
    right : 0,
    down  : 2,
};

let direction = directions.left;

class Ghost {
    constructor(app, _texture) {
        this.texture = _texture;
        this.body    = new PIXI.Sprite(this.texture);

        this.body.anchor.set(0.5);
        this.body.position.set(app.view.width / 2, app.view.height / 2);

        // Animations
        this.faces = [
            // Right 0
            new PIXI.Rectangle(0, 64, 32, 32),
            new PIXI.Rectangle(32, 64, 32, 32),

            // Down 2
            new PIXI.Rectangle(64, 64, 32, 32),
            new PIXI.Rectangle(96, 64, 32, 32),

            // Left 4
            new PIXI.Rectangle(128, 64, 32, 32),
            new PIXI.Rectangle(160, 64, 32, 32),

            // Up 6
            new PIXI.Rectangle(192, 64, 32, 32),
            new PIXI.Rectangle(224, 64, 32, 32),
        ]

        this.delta          = 0;
        this.speed          = 1.7;
        this.animationFrame = rangeLoop(2);
        this.texture.frame  = this.faces[this.animationFrame.next().value + 4];

        app.stage.addChild(this.body);
    }

    animate() {
        this.delta += 0.1;

        if (this.delta >= 0.5) {
            const { value } = this.animationFrame.next();

            this.texture.frame = this.faces[value + direction];

            this.delta = 0;
        }
    }

    update() {
        this.animate();

        if (this.body.position.x > 580) {
            direction = directions.left;
            this.speed *= -1;
        }

        if (this.body.position.x < 480) {
            direction = directions.right;
            this.speed *= -1;
        }

        this.body.position.x += this.speed;
    }

    clean() {

    }
}

export default Ghost;
