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
    // console.log(e);
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.level.renderLevel(this.ctx);
    // this.player.renderPlayer(this.ctx);
    // this.game.currentPlayer.move();

    console.log(this.ctx);
    this.game.renderFrame(this.ctx);
    // requestAnimationFrame(this.animate);
  }

  start() {
    requestAnimationFrame(this.animate);
  }

  test() {
    console.log(this.player);
    console.log(this.level);
    document.addEventListener("keydown", this.handleKeydown);
  }

  handleKeydown(event) {
    let key = event.keyCode;
    if (key === 65) {
      this.player.moveLeft()
      this.animate();
      // console.log(this.player);
    } else if (key === 68) {
      this.player.moveRight();
      this.animate();
      // console.log(this.player);
    }
  }

}

export default GameView;

