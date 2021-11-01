import Player from "./player";
import Level from "./level";

class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;

    // relations
    this.canvas = this.ctx.canvas;
    this.player = this.game.currentPlayer;
    this.level = this.game.currentLevel;

    // binds
    this.animate = this.animate.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);

    this.test();
  }

  animate() {
    this.game.renderFrame(this.ctx);
    requestAnimationFrame(this.animate);
  }

  start() {
    requestAnimationFrame(this.animate);
  }

  test() {
    console.log(this.player);
    console.log(this.level);
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("click", this.handleClick.bind(this));
  }

  handleKeydown(event) {
    let key = event.keyCode;
    if (key === 65 && this.player.x > 0) {
      this.player.moveLeft()
      this.animate();
    } else if (key === 68 && this.player.x < (this.ctx.canvas.width - this.player.width)) {
      this.player.moveRight();
      this.animate();
      console.log(this.player);
    }
  }

  handleClick(event) {
    console.log(event);
  }

}

export default GameView;

