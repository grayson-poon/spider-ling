// import { Util } from "./util";


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

    this.listen();
  }

  animate() {
    this.game.renderFrame(this.ctx);
    requestAnimationFrame(this.animate);
  }

  start() {
    requestAnimationFrame(this.animate);
  }

  listen() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  handleKeydown(event) {
    let key = event.keyCode;
    console.log(event);
    if (key === 65 && this.player.collisionLeft === false) {
      this.player.left();
      this.animate();
      if (this.game.collisionDetection()) {
        this.player.right();
        this.animate();
      }
    } else if (key === 68 && this.player.collisionRight === false) {
      this.player.right();
      this.animate();
      if (this.game.collisionDetection()) {
        this.player.left();
        this.animate();
      }
    }
  }
  
}

// else if (key === 87 && this.player.collisionUp === false) {
//       this.player.up();
//       this.animate();
//       if (this.game.collisionDetection()) {
//         this.player.down();
//         // this.player.down();
//       }
//     } else if (key === 83 && this.player.collisionDown === false) {
//       this.player.down();
//       this.animate();
//       if (this.game.collisionDetection()) {
//         this.player.up();
//         // this.player.up();
//       }
//     }

export default GameView;

