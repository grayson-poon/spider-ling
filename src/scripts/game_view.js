import Game from "./game";
import Player from "./player";

import Level from "./level";

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = this.ctx.canvas;

    // this.game = new Game(this.canvas, this.ctx);
    this.currentPlayer = new Player(0, 0);
    this.currentLevel = new Level(this.ctx);

    this.animate = this.animate.bind(this);
  }

  animate(ctx) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.currentLevel.renderLevel(this.ctx);
    this.currentPlayer.renderPlayer(this.ctx);
  }

  start() {
    requestAnimationFrame(this.animate);
  }
}

document.addEventListener("click", (event) => {
  console.log(event);
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 65) {
    console.log("left");
    console.log(event);
  }
});

export default GameView;

