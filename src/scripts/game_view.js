import { wallUtil } from "./modules/wallUtil";


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

    this.listenDown();
    this.listenUp();
  }

  animate() {
    this.game.renderFrame(this.ctx);
    requestAnimationFrame(this.animate);
  }

  start() {
    requestAnimationFrame(this.animate);
  }

  listenDown() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  listenUp() {
    document.addEventListener("keyup", this.handleKeyup);
  }

  handleKeyup(event) {
    console.log(event);
  }

  handleKeydown(event) {
    let key = event.keyCode;
    // console.log(event);
    if (key === 65) {
      let closestL = wallUtil.closestWallToTheLeft(this.player, this.level.arrWalls);
      let distanceL = wallUtil.distanceToTheLeft(this.player, closestL);

      if (distanceL === 1) {
        return
      } else if (distanceL > this.player.velocity) {
        this.player.left();
      } else {
        this.player.x -= (distanceL - 1);
      }

      this.animate();

    } else if (key === 68) {
      let closestR = wallUtil.closestWallToTheRight(this.player, this.level.arrWalls);
      let distanceR = wallUtil.distanceToTheRight(this.player, closestR);

      if (distanceR === 1) {
        return
      } else if (distanceR > this.player.velocity) {
        this.player.right();
      } else {
        this.player.x += (distanceR - 1);
      }

      this.animate();

    } else if (key === 32) {
      let closestB = wallUtil.closestWallBelow(this.player, this.level.arrWalls);
      let distanceB = wallUtil.distanceBelow(this.player, closestB);
      
      if (distanceB > 1) {
        this.player.jumping = false;
        return
      } else {
        this.player.jumping = true;
        this.player.jump();
        this.animate();
        // this.player.jumping = false;
      }
    }
  }
  
}

export default GameView;

