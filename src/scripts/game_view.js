import { Util } from "./util";


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

  
  // handleKeydown(event) {
  //   // debugger
  //   let key = event.keyCode;
  //   if (key === 65 && !Util.collisionDetection(this.player, this.level.arrWalls)) {
  //     this.player.left();
  //     this.animate();
  //   } else if (key === 68 && !Util.collisionDetection(this.player, this.level.arrWalls)) {
  //     this.player.right();
  //     this.animate();
  //   } else if (key === 87 && !Util.collisionDetection(this.player, this.level.arrWalls)) {
  //     this.player.up();
  //     this.animate();
  //   } else if (key === 83 && !Util.collisionDetection(this.player, this.level.arrWalls)) {
  //     this.player.down();
  //     this.animate();
  //   }
  // }

  handleKeydown(event) {
    // debugger
    let key = event.keyCode;
    if (key === 65 && this.player.collisionLeft === false) {
      this.player.collisionRight = false;
      this.player.left();
      this.animate();
      if (Util.collisionDetection(this.player, this.level.arrWalls)) {
        this.player.collisionLeft = true;
      }
    } else if (key === 68 && this.player.collisionRight === false) {
      this.player.collisionLeft = false;
      this.player.right();
      this.animate();
      if (Util.collisionDetection(this.player, this.level.arrWalls)) {
        this.player.collisionRight = true;
      }
    } else if (key === 87) {
      this.player.up();
      this.animate();
    } else if (key === 83) {
      this.player.down();
      this.animate();
    }
  }
  
}

export default GameView;

