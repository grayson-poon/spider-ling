import { wallUtil } from "./modules/wallUtil";
import { vecUtil } from "./modules/vecUtil";


class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;

    this.gameSession = true;

    // relations
    this.canvas = this.ctx.canvas;
    this.player = this.game.currentPlayer;
    this.level = this.game.currentLevel;

    // binds
    this.animate = this.animate.bind(this);
    this.keydownController = this.keydownController.bind(this);
    this.playerImpulse = this.playerImpulse.bind(this);

    this.listenDown();
    this.listenClick();
  }

  animate() {
    if (this.gameSession) {
      this.game.renderFrame(this.ctx);
      window.requestAnimationFrame(this.animate);
    }
  }

  start() {
    window.requestAnimationFrame(this.animate);
  }

  pause() {
    this.gameSession = false;
    document.removeEventListener("keydown", this.keydownController);
    this.canvas.removeEventListener("click", this.playerImpulse);
  }

  resume() {
    this.gameSession = true;
    this.start();
    document.addEventListener("keydown", this.keydownController);
    this.canvas.addEventListener("click", this.playerImpulse);
  }

  listenDown() {
    document.addEventListener("keydown", this.keydownController);
  }

  // listenOver() {
  //   this.canvas.addEventListener("mouseover", this.handleOver);
  // }

  keydownController(event) {
    event.preventDefault();
    let key = event.keyCode;
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

      // this.animate();

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

      // this.animate();

    } else if (key === 32) {
      let closestB = wallUtil.closestWallBelow(this.player, this.level.arrWalls);
      let distanceB = wallUtil.distanceBelow(this.player, closestB);
      
      if (distanceB > 2) {
        this.player.jumping = true;
        return
      } else {
        this.player.jumping = true;
        this.player.jump();
        // this.animate();
      }
    }
  }

  listenClick() {
    this.canvas.addEventListener("click", this.playerImpulse);
  }

  playerImpulse(event) {
    event.preventDefault();
    let rect = this.canvas.getBoundingClientRect();

    let playerPos = [this.player.x, this.player.y];
    let clickPos = [event.clientX - rect.left, event.clientY - rect.top];
    let unitVec = vecUtil.normalize(playerPos, clickPos);

    let closestTest = wallUtil.closestWallToTheLeft(this.player, this.level.arrWalls);

    // this.player.jumping = true; WORKS BUT NEEDS TO BE REFACTORED and made more user friendly
    // if (closestTest.containsPoint(this.player.x + unitVec[0] * this.player.maxImpulse, this.player.y + unitVec[1] * this.player.maxImpulse)) {
    //   return;
    // }
    this.player.impulse(unitVec);
    this.player.jumping = false;
  }
}

export default GameView;

